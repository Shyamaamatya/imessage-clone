// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
// import firebaseConfig from "./firebaseConfig"
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAnalytics } from 'firebase/analytics';
// // import firebase from "firebase";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional


//   const app = initializeApp(firebaseConfig);
// //   const db = app.firestore();
// const db = getFirestore(app);
// const analytics = getAnalytics(app)
// export const auth = getAuth(app) //auth instance
// console.log("auth",auth);
// // const provider = new GoogleAuthProvider(firebaseConfig, auth);
// const provider = new GoogleAuthProvider();
// // const provider = new firebase.auth.GoogleAuthProvider();
// signInWithPopup(provider);

// export {provider, analytics}
// export default {app, db}
// // export default app;

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import firebaseConfig from "./firebaseConfig"

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app)
const provider = new GoogleAuthProvider();


export const auth = getAuth(app) //auth instance
console.log("auth",auth);
signInWithPopup(auth, provider);
export {provider}
export default app