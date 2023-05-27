
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {collection,getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBmxezUC6NN6lKAw8gie9pA33XTeTmzRok",  //ye ni dala
  //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "smart-classroom-dfed9.firebaseapp.com",
  projectId: "smart-classroom-dfed9", //ye ni dala
  //   projectId: "react-auth-6788d",
  storageBucket: "smart-classroom-dfed9.appspot.com", //ye ni dala
  //   storageBucket: "react-auth-6788d.appspot.com",
  messagingSenderId: "425334181887",
  appId: "1:425334181887:web:c7266a276ac11544d1e1ca",
  measurementId: "G-FHDJ991GT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);



export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");