import "../../assets/admin_dashboard/css/style.css";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { useEffect } from "react";

const SideNavBar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    return () => {
      window.removeEventListener("click", handleLogout);
    };
  }, []);
  return (
    <aside id="sidebar" class="sidebar">
      <ul class="sidebar-nav" id="sidebar-nav">
        <li class="nav-item">
          <a class="nav-link " href="index.html">
            <i class="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>
        {/* <!-- End Dashboard Nav --> */}

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-menu-button-wide"></i>
            <span>Products</span>
          </a>
        </li>
        {/* <!-- End Components Nav --> */}

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-journal-text"></i>
            <span>Customers</span>
          </a>
        </li>
        {/* <!-- End Forms Nav --> */}

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#tables-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-layout-text-window-reverse"></i>
            <span>Customer Details</span>
          </a>
        </li>
        {/* <!-- End Tables Nav --> */}

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#charts-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-bar-chart"></i>
            <span>Seller</span>
          </a>
        </li>
        {/* <!-- End Charts Nav --> */}

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#icons-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-gem"></i>
            <span>Seller Details</span>
          </a>
        </li>
        {/* <!-- End Icons Nav --> */}

        <li class="nav-item">
          <a class="nav-link collapsed" href="users-profile.html">
            <i class="bi bi-person"></i>
            <span>Orders</span>
          </a>
        </li>
        {/* <!-- End Profile Page Nav --> */}

        <li class="nav-item">
          <a class="nav-link collapsed" href="pages-faq.html">
            <i class="bi bi-question-circle"></i>
            <span>Order Detail</span>
          </a>
        </li>
        {/* <!-- End F.A.Q Page Nav --> */}

        <li class="nav-item">
          <a class="nav-link collapsed" href="pages-contact.html">
            <i class="bi bi-envelope"></i>
            <span>Contact</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link collapsed" href="#" onClick={handleLogout}>
            <i class="bi bi-box-arrow-in-right"></i>
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </aside>
  );
  // <!-- End Sidebar-->
};

export default SideNavBar;
