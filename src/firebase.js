// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGK-1NK1CTLAwWz6OwAJq1e3HBSWAGBLw",
    authDomain: "facebook-clone-d7d3e.firebaseapp.com",
    databaseURL: "https://facebook-clone-d7d3e.firebaseio.com",
    projectId: "facebook-clone-d7d3e",
    storageBucket: "facebook-clone-d7d3e.appspot.com",
    messagingSenderId: "382974933696",
    appId: "1:382974933696:web:174f89ceb5332024c14b25",
    measurementId: "G-RNESB6RT3Y"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db  = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
