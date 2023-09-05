import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAE_oFccE6cig2svTs-6jK23-UedTMOvXI",
    authDomain: "cars-da92b.firebaseapp.com",
    projectId: "cars-da92b",
    storageBucket: "cars-da92b.appspot.com",
    messagingSenderId: "444341094194",
    appId: "1:444341094194:web:f8905c4c0b928ada36b92b"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  export { auth }
  export default db