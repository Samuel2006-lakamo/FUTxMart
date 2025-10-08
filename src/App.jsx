import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Vendors from "./pages/Vendors";
import VendorDashboard from "./pages/VendorDashboard";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./pages/PageNotFound";

import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Routes */}
        <Route element={<AppLayout />}>
          {/* Redirect from "/" to homepage */}
          <Route index element={<Homepage />} />

          <Route path="homepage" element={<Homepage />} />

          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Shop />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="vendor" element={<Vendors />} />
          <Route path="dashboard" element={<VendorDashboard />} />
        </Route>

        {/* Auth Outside Layout */}
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />

        {/* Catch-all */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
