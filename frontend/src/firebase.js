// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOhL5Kt2U9C1DWWtvJ_v69KD100SRiN78",
  authDomain: "thesis-7edb1.firebaseapp.com",
  projectId: "thesis-7edb1",
  storageBucket: "thesis-7edb1.appspot.com",
  messagingSenderId: "667252813371",
  appId: "1:667252813371:web:576c9965090cab6d27f61e",
  measurementId: "G-X86Q978M89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, process.env.REACT_APP_BUCKET_URL);
export default storage;
