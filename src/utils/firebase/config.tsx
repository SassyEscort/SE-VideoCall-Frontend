import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { collection, doc, getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCP0osUN3Edg_F4VZXThZNrKjqAz2UPMzc',
//   authDomain: 'flirt-bate.firebaseapp.com',
//   projectId: 'flirt-bate',
//   storageBucket: 'flirt-bate.appspot.com',
//   messagingSenderId: '342233203480',
//   appId: '1:342233203480:web:47322126b94b162b1f146d',
//   measurementId: 'G-4ZNVHVM94F'
// };
const firebaseConfig = {
  apiKey: 'AIzaSyAI-8uWfREFK_IiwndlgfyPxlJ5Q9FDv_M',
  authDomain: 'chat-app-f18ec.firebaseapp.com',
  projectId: 'chat-app-f18ec',
  storageBucket: 'chat-app-f18ec.appspot.com',
  messagingSenderId: '837170864138',
  appId: '1:837170864138:web:587f9c81a434707ef9bff3',
  measurementId: 'G-0R7L5R8740'
};

// Initialize Firebase only if no apps have been initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const analytics = getAnalytics(app);

export const firebase_db = getFirestore(app);

export const generateFirebaseId = () => {
  const uniqueRef = doc(collection(firebase_db, '_'));
  return uniqueRef.id;
};
