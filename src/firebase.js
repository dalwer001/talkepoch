import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAftoqslUbyv__jweC1E5YgUOHoOvbSLMo",
    authDomain: "talkepoch.firebaseapp.com",
    projectId: "talkepoch",
    storageBucket: "talkepoch.appspot.com",
    messagingSenderId: "764716019943",
    appId: "1:764716019943:web:26f754fc29850ddfb9f242"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth(); 
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;