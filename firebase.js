import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'



var firebaseConfig = {
  apiKey: "AIzaSyAIOTi9PTYDmhEkTEFfgW6IH0XymWrGvCQ",
  authDomain: "authentication-34f70.firebaseapp.com",
  databaseURL: "https://authentication-34f70.firebaseio.com",
  projectId: "authentication-34f70",
  storageBucket: "authentication-34f70.appspot.com",
  messagingSenderId: "329999111523",
  appId: "1:329999111523:web:ae54151a544133bf5f6f56",
  measurementId: "G-RXYK6MRVN4"
};
  firebase.initializeApp(firebaseConfig);

export default firebase;


