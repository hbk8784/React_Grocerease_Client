import { useEffect, useState, useRef } from "react";
import "../../assets/seller_dashboard/css/style.css";
import { FcSms } from "react-icons/fc";
import { FcAdvertising } from "react-icons/fc";

const TopNavBar = ({ firstName, lastName }) => {
  const [showThis, setShowThis] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  let messageRef = useRef(null);
  let notificatioRef = useRef(null);
  let sellerRef = useRef(null);

  const handleClick = (e) => {
    setShowThis(e.target.value);
    setIsOpen(!isOpen);
    console.log("handleClick");
  };

  useEffect(() => {
    console.log("userEffect");
    let handle = (e) => {
      if (showThis === "message" && !messageRef.current.contains(e.target)) {
        setShowThis("");
        setIsOpen(!isOpen);
      } else if (
        showThis === "notification" &&
        !notificatioRef.current.contains(e.target)
      ) {
        setShowThis("");
        setIsOpen(!isOpen);
      } else if (
        showThis === "seller" &&
        !sellerRef.current.contains(e.target)
      ) {
        setShowThis("");
        setIsOpen(!isOpen);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => {
      window.removeEventListener("click", handleClick);
      document.removeEventListener("mousedown", handle);
    };
  });

  return (
    <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0 mb-4 mt-0">
      <div className="navbar-nav align-items-center ms-auto">
        <div className="nav-item dropdown">
          <button
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            value="message"
            onClick={handleClick}
          >
            <i className="fa me-lg-2">
              <FcSms />
            </i>
            <span className="d-none d-lg-inline-flex">Message</span>
          </button>
          <div
            className={`${
              showThis === "message" && isOpen ? "show" : ""
            } dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0`}
            ref={messageRef}
          >
            <a href="#" className="dropdown-item">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle"
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <div className="ms-2">
                  <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                  <small>15 minutes ago</small>
                </div>
              </div>
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle"
                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <div className="ms-2">
                  <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                  <small>15 minutes ago</small>
                </div>
              </div>
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle"
                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <div className="ms-2">
                  <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                  <small>15 minutes ago</small>
                </div>
              </div>
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item text-center">
              See all message
            </a>
          </div>
        </div>
        <div className="nav-item dropdown">
          <button
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            value="notification"
            onClick={handleClick}
          >
            <i className="fa me-lg-2">
              <FcAdvertising />
            </i>
            <span className="d-none d-lg-inline-flex">Notificatin</span>
          </button>
          <div
            className={`${
              showThis === "notification" && isOpen ? "show" : ""
            } dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0`}
            ref={notificatioRef}
          >
            <a href="#" className="dropdown-item">
              <h6 className="fw-normal mb-0">Profile updated</h6>
              <small>15 minutes ago</small>
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <h6 className="fw-normal mb-0">New user added</h6>
              <small>15 minutes ago</small>
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <h6 className="fw-normal mb-0">Password changed</h6>
              <small>15 minutes ago</small>
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item text-center">
              See all notifications
            </a>
          </div>
        </div>
        <div className="nav-item dropdown">
          <button
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            value="seller"
            onClick={handleClick}
          >
            <img
              className="rounded-circle me-lg-2"
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
            <span className="d-none d-lg-inline-flex">
              {firstName} {lastName}
            </span>
          </button>
          <div
            className={`${
              showThis === "seller" && isOpen ? "show" : ""
            } dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0`}
            ref={sellerRef}
          >
            <a href="#" className="dropdown-item">
              My Profile
            </a>
            <a href="#" className="dropdown-item">
              Settings
            </a>
            <a href="#" className="dropdown-item">
              Log Out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
