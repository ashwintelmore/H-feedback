import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore' 

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBESE_API_KEY,
    authDomain: process.env. REACT_APP_FIREBESE_AUTH_DOMAIN,
    projectId: process.env. REACT_APP_FIREBESE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBESE_STORAGE_BUCKET ,
    messagingSenderId:process.env. REACT_APP_FIREBESE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBESE_APP_ID
  };

 // <- needed if using firestore

//   Initialize Firebase
  export const app = firebase.initializeApp(firebaseConfig);