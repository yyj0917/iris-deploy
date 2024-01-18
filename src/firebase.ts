import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB2ZO22ZtNadJ1tGGt_sqS-m1Sm__6UGkY",
  authDomain: "iris-711d9.firebaseapp.com",
  projectId: "iris-711d9",
  storageBucket: "iris-711d9.appspot.com",
  messagingSenderId: "465394610368",
  appId: "1:465394610368:web:63b39191626bebee4fbd25",
  measurementId: "G-70T3KMYRZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);