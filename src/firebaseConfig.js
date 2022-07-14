import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "messenger-app-87629.firebaseapp.com",
  databaseURL: "http://messenger-app-87629.firebaseio.com",
  projectId: "messenger-app-87629",
  storageBucket: "messenger-app-87629.appspot.com",
  messagingSenderId: "1054502657957",
  appId: "1:1054502657957:web:b8d21513f5e8c0ccffd24c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };