// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqhLfmOfmP-_8DOcoEH7Ck7fMF9Id4vJ4",
    authDomain: "earn-project-5f892.firebaseapp.com",
    databaseURL: "https://earn-project-5f892-default-rtdb.firebaseio.com/",
    projectId: "earn-project-5f892",
    storageBucket: "earn-project-5f892.firebasestorage.app",
    messagingSenderId: "8457886057",
    appId: "1:8457886057:web:b5e01d0972d169f47085f8"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Admin UID (replace with your admin UID)
const ADMIN_UID = "your_admin_uid_here";