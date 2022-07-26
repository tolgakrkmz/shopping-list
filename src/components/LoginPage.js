import React from "react";
import GoogleButton from "react-google-button";
import { db, firebaseApp } from "../firebase/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  getAuth,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

function LoginPage() {
  const navigate = useNavigate();

  function signInWithGoogle() {
    const google_provider = new GoogleAuthProvider();
    const auth = getAuth(firebaseApp);

    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return signInWithPopup(auth, google_provider);
      })
      .then((cred) => {
        const usersRef = collection(db, "users");
        addDoc(usersRef, {
          name: cred.user.displayName,
        });
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return <GoogleButton onClick={signInWithGoogle} />;
}

export default LoginPage;
