// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpRfK5SiF6tXM9sPTuhJpTLefOkjUIh24",
  authDomain: "news-portal-83df8.firebaseapp.com",
  projectId: "news-portal-83df8",
  storageBucket: "news-portal-83df8.firebasestorage.app",
  messagingSenderId: "1002765928587",
  appId: "1:1002765928587:web:0cb737cc5e2eed139a2c8e",
  measurementId: "G-TX1SKMG7QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// تصدير قاعدة البيانات عشان نستخدمها في بقية الملفات
export const db = getFirestore(app);
export default app;