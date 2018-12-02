import app from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    /* Authentication API */
    // Sign Up
    doCreateUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);

    // Sign In
    doSignInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);

    // Sign out
    doSignOut = () => auth.signOut();

    // Password Reset
    doPasswordReset = email => auth.sendPasswordResetEmail(email);

    // Password Change
    doPasswordUpdate = password => auth.currentUser.updatePassword(password);
}

const db = firebase.database();

export { auth, db };
