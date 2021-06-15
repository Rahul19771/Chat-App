import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAknL0NnU9fT2tG0cK1lzdE7RwJbER7MOs",
    authDomain: "ms-teams-clone-8c30c.firebaseapp.com",
    projectId: "ms-teams-clone-8c30c",
    storageBucket: "ms-teams-clone-8c30c.appspot.com",
    messagingSenderId: "471001098899",
    appId: "1:471001098899:web:2d6b14b3bbf834ca867b66",
    measurementId: "G-QXD8MJPYM1"
  }).auth();