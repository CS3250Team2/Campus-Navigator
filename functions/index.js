const functions = require('firebase-functions');
const admin = require('firebase-admin');
const htmlparser = require('htmlparser2');
const fs = require('fs');
const os = require('os');
const path = require('path');

admin.initializeApp();

exports.parseHTML = functions.storage.object().onFinalize((object, context) => {
    let uid = object.name.split(/[.\/]/);
    const db = admin.database().ref(`users/${uid[1]}`);
    const fileName = path.basename(object.name);
    const bucket = admin.storage().bucket('schedule');
    const tempPath = path.join(os.tmpdir(), fileName);

    let schedule = bucket
        .file(fileName)
        .download({
            destination: tempPath,
        })
        .then(() => {
            console.log('Image downloaded to', tempPath);
            return fs.readFile(tempPath, 'utf8', (err, data) => {
                /*PARSER LOGIC GOES HERE*/
            });
        })
        .then(() => fs.unlinkSync(tempPath));

    console.log();

    //db.update({ schedule: 'test' });
    return 1;
});
