import React from "react";
import Button from "react-bootstrap/Button";
import {
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  getAuth,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { firebaseApp } from "../firebase/firebase";

function LoginPage() {
  const navigate = useNavigate();

  async function handleSignInWithGoogleButtonClick() {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(firebaseApp);

    try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Button
      variant="primary"
      size="lg"
      active
      onClick={handleSignInWithGoogleButtonClick}
    >
      Login \w Google
    </Button>
  );
}

export default LoginPage;
