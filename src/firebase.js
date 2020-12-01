import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVfkOFAC3NYt9hGagDQKoFAAf1lUMtssc",
  authDomain: "fir-723a1.firebaseapp.com",
  databaseURL: "https://fir-723a1.firebaseio.com",
  projectId: "fir-723a1",
  storageBucket: "fir-723a1.appspot.com",
  messagingSenderId: "239702913102",
  appId: "1:239702913102:web:d8b8c1741cedba392b531f",
  measurementId: "G-M63YX8H5ZN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
