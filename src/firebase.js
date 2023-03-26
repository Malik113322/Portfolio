import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADoMQO6XOsuZZD26D1WRWHdRyhISMpIsA",
  authDomain: "danish-portfolio-c9c48.firebaseapp.com",
  projectId: "danish-portfolio-c9c48",
  storageBucket: "danish-portfolio-c9c48.appspot.com",
  messagingSenderId: "1065086856221",
  appId: "1:1065086856221:web:f57ba680a2392443ad6af4"
};

 export const app = initializeApp(firebaseConfig);

 export const db = getFirestore();