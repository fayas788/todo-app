import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDdZKTOwyQ4cpuGUGohticP1VzG6pKBbJ4",
    authDomain: "todo-app4810.firebaseapp.com",
    projectId: "todo-app4810",
    storageBucket: "todo-app4810.appspot.com",
    messagingSenderId: "1067626161286",
    appId: "1:1067626161286:web:e81c503eb3f4c96e475d07"
});
 
const db = firebaseApp.firestore( ) ;

export default db;