import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// General components no Login checked
import { Home, LoginPage, RegistrationPage, ErrorPage } from "./pages";
import { Products } from "./pages";

// These are customer components
import { CustomerCart, WishList, EditProfile } from "./pages/customer";
import { OrderTracking, CustomerProfile } from "./pages/customer";
import { CustomerOrders, CustomerProtectedRoute } from "./pages/customer";

// Seller Components
import { SellerProtectedRoute, Dashboard, ManageOrders } from "./pages/seller";
import { Inventory, AddProduct, Payment, Customer } from "./pages/seller";

// Admin components
import { AdminProtectedRoute, ADashboard } from "./pages/admin";

function App() {
  const toastOptions = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    rtl: false,
    theme: "dark",
  };
  return (
    <BrowserRouter>
      <Routes>
        {/* {public route} */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/products/:mainCat/:subCat" element={<Products />} />

        {/* {customer protected route} */}
        <Route path="/customer" element={<CustomerProtectedRoute />}>
          <Route index element={<ErrorPage />} />
          <Route path="profile" element={<CustomerProfile />} />
          <Route path="edit/profile" element={<EditProfile />} />
          <Route path="orders" element={<CustomerOrders />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="cart" element={<CustomerCart />} />
          <Route path="track/:id" element={<OrderTracking />} />
        </Route>

        {/* Seller Protected Route */}
        <Route path="/seller" element={<SellerProtectedRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="manage_orders/:active_link" element={<ManageOrders />} />
          <Route path="inventory/:active_link" element={<Inventory />} />
          <Route path="add-product/:active_link" element={<AddProduct />} />
          <Route path="payment/:active_link" element={<Payment />} />
          <Route path="customer/:active_link" element={<Customer />} />
        </Route>

        {/* Admin Protected Route */}
        <Route path="/admin" element={<AdminProtectedRoute />}>
          <Route index element={<ADashboard />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <ToastContainer {...toastOptions} />
    </BrowserRouter>
  );
}

export default App;
