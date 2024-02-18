// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW2FPKWv_q32gcZeg0eaHbvmJQjTWwLl4",
  authDomain: "chat-app-7cefe.firebaseapp.com",
  projectId: "chat-app-7cefe",
  storageBucket: "chat-app-7cefe.appspot.com",
  messagingSenderId: "447444819983",
  appId: "1:447444819983:web:5385deb8e338058ac2837a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)