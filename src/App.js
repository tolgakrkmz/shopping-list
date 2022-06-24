import ShoppingListPage from "./components/ShoppingListPage";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/shopping-list" />} />
      <Route path="/shopping-list" element={<ShoppingListPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
