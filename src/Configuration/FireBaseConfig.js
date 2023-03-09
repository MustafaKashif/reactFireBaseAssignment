// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOxDOpQvhPNSGJOvE2PUUnmwznW09v3Dc",
  authDomain: "newreactfirebasemustafa.firebaseapp.com",
  projectId: "newreactfirebasemustafa",
  storageBucket: "newreactfirebasemustafa.appspot.com",
  messagingSenderId: "1048241077899",
  appId: "1:1048241077899:web:3f15dc94d3554619245e8e",
  measurementId: "G-MCKJC4XQQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;