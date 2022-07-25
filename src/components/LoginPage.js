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

  async function signInWithGoogle() {
    const google_provider = new GoogleAuthProvider();
    const auth = getAuth(firebaseApp);

    await setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return signInWithPopup(auth, google_provider);
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <Button variant="primary" size="lg" active onClick={signInWithGoogle}>
      Login \w Google
    </Button>
  );
}

export default LoginPage;
