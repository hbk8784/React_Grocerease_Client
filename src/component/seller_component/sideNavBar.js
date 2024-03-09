import { BsHash } from "react-icons/bs";
import "../../assets/seller_dashboard/css/style.css";
import { FcTabletAndroid } from "react-icons/fc";
import { FcSupport } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FcPlus } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";

import { useEffect } from "react";
import { logout } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

const SideNavBar = ({ firstName, lastName }) => {
  const activeLink = useParams().active_link || "dashboard";
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    return () => {
      window.removeEventListener("click", handleLogout);
    };
  };

  useEffect(() => {}, [activeLink]);

  return (
    <div className="sidebar pe-4 pb-3 bg-light">
      <nav className="navbar bg-light navbar-light">
        <Link to="/seller" className="navbar-brand mx-4 mb-3">
          <h3 className="text-primary">
            <BsHash style={{ color: "#009CFF" }} />
            Dashboard
          </h3>
        </Link>
        <div className="d-flex align-items-center ms-4 mb-4">
          <div className="position-relative">
            <img
              className="rounded-circle"
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
          </div>
          <div className="ms-3">
            <h6 className="mb-0">
              {firstName} {lastName}
            </h6>
            <span>Seller</span>
          </div>
        </div>
        <div className="navbar-nav w-100">
          <Link
            to="/seller"
            className={`nav-item nav-link ${
              activeLink === "dashboard" ? "active" : ""
            }`}
            // onClick={() => handleClick("dashboard")}
          >
            <i className="fa me-2 text-secondary">
              <FcTabletAndroid />
            </i>
            Dashboard
          </Link>

          <a
            href="/seller/manage_orders/manage-orders"
            className={`nav-item nav-link ${
              activeLink === "manage-orders" ? "active" : ""
            }`}
            // onClick={() => handleClick("manage-orders")}
          >
            <i className="fa me-2">
              <FcSupport />
            </i>
            Manage Orders
          </a>

          <a
            href="/seller/inventory/inventory"
            className={`nav-item nav-link ${
              activeLink === "inventory" ? "active" : ""
            }`}
            // onClick={() => handleClick("inventory")}
          >
            <i className="fa me-2">
              <FcTodoList />
            </i>
            Inventory
          </a>

          <a
            href="/seller/add-product/add-product"
            className={`nav-item nav-link ${
              activeLink === "add-product" ? "active" : ""
            }`}
            // onClick={() => handleClick("add-product")}
          >
            <i className="fa me-2">
              <FcPlus />
            </i>
            Add Products
          </a>

          <a
            href="/seller/payment/payment"
            className={`nav-item nav-link ${
              activeLink === "payment" ? "active" : ""
            }`}
            // onClick={() => handleClick("payment")}
          >
            <i className="fa me-2">
              <FcLike />
            </i>
            Payments
          </a>

          <a
            href="/seller/customer/customer"
            className={`nav-item nav-link ${
              activeLink === "customer" ? "active" : ""
            }`}
            // onClick={() => handleClick("customer")}
          >
            <i className="fa me-2">
              <FcPortraitMode />
            </i>
            Customers
          </a>

          <a
            href="#"
            className={`nav-item nav-link ${
              activeLink === "logout" ? "active" : ""
            }`}
            onClick={handleLogout}
          >
            <i className="far me-2">
              <FcHighPriority />
            </i>
            Logout
          </a>
        </div>
      </nav>
    </div>
  );
};

export default SideNavBar;
