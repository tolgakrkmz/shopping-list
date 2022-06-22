import ShoppingListPage from "./components/ShoppingListPage";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/shopping-list" />} />
      <Route path="/shopping-list" element={<ShoppingListPage />} />
    </Routes>
  );
}

export default App;
