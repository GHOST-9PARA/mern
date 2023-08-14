
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGwDTVE_2vU7jxuFYKXrtsKsDhmEwLmiI",
  authDomain: "react-netflix-clone-5c40a.firebaseapp.com",
  projectId: "react-netflix-clone-5c40a",
  storageBucket: "react-netflix-clone-5c40a.appspot.com",
  messagingSenderId: "948371426553",
  appId: "1:948371426553:web:6aeafdf0a6ce1ae251a628",
  measurementId: "G-7ZLHNWDMYE"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);