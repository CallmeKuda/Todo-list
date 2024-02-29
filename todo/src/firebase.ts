// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVuIDnhZdJvzBrDm5axXUjO-yE5bYAM9Y",
  authDomain: "todo-f73c4.firebaseapp.com",
  projectId: "todo-f73c4",
  storageBucket: "todo-f73c4.appspot.com",
  messagingSenderId: "936423378893",
  appId: "1:936423378893:web:5a453a16920eadc8cdfe84",
  measurementId: "G-VE3GVZ2RWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);