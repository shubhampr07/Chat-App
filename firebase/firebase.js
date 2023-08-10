// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARDTF9Ho6zmmfGB4xsgPoJR8cyRdm49qI",
  authDomain: "fir-chat-app-5dc93.firebaseapp.com",
  projectId: "fir-chat-app-5dc93",
  storageBucket: "fir-chat-app-5dc93.appspot.com",
  messagingSenderId: "112188731024",
  appId: "1:112188731024:web:4668c7ee7a0354d5703215"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);