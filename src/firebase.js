// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDTe6pErYokfC38uL1TBhnYxqymImfbC3Y",
    authDomain: "facebook-clone-dd461.firebaseapp.com",
    databaseURL: "https://facebook-clone-dd461.firebaseio.com",
    projectId: "facebook-clone-dd461",
    storageBucket: "facebook-clone-dd461.appspot.com",
    messagingSenderId: "503656494191",
    appId: "1:503656494191:web:6710e60f8c54e99aed499a",
    measurementId: "G-LDXC36ZYF3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };

  export default db;
