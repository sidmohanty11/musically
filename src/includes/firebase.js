import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDTR9VscVZK57YzaMjFrMgWxYnAGg-hCT4',
  authDomain: 'dumb-http.firebaseapp.com',
  projectId: 'dumb-http',
  storageBucket: 'dumb-http.appspot.com',
  messagingSenderId: '663865020148',
  appId: '1:663865020148:web:cf0632461368d529acd8a1',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');
const storage = firebase.storage();

export {
  auth,
  db,
  usersCollection,
  storage,
  songsCollection,
  commentsCollection,
};
