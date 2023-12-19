// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpDnfSL34rIwauK-0--3MYnT60QiRMRrM",
  authDomain: "facebook-12864.firebaseapp.com",
  projectId: "facebook-12864",
  storageBucket: "facebook-12864.appspot.com",
  messagingSenderId: "43382349010",
  appId: "1:43382349010:web:052285eafee88726b9610b",
  measurementId: "G-6J3M1G9PX5"
};

// Initialize Firebase
const firbaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firbaseApp);
const provider  = new GoogleAuthProvider();
const db = getFirestore(firbaseApp);
const ImgDB = getStorage(firbaseApp);


export {db,auth,provider,ImgDB};
export default firbaseApp;