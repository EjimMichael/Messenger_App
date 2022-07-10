import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAsIn2_Hn5loEkFEumGA4QaQHQCWz-Z3g",
  authDomain: "messenger-app-87629.firebaseapp.com",
  projectId: "messenger-app-87629",
  storageBucket: "messenger-app-87629.appspot.com",
  messagingSenderId: "1054502657957",
  appId: "1:1054502657957:web:b8d21513f5e8c0ccffd24c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);