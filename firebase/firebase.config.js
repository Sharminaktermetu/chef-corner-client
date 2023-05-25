// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzyF_3oCVfmbQNZ_ucBQ_-ldnGu1WrpgI",
  authDomain: "chef-corner-6e244.firebaseapp.com",
  projectId: "chef-corner-6e244",
  storageBucket: "chef-corner-6e244.appspot.com",
  messagingSenderId: "167919575238",
  appId: "1:167919575238:web:6a40c240dd69fcf7a9b7c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app