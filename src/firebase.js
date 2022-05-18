import firebase from "firebase";

const fireBaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCa5Q7G0InxVgjckt4kM7jmLdCwAmXLoag",
  authDomain: "shopping-list-de1d2.firebaseapp.com",
  projectId: "shopping-list-de1d2",
  storageBucket: "shopping-list-de1d2.appspot.com",
  messagingSenderId: "659776539297",
  appId: "1:659776539297:web:5ac462e92a729013147ee0",
  measurementId: "G-W2ZHJH5KBK",
});

const dataBase = fireBaseApp.firestore();

export default dataBase;
