import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmoDENcm0WkXugMU5PlldR_6e1jNrhA5k",
  authDomain: "asset-tracker-cc1fb.firebaseapp.com",
  projectId: "asset-tracker-cc1fb",
  storageBucket: "asset-tracker-cc1fb.firebasestorage.app",
  messagingSenderId: "30080486147",
  appId: "1:30080486147:web:6dbfdf7cfea6038df0b736"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);