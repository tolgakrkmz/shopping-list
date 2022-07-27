import React from "react";
import Button from "react-bootstrap/Button";
import { firebaseApp } from "../firebase/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  getAuth,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  async function handleSignInWithGoogleButtonClick() {
    const google_provider = new GoogleAuthProvider();
    const auth = getAuth(firebaseApp);

    await setPersistence(auth, browserLocalPersistence);
    try {
      await signInWithPopup(auth, google_provider);
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
