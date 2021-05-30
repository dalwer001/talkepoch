import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCBikqTdOj3bJqPHwy5rqYN9TPXLGgPYPQ",
    authDomain: "talkepoch-51db4.firebaseapp.com",
    projectId: "talkepoch-51db4",
    storageBucket: "talkepoch-51db4.appspot.com",
    messagingSenderId: "821242557137",
    appId: "1:821242557137:web:7219b7bd2e523c15294bf0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider }
export default db;