// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCWEXTS7NZRUrfEvOXWD0PvvxnGq__cT0",
    authDomain: "redknot-tourism-management.firebaseapp.com",
    projectId: "redknot-tourism-management",
    storageBucket: "redknot-tourism-management.appspot.com",
    messagingSenderId: "782965513580",
    appId: "1:782965513580:web:a2201469863d8eaf706749"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth