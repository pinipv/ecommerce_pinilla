
import { initializeApp } from "firebase/app";
import { getFirestore}from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDvCpCkx7Dx8YrcW14cHQP5rN8Rb8_g-Co",
  authDomain: "e-commerce-2b928.firebaseapp.com",
  projectId: "e-commerce-2b928",
  storageBucket: "e-commerce-2b928.appspot.com",
  messagingSenderId: "5619025547",
  appId: "1:5619025547:web:a390ca76e0d29ae7b3368e"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
