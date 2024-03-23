import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYcKTICaU2HqtJi4zBj1NfZEKHadzUiLc",
    authDomain: "kodigomusic-50936.firebaseapp.com",
    projectId: "kodigomusic-50936",
    storageBucket: "kodigomusic-50936.appspot.com",
    messagingSenderId: "104743614320",
    appId: "1:104743614320:web:11e9bcabfacc76d21cc1b5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
