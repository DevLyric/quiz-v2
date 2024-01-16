// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE2Mbd1YY8EFA6G6aasj-efdIbaP662So",
  authDomain: "quiz-v2-19890.firebaseapp.com",
  projectId: "quiz-v2-19890",
  storageBucket: "quiz-v2-19890.appspot.com",
  messagingSenderId: "141516677040",
  appId: "1:141516677040:web:eace8acf062d0f22f18075",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
