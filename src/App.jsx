import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import SettingLayout from "./Featured/settings/SettingLayout";
import ProfileSettings from "./Featured/settings/Profile";
import Product from "./Featured/Vendor/Product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
 const queryClient = new QueryClient()
function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          {/* ✅ Layout Routes */}
          <Route index element={<Homepage />} />
          <Route path="homepage" element={<Homepage />} />
          <Route element={<AppLayout />}>
            {/* Home */}
            {/* Buyer Routes */}
            <Route path="cart" element={<Cart />} />
            <Route path="products" element={<Shop />} />
            <Route path="products/:productId" element={<ProductDetails />} />
            {/* Vendor Routes */}
            <Route path="vendor" element={<Vendors />} />
            <Route path="vendor/dashboard" element={<VendorDashboard />} />
            <Route path="vendor/products" element={<Product />} />
            <Route path="vendor/settings" element={<SettingLayout />}>
              <Route index element={<ProfileSettings />} />
              <Route path="profile" element={<ProfileSettings />} />
            </Route>
            ;
          </Route>

          {/* Auth Pages (outside layout) */}
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />

          {/* Catch-All */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ReactQueryDevtools initialsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
