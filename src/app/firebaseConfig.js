import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJwGt6VPY78tdrpQuLGCf0jXg8PKAyRWc",
  authDomain: "nexttodo-e5de7.firebaseapp.com",
  projectId: "nexttodo-e5de7",
  storageBucket: "nexttodo-e5de7.appspot.com",
  messagingSenderId: "453152383427",
  appId: "1:453152383427:web:bec041bdebdc7ab7629d76",
  measurementId: "G-MFSXFJYE25",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
