import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function signInWithGoogle() {
  const google_provider = new GoogleAuthProvider();
  signInWithPopup(auth, google_provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

function LoginPage() {
  return <GoogleButton onClick={signInWithGoogle} />;
}

export default LoginPage;
