const firebase = require('firebase')
const config = {
  apiKey: "AIzaSyBGxH4iGri3Q8zK4TG9WSphCSO2mTwGJiE",
  authDomain: "campus-navigator-e76a1.firebaseapp.com",
  databaseURL: "https://campus-navigator-e76a1.firebaseio.com",
  projectId: "campus-navigator-e76a1",
  storageBucket: "campus-navigator-e76a1.appspot.com",
  messagingSenderId: "641976338901"
}
firebase.initializeApp(config)
const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()
module.exports = {
  firebase,
  provider,
  auth
}
