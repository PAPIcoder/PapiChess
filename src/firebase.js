import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCKKDpWuXZNFkUW5jqhAYHWlyYMseqBBy4",
    authDomain: "papi-chess.firebaseapp.com",
    projectId: "papi-chess",
    storageBucket: "papi-chess.appspot.com",
    messagingSenderId: "265255436364",
    appId: "1:265255436364:web:4ad6dc7bdb402d35b534e9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()
  export const auth = firebase.auth()
  export default firebase