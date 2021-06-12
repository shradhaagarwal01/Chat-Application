import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyBZCIZ282tuml8_3yS9mGwTp-nDnMmMTnc",
  authDomain: "chat-app-d884b.firebaseapp.com",
  databaseURL: "https://chat-app-d884b-default-rtdb.firebaseio.com",
  projectId: "chat-app-d884b",
  storageBucket: "chat-app-d884b.appspot.com",
  messagingSenderId: "514610181970",
  appId: "1:514610181970:web:b93ceff048ae66a76fac8b"
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();

