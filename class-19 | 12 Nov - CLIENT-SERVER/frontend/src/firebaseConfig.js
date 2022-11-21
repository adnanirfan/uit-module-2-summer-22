import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCC10QRwsYtruyEY3YljFVPqyb7egx3a0Y",
  authDomain: "uitmodule2.firebaseapp.com",
  databaseURL:
    "https://uitmodule2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "uitmodule2",
  storageBucket: "uitmodule2.appspot.com",
  messagingSenderId: "861025271558",
  appId: "1:861025271558:web:4de5005ff4a75c8b012887",
  // The value of `databaseURL` depends on the location of the database
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { app, database };
