// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "resume-builder-db7f1.firebaseapp.com",
  projectId: "resume-builder-db7f1",
  storageBucket: "resume-builder-db7f1.appspot.com",
  messagingSenderId: "937270938269",
  appId: "1:937270938269:web:cd9248981f0b793ceb6274",
  measurementId: "G-G3CX86CBHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
