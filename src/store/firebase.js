import { initializeApp } from "firebase/app";
import {readable, writable} from "svelte/store";

const firebaseConfig = {
    apiKey: "AIzaSyBmvy9U7rPwT1z6v0PGQ84pQXIbKl5Q3i8",
    authDomain: "test01-aab8f.firebaseapp.com",
    projectId: "test01-aab8f",
    storageBucket: "test01-aab8f.appspot.com",
    messagingSenderId: "120996894655",
    appId: "1:120996894655:web:df4af04c95287345a5730a"
};
export const Firebaseapp = readable(initializeApp(firebaseConfig));
export const userStore = writable("");