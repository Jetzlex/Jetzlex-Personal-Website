import firebase from 'firebase';

export default !firebase.apps.length ? firebase.initializeApp({
  apiKey: 'AIzaSyAs47qXXdO4vSn43JOhZVVRP62whtfDMrE',
  authDomain: 'jetzlex-630c7.firebaseapp.com',
  projectId: 'jetzlex-630c7',
  storageBucket: 'jetzlex-630c7.appspot.com',
  messagingSenderId: '803635302107',
  appId: '1:803635302107:web:3d0cfd16087f02513e46fe',
  measurementId: 'G-YYS5T5LGWB'
}).firestore()  : firebase.app()