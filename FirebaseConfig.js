// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDeSkbRt2abXKFd5lkBdg-nZW9VM9kl5-c",
  authDomain: "debugpixels.firebaseapp.com",
  projectId: "debugpixels",
  storageBucket: "debugpixels.firebasestorage.app",
  messagingSenderId: "237978646233",
  appId: "1:237978646233:web:a186c7cad38724b83bf0c8",
  measurementId: "G-40SYMXPB7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };