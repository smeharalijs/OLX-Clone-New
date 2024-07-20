import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  } from "firebase/auth";
// Import the functions you need from the SD
const firebaseConfig = {
  apiKey: "AIzaSyABz5jz2E06Ib2h4kpZqKHku4hbHaK8EqU",
  authDomain: "olx-clone-app-fcace.firebaseapp.com",
  projectId: "olx-clone-app-fcace",
  storageBucket: "olx-clone-app-fcace.appspot.com",
  messagingSenderId: "31142302946",
  appId: "1:31142302946:web:871f0aa76e9fc028d43abb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export function     register(email, password){
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   alert("Successfully registered")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

}


export function login(email, password){
    
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    alert("Successfully logged in")
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

}




