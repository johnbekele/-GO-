// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBPC8JVyxjqCLky0e8iYh7PmKAx9zC33z8',
  authDomain: 'temarigo-292a0.firebaseapp.com',
  projectId: 'temarigo-292a0',
  storageBucket: 'temarigo-292a0.firebasestorage.app',
  messagingSenderId: '50186150262',
  appId: '1:50186150262:web:80d937303ce9d7ebf81a57',
  measurementId: 'G-QKEBVH0483',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
