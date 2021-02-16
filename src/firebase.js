import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARPQfW_Q7IWK81k4QjfozUFzxi-0Pcw-0",
    authDomain: "fb-clone-cff72.firebaseapp.com",
    projectId: "fb-clone-cff72",
    storageBucket: "fb-clone-cff72.appspot.com",
    messagingSenderId: "669833011781",
    appId: "1:669833011781:web:65c0c72348c120d593792c",
    measurementId: "G-NFBCCZWRZN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;