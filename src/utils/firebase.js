// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlBHBXStEC1Z3Barz2u8zqfFKQg8nZ7nU",
  authDomain: "netflixgpt-46949.firebaseapp.com",
  projectId: "netflixgpt-46949",
  storageBucket: "netflixgpt-46949.firebasestorage.app",
  messagingSenderId: "131083116865",
  appId: "1:131083116865:web:f33e11b5347a3b3e94c1c0",
  measurementId: "G-1G2V4FZ29N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();