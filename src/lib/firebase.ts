import { initializeApp, getApps, getApp } from "firebase/app";

// Your web app's Firebase configuration, using environment variables.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
// We check if an app is already initialized to prevent errors during hot-reloading.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// You can export other Firebase services you need below, for example:
// import { getAuth } from "firebase/auth";
// export const auth = getAuth(app);

export default app;
