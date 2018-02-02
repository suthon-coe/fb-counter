import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBrwfsWvCVrvSmghTBwNj7N9EfHZq_tScY",
    authDomain: "fb-counter-58d11.firebaseapp.com",
    databaseURL: "https://fb-counter-58d11.firebaseio.com",
    projectId: "fb-counter-58d11",
    storageBucket: "fb-counter-58d11.appspot.com",
    messagingSenderId: "471428595337"
  };

firebase.initializeApp(config);
const db = firebase.firestore();
export default db;