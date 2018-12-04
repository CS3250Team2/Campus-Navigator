import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/functions'

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
        this.db = app.database();
        this.storage = app.storage();
        this.functions = app.functions();
    }

    /* Authentication API */
    // Sign Up
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    // Sign In
    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    // Sign out
    doSignOut = () => this.auth.signOut();

    // Password Reset
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    // Password Change
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    /* User API */
    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users')
}

export default Firebase;
