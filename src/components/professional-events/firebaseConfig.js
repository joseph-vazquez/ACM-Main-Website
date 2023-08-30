import firebase from "firebase";

const config={
    apiKey: "AIzaSyBEoLxjbSg3uJ6JGJ5r4NapscconRwWBic",
    authDomain: "acm-calstatela.firebaseapp.com",
    databaseURL: "https://acm-calstatela.firebaseio.com",
    projectId: "acm-calstatela",
    storageBucket: "acm-calstatela.appspot.com",
    messagingSenderId: "417128442198",
    appId: "1:417128442198:web:906c6557e5e73ac1a90ef7",
    measurementId: "G-PZRKWYXMDZ"
}

firebase.initializeApp(config);
// firebase.auth;
export default firebase;