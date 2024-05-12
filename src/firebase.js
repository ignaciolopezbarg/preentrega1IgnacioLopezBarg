import { initializeApp } from "firebase/app";
//console.log(import.meta.env.VITE_apiKey)

const firebaseConfig = {
  apiKey: "AIzaSyDZEKjDzBR53_K-ztycmmh2-uTg_V9u8WQ",
  authDomain: "funkoshop-81cdb.firebaseapp.com",
  projectId: "funkoshop-81cdb",
  storageBucket: "funkoshop-81cdb.appspot.com",
  messagingSenderId: "954459579713",
  appId: "1:954459579713:web:a22fbe8660e933391a6dc0"
};

export const app = initializeApp(firebaseConfig);