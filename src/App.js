import ShoppingListPage from "./components/ShoppingListPage";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import PrivateRoute from "./utils/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "./firebase/firebase";
import { setLoggedUser } from "./redux/userSlice";
import { useNavigate } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import ProductsPage from "./components/ProductsPage";
import AddProductPage from "./components/AddProductPage";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  }, []);

  return (
    <>
      <MainNavbar />
      <Routes>
        <Route
          path="/shopping-list"
          element={
            <PrivateRoute>
              <ShoppingListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductsPage />
            </PrivateRoute>
          }
        />

        <Route path="/" element={<Navigate to="/shopping-list" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addproduct" element={<AddProductPage />} />
      </Routes>
    </>
  );
}

export default App;
