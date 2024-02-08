// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1R0mpUTmBopv7hHkr9MpSJ1xhejp7qMI",
  authDomain: "quillwriter-8b899.firebaseapp.com",
  projectId: "quillwriter-8b899",
  storageBucket: "quillwriter-8b899.appspot.com",
  messagingSenderId: "140216382931",
  appId: "1:140216382931:web:89ac9123af316dadddab26",
  measurementId: "G-6RZYSYD1S3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();