const firebase = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAi9Z5xr5tAFU10ogXUObTr9mNSbEmi4ZQ",
  authDomain: "auth-59eb3.firebaseapp.com",
  projectId: "auth-59eb3",
  storageBucket: "auth-59eb3.appspot.com",
  messagingSenderId: "194340355359",
  appId: "1:194340355359:web:884dfe6f4699196ac5c42a",
  measurementId: "G-REVPYQ3NQR"
};


const app = !firebase.getApps().length ? firebase.initializeApp(firebaseConfig) : firebase.getApp();
const db = getFirestore();


export default db;