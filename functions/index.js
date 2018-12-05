const functions = require('firebase-functions');
const admin = require('firebase-admin');
const fs = require('fs');
const os = require('os');
const path = require('path');
const htmlparser = require('htmlparser2');

admin.initializeApp();
const db = admin.database().ref('users');
const bucket = admin.storage().bucket();

exports.parseSchedule = functions.storage
    .bucket()
    .object()
    .onFinalize(async (object) => {
        const fileName = object.name;
        const fileNames = fileName.split('.');
        const uid = fileNames[0];
        const user = db.child(uid);
        const tempPath = path.join(os.tmpdir(), fileName);

        await bucket
            .file(fileName)
            .download({ destination: tempPath })
            .then(() => {
                let counter = 0;
                let times = [];
                let days = [];
                let building = [];
                let date = [];
                let classes = [];
                let isGood = false;

                fs.readFile(tempPath, 'utf8', (err, data) => {
                    const parser = new htmlparser.Parser(
                        {
                            ontext: function(text) {
                                if (text === 'Class') {
                                    isGood = true;
                                    counter++;
                                }
                                if (text != 'Lecture' && text != 'Class' && isGood) {
                                    if (counter === 2) {
                                        times.push(text);
                                    }
                                    if (counter === 4) {
                                        days.push(text);
                                    }
                                    if (counter === 6) {
                                        building.push(text);
                                    }
                                    if (counter === 8) {
                                        date.push(text);
                                    }
                                    counter++;
                                }
                                if (text === 'Lecture') {
                                    isGood = false;
                                    counter = 0;
                                }
                            },
                        },
                        { decodeEntities: true }
                    );
                    parser.write(data);

                    if (times.length !== building.length) return null;

                    //Generate class objects from arrays
                    for (let i = 0; i < times.length; i++) {
                        let splitTime = times[i].split(" - ");
                        let temp = new Object();

                        temp.startTime = splitTime[0];
                        temp.endTime = splitTime[1];
                        temp.days = days[i];
                        temp.building = building[i];
                        temp.date = date[i];
                        classes.push(temp);
                    }

                    return user.child('schedule').set(classes);
                });
            })
            .then(() => {
                fs.unlinkSync(tempPath);
            });
    });
