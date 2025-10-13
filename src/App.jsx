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
// import StoreSettings from "./Featured/settings/StoreSettings";
// import PaymentSettings from "./Featured/settings/PaymentSettings";
// import NotificationSettings from "./Featured/settings/NotificationSettings";
// import SecuritySettings from "./Featured/settings/SecuritySettings";
// import AccountSettings from "./Featured/settings/AccountSettings";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Layout Routes */}
        <Route element={<AppLayout />}>
          {/* Home */}
          <Route index element={<Homepage />} />
          <Route path="homepage" element={<Homepage />} />
          {/* Buyer Routes */}
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Shop />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          {/* Vendor Routes */}
          <Route path="vendor" element={<Vendors />} />
          <Route path="vendor/dashboard" element={<VendorDashboard />} />
          <Route path="vendor/settings" element={<SettingLayout />}>
            <Route index element={<ProfileSettings />} />
            <Route path="profile" element={<ProfileSettings />} />
            {/* <Route path="store" element={<StoreSettings />} />
            <Route path="payment" element={<PaymentSettings />} />
            <Route path="notifications" element={<NotificationSettings />} />
            <Route path="security" element={<SecuritySettings />} />
            <Route path="account" element={<AccountSettings />} /> */}
          </Route>
          ;
        </Route>

        {/* Auth Pages (outside layout) */}
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />

        {/* Catch-All */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
