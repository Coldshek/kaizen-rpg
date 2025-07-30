// firebase-config.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPfpPeqxqL47TodPKJLSZxDF6waKNhhfw",
  authDomain: "kaizen-rpg.firebaseapp.com",
  projectId: "kaizen-rpg",
  storageBucket: "kaizen-rpg.appspot.com", // cuidado, tenías esto mal escrito
  messagingSenderId: "232887985196",
  appId: "1:232887985196:web:a8480f832acbd07a195d89",
};

// Solo inicializa si no hay apps ya
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getFirestore(app);

export { app, db };
