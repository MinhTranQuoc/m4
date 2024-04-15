import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/product/ProductList";
import ProductAdding from "./components/product/ProductAdding";
import ProductEditing from "./components/product/ProductEditing";
import ProductDetail from "./components/product/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path={`/product/:productId`} element={<ProductDetail />} />
        <Route path={"/product/add"} element={<ProductAdding />} />
        <Route
          path={`/product/edit/:productId`}
          element={<ProductEditing />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
