import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {get} from "svelte/store";
import {Firebaseapp, userStore} from "../store/firebase.js";

const auth = getAuth(get(Firebaseapp));

export class Authentication{
    loginWithEmailAndPassword = (email, password) =>{
        signInWithEmailAndPassword (auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            userStore.set(user); //Se guarda el usuario en store
            console.log("logueado!");
            console.log(get(userStore));
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log("error!");
            console.log(errorMessage);
        });
    }
}

