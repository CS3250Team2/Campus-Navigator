const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

parser = () => {
    
}

exports.parseHTML = functions.storage.object().onFinalize((object, context) => {
    let uid = object.name.split(/[.\/]/);
    const db = admin.database().ref(`users/${uid[1]}`);
    
    db.update({'schedule':'test'});
    return 1;
});