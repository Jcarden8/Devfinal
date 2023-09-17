// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//need to setup auth
import {getAuth} from 'firebase/auth'

//neet stuff for storage
import {getStorage} from 'firebase/storage'


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

//activate auth
export const auth = getAuth(app)

//activate storage
export const storage = getStorage(app)
