import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAr4NNRFV2Xv_0VpmcnXcdZjhdzuRFtn6A",
  authDomain: "react-hooks-blog-daa63.firebaseapp.com",
  projectId: "react-hooks-blog-daa63",
  storageBucket: "react-hooks-blog-daa63.appspot.com",
  messagingSenderId: "925813774695",
  appId: "1:925813774695:web:d2718ffae1971fed5b37c2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();