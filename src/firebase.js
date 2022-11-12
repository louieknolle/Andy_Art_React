import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCfvsCfpb8FL3DYHQu37BCbG3I02PYisFk",
  authDomain: "arknolle-portfolio.firebaseapp.com",
  projectId: "arknolle-portfolio",
  storageBucket: "arknolle-portfolio.appspot.com",
  messagingSenderId: "462361497292",
  appId: "1:462361497292:web:ae45fc2627803374b57c69",
  measurementId: "G-YH8ZPGKMLK"
};

// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
