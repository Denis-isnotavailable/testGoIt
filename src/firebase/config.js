import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8rHikk3RHS6kk0Bu1HpIOvdYQA_gsCCI",
  authDomain: "testgoit-a770f.firebaseapp.com",
  projectId: "testgoit-a770f",
  storageBucket: "testgoit-a770f.appspot.com",
  messagingSenderId: "864510004159",
    appId: "1:864510004159:web:1ddd0d86ab6ddf499b6f0a",
  measurementId: "G-0KMFEHE97P"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);