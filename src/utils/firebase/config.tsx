import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyCP0osUN3Edg_F4VZXThZNrKjqAz2UPMzc',
  authDomain: 'flirt-bate.firebaseapp.com',
  projectId: 'flirt-bate',
  storageBucket: 'flirt-bate.appspot.com',
  messagingSenderId: '342233203480',
  appId: '1:342233203480:web:47322126b94b162b1f146d',
  measurementId: 'G-4ZNVHVM94F'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const firbase_db = getFirestore(app);
