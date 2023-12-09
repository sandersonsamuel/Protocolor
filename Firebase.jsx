import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJY1lmm1EwYUxk7mQQYUy0gzIo93tRUaI",
  authDomain: "protocolor-4b462.firebaseapp.com",
  projectId: "protocolor-4b462",
  storageBucket: "protocolor-4b462.appspot.com",
  messagingSenderId: "245016985607",
  appId: "1:245016985607:web:76b9826880cb97aabb6aa2",
  measurementId: "G-GFRLTKQJQ2",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
