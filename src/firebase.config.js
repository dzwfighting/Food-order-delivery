// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzO5LWj9yMQLfUsG6LyjdjFo0HDnqEY0I",
  authDomain: "food-order-d3e49.firebaseapp.com",
  projectId: "food-order-d3e49",
  storageBucket: "food-order-d3e49.appspot.com",
  messagingSenderId: "171553363799",
  appId: "1:171553363799:web:f8bf6137ebd95753d11012",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
