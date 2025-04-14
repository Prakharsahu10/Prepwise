
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCzdwLIvr-g0sPNcBusqR6L_7NNWR5VRqY",
  authDomain: "echofy-feb43.firebaseapp.com",
  projectId: "echofy-feb43",
  storageBucket: "echofy-feb43.firebasestorage.app",
  messagingSenderId: "455549619455",
  appId: "1:455549619455:web:dcccfafed9f17da25590ca",
  measurementId: "G-P6WB67QGZ4",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
