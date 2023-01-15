// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaxUxH2WfZacwBYRG-lkeTSr2GjbLjMmI",
  authDomain: "engine-experts.firebaseapp.com",
  projectId: "engine-experts",
  storageBucket: "engine-experts.appspot.com",
  messagingSenderId: "280103196816",
  appId: "1:280103196816:web:c085f81e02735e4f1a6015"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;