// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDz4Uxvxb7PLny2mUkOhFW6ZKHYboaXYCc",
  authDomain: "jobtracker-30121.firebaseapp.com",
  projectId: "jobtracker-30121",
  storageBucket: "jobtracker-30121.firebasestorage.app",
  messagingSenderId: "743273492969",
  appId: "1:743273492969:web:08a1acec1e6879af195b78",
  measurementId: "G-RCQQVQK2Z1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
