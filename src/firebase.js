import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBz28Si-Bb9vMkvOT571k2IaF_x_QtrcQE",
  authDomain: "netflix-clone-31448.firebaseapp.com",
  projectId: "netflix-clone-31448",
  storageBucket: "netflix-clone-31448.appspot.com",
  messagingSenderId: "993969791187",
  appId: "1:993969791187:web:4ff7f3e78b39b118783426",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const fireStoneDB = firebaseApp.database();
const authenticator = firebaseApp.auth();

export { fireStoneDB, authenticator };
