export const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const errorCodeToMessage = (errorCode: string) => {
  // TODO: only "auth/email-already-in-use" will be triggered in-app. Maybe remove the rest.
  // It is very unlikely that the other error codes will be used
  // maybe except for "auth/weak-password" but I am not sure how
  // that is triggered

  switch (errorCode) {
    case "auth/email-already-in-use":
      return "Email is already in use";
    case "auth/invalid-email":
      return "Email is invalid";
    case "auth/weak-password":
      return "Password is too weak";
    default:
      return "An unknown error occurred";
  }
};

export { initializeApp } from "firebase/app";
export {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
export { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

export type { User } from "firebase/auth";
