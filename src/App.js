import ShoppingListPage from "./components/ShoppingListPage";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import PrivateRoutes from "./utils/PrivateRoutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { db, firebaseApp } from "./firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { setLoggedUser } from "./redux/userSlice";
import { getData } from "./redux/productSlice";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userIsLogged = useSelector((state) => state.user.isLogged);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    auth.onAuthStateChanged((user) => {
      dispatch(
        setLoggedUser({
          userName: user?.displayName ?? null,
          userEmail: user?.email ?? null,
          isLogged: Boolean(user),
        })
      );
      navigate("/", { replace: true });
    });
    fetchShoppingList();
  }, []);

  //Fetch data from Firestore
  async function fetchShoppingList() {
    let fetchedData = [];
    const shoppingListRef = collection(db, "shopping-lists");

    onSnapshot(shoppingListRef, (snapshot) => {
      let shallowFetchedData = [...fetchedData];
      snapshot.forEach((doc) => {
        shallowFetchedData.push(doc.data());
      });
      dispatch(getData(shallowFetchedData));
    });
  }

  return (
    <Routes>
      <Route
        path="/shopping-list"
        element={
          <PrivateRoutes isLogged={userIsLogged}>
            <ShoppingListPage />
          </PrivateRoutes>
        }
      />
      <Route path="/" element={<Navigate to="/shopping-list" />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
