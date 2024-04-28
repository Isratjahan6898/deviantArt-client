// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIGCtBG79eEMCPr0Ffqa3w5GLtiAIw02U",
  authDomain: "deviantart-project.firebaseapp.com",
  projectId: "deviantart-project",
  storageBucket: "deviantart-project.appspot.com",
  messagingSenderId: "289830324690",
  appId: "1:289830324690:web:064be41ead6c881a11a00b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;