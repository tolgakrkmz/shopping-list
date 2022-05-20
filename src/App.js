import AddProductToList from "./components/AddProductToList";
import ProductList from "./components/ProductList";

// import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      {/* //{" "}
      <Routes>
        // <Route path="/" element={<Navigate to="home" />} />
        // <Route path="home" element={<AddProductToList />} />
        // <Route path="products" element={<ProductList />} />
        //{" "} */}
      {/* </Routes> */}
      <AddProductToList />
      <ProductList />
    </>
  );
}

export default App;
