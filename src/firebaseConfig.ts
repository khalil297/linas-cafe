import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// ✅ Replace with your Firebase config from Step 1
const firebaseConfig = {
  apiKey: "AIzaSyBELLFyZI_1NXJD7GmLEtIl6xaFN4XskA0",
  authDomain: "lina-s-cafe.firebaseapp.com",
  projectId: "lina-s-cafe",
  storageBucket: "lina-s-cafe.firebasestorage.app",
  messagingSenderId: "460181953438",
  appId: "1:460181953438:web:948c2eda24c1485932148f",
  measurementId: "G-MG9VSM7D7X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
