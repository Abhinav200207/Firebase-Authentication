import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyD0DyxS1URnoAJPJrkNPwWvqzF9w6pESJE",
    authDomain: "auth-setup-cdc76.firebaseapp.com",
    projectId: "auth-setup-cdc76",
    storageBucket: "auth-setup-cdc76.appspot.com",
    messagingSenderId: "783013967690",
    appId: "1:783013967690:web:ec0d7f5e7b01cf81d2b3b3"
});

export const auth = app.auth()
export default app
