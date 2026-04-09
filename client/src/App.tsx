import { Routes, Route, useLocation } from "react-router-dom";
import Products from "@pages/Products";
import ProductDetail from "@pages/ProductDetail";
import Cart from "@pages/Cart";
import MainLayout from "@components/layout";
import Home from "@pages/Home";
import Orders from "./pages/Orders";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="products" element={<Products />} />

        <Route path="product/:id" element={<ProductDetail />} />

        <Route path="cart" element={<Cart />} />

        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
}

export default App;
