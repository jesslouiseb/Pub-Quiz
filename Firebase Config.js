const firebaseConfig = {
  apiKey: "AIzaSyAfsX6Rnn6iOYslIIa3lT2rG2ppi_Gy0xU",
  authDomain: "left-no-crumbs-pub-quiz.firebaseapp.com",
  databaseURL: "https://left-no-crumbs-pub-quiz-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "left-no-crumbs-pub-quiz",
  storageBucket: "left-no-crumbs-pub-quiz.firebasestorage.app",
  messagingSenderId: "270066797826",
  appId: "1:270066797826:web:991deb7ce84c336ff3c61b"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();