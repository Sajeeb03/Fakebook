// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_RECAT_APP_IapiKey,
    authDomain: import.meta.env.VITE_RECAT_APP_IauthDomain,
    projectId: import.meta.env.VITE_RECAT_APP_IprojectId,
    storageBucket: import.meta.env.VITE_RECAT_APP_IstorageBucket,
    messagingSenderId: import.meta.env.VITE_RECAT_APP_ImessagingSenderId,
    appId: import.meta.env.VITE_RECAT_APP_IappId,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;