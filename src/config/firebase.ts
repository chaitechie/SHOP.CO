import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCVj81Ch9vWOgQajAV0vP_tzse2d53N9hs",
  authDomain: "clothstore-87051.firebaseapp.com",
  projectId: "clothstore-87051",
  storageBucket: "clothstore-87051.firebasestorage.app",
  messagingSenderId: "689440540176",
  appId: "1:689440540176:web:b6d6caa4fc3e6e6c45ac95",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
