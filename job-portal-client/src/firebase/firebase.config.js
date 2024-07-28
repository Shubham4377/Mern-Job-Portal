// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAARbYC5YRVCRCQIdQTxD3qVF9ujl1AzEI",
  authDomain: "job-portal-demo-4ed30.firebaseapp.com",
  projectId: "job-portal-demo-4ed30",
  storageBucket: "job-portal-demo-4ed30.appspot.com",
  messagingSenderId: "517409641890",
  appId: "1:517409641890:web:34bd0845c78fbc81f3cefb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;