import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDf5X2KJbeFYnAI6Bt0goIDmGrfMRlQ6-E",
    authDomain: "test-api-d2336.firebaseapp.com",
    databaseURL: "https://test-api-d2336-default-rtdb.firebaseio.com",
    projectId: "test-api-d2336",
    storageBucket: "test-api-d2336.appspot.com",
    messagingSenderId: "283284707959",
    appId: "1:283284707959:web:ee6cebdfafd61ca7724472",
    measurementId: "G-TLJ5GJ8DSH"
  };
  
  // Initialize Firebase
  const firebaseDB = firebase.initializeApp(firebaseConfig);
  export default firebaseDB.database().ref();
