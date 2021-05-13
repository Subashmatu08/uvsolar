 // initialize firebase app with required plugins
 import firebase from "firebase/app";
 import "firebase/firestore";
 import "firebase/auth";
 import "firebase/storage";
import "firebase/messaging";

  const  firebaseConfig = {
    apiKey: "AIzaSyAwF32RHgZX1MIyUL8SYPRC87i-GhdXYwo",
    authDomain: "school-eb395.firebaseapp.com",
    projectId: "school-eb395",
    storageBucket: "school-eb395.appspot.com",
    messagingSenderId: "71584046740",
    appId: "1:71584046740:web:33c556ee367d47a48c5e81"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;