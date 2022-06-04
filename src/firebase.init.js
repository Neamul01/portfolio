// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeLtOitm3rHlJZ-7S3QTi7OK8DF3TuNkg",
    authDomain: "neamuls-portfolio.firebaseapp.com",
    projectId: "neamuls-portfolio",
    storageBucket: "neamuls-portfolio.appspot.com",
    messagingSenderId: "325307606790",
    appId: "1:325307606790:web:0298fbb299b68cc18c6087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;