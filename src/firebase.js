import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  setDoc,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const getItems = async () => {
  const q = query(collection(db, 'items'));
  const querySnapshot = await getDocs(q);

  const items = [];
  querySnapshot.forEach((i) => {
    const item = i.data();
    items.push(item);
  });
  return items;
};

const registerWithEmailAndPassword = async (
  name,
  email,
  password,
  address,
  landline,
  mobile
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = res;
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
      address,
      landline,
      mobile,
    });
  } catch (err) {
    console.error(err.message);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

const reset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log('Password reset link sent!');
  } catch (err) {
    console.error(err.message);
  }
};

export { getItems, registerWithEmailAndPassword, logout, login, reset, auth };
