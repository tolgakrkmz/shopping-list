import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setLoggedUser } from "../redux/userSlice";

function LoginPage() {
  const dispatch = useDispatch();

  function signInWithGoogle() {
    const google_provider = new GoogleAuthProvider();
    signInWithPopup(auth, google_provider)
      .then((result) => {
        dispatch(
          setLoggedUser({
            userName: result.user.displayName,
            userEmail: result.user.email,
            userIsLogged: true,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  }
  return <GoogleButton onClick={signInWithGoogle} />;
}

export default LoginPage;
