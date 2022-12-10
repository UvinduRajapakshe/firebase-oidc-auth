import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBtjZYdVoC0sz0y02Mo_Hfs0uwvMX8qmtE",
    authDomain: "devfest-uvindu.firebaseapp.com",
    projectId: "devfest-uvindu",
    storageBucket: "devfest-uvindu.appspot.com",
    messagingSenderId: "183921951061",
    appId: "1:183921951061:web:211646590096a39192afdc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };