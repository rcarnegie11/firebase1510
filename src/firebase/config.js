import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDibJHPV877zLmfJvTrlsvYKy1eNr3hvls",
  authDomain: "webhosting-487ac.firebaseapp.com",
  projectId: "webhosting-487ac",
  storageBucket: "webhosting-487ac.appspot.com",
  messagingSenderId: "1084174841272",
  appId: "1:1084174841272:web:6079e830dfc0ed216d0b4d",
  measurementId: "G-24R7LSP4KG"
};

// Initialize app
firebase.initializeApp(firebaseConfig);

// exporting the services to use other files in the futrue
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore, firebase as default };

