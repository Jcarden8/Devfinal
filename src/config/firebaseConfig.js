// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAbNLLWoWfKpE8JKwYzXzxGQZ6wkorRuw",
  authDomain: "devfinal-57f80.firebaseapp.com",
  projectId: "devfinal-57f80",
  storageBucket: "devfinal-57f80.appspot.com",
  messagingSenderId: "1047714682904",
  appId: "1:1047714682904:web:7846b67428139a33174b6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// setup database and export it
export const db = getFirestore(app);
