import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  setDoc,
  addDoc,
  getDoc,
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
  console.log(items);
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

const createNewBox = async () => {
  try {
    const user = auth.currentUser;

    if (user) {
      const { uid } = user;
      const userRef = doc(db, 'users', user.uid);
      const date = new Date().toDateString();
      const boxName = `${date} - ${uid}`;
      const boxesRef = collection(userRef, 'boxes');
      const boxDocRef = doc(boxesRef, boxName);
      await setDoc(boxDocRef, {
        name: date,
        items: [],
        sent: [false],
        sold: false,
      });
      console.log('success');
    }
  } catch (error) {
    console.error(error.message);
  }
};

const addToBox = () => {
  // checks to see if user has collection 'boxes' if not, creates doc 'uid - date': { items: [/ref/to/item, "info about item"], sent: [boolean, "tracking details if true"], sold: boolean }
  // if user has collection 'boxes' check if sold: true, if true create new doc 'uid - date' {as a above}
  // if :false check sent: true, if true create new doc 'uid - date' {as a above}
  // if :false add to existing box items array
};

const removeFromBox = () => {
  // checks to see which box is active by checking boolean status of sold: and sent:
  // finds index by matching item name with ref to item in items array
  // removes item/ref and item/ref i+1 (the info string)
};

const deleteBox = () => {
  // function to delete box
};

const getBoxes = () => {
  // function to get all the boxes in an array
};

export {
  getItems,
  registerWithEmailAndPassword,
  logout,
  login,
  reset,
  auth,
  createNewBox,
};
