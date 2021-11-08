export const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const errorCodeToMessage = (errorCode: string) => {
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
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "firebase/auth";

export type { User } from "firebase/auth";
