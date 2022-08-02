import {initializeApp} from "firebase/app"
//import database and auth to attach to firebase
import { getFirestore } from "firebase/firestore";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

const config = {
  apiKey: "AIzaSyCxfkeI5G74QHXMgzHYVYpSV8MNdhopBiQ",
  authDomain: "ecom-db-6bcdc.firebaseapp.com",
  projectId: "ecom-db-6bcdc",
  storageBucket: "ecom-db-6bcdc.appspot.com",
  messagingSenderId: "11066244248",
  appId: "1:11066244248:web:161fe6c0ec5d36c53aa4ed",
  measurementId: "G-VHZGHHJ6FC",
};

const app = initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(provider);

export default app;
