import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAlim-X4ZuDP0Non8YwlErLw6tGAwwuYng",
    authDomain: "disneyplusclone-fb33d.firebaseapp.com",
    projectId: "disneyplusclone-fb33d",
    storageBucket: "disneyplusclone-fb33d.appspot.com",
    messagingSenderId: "1029039088354",
    appId: "1:1029039088354:web:22c87d617b83b7759d34bb",
    measurementId: "G-YBRS1EKXRZ"
  };


  const firbaseApp=firebase.initializeApp(firebaseConfig);
  const db=firbaseApp.firestore()
  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage()

  export {auth,provider,storage}
  export default db;
