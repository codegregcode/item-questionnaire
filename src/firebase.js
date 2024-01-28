import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,

  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const getItems = async () => {
  const querySnapshot = await db.collection('items').get();

  const items = [];
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    items.push(item);
  });
  return items;
};

const getUserItems = () => {
  return 1;
};

export { getItems, getUserItems };
