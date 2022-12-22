
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore, collection} from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyBly4G_lZgP1BR_GiG1a8jUxzqAgy8N3Og",
   authDomain: "jsdr-portfolio.firebaseapp.com",
   projectId: "jsdr-portfolio",
   storageBucket: "jsdr-portfolio.appspot.com",
   messagingSenderId: "499552265925",
   appId: "1:499552265925:web:2017233ca2bef11de172ac"
 
 };
 

// Initialize Firebase
 const app =initializeApp(firebaseConfig);
 const auth= getAuth();
 const db= getFirestore(app);

 export const storage = getStorage(app);
 export const dbRef = collection(db, 'portfolio');

 export const registerNewUser = (email, password)=> createUserWithEmailAndPassword(auth, email, password)
 .then((userCredential) =>{
    const user= userCredential.user
    console.log(user);
 })
 .catch((error)=>{
    console.log(error.code);
    console.log(error.message);
 });
 export const signInWithEmail=(email, password)=> signInWithEmailAndPassword(auth, email, password)
 .then((userCredential) =>{
    const user= userCredential.user
    console.log(user);
 })
 .catch((error)=>{
    console.log(error.code);
    console.log(error.message);
 });
 export const signOutUser=()=>signOut(auth)
 .then(() => {
    console.log( 'You Have Signed Out');
 })
 .catch((error)=>{
    console.log(error.code);
    console.log(error.message);
 });