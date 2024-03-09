import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/GrocerEase1.png";

function Logo() {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="GrocerEase Logo"
        className="logo"
        style={{ width: "11vw", height: "6vh" }}
      />
    </Link>
  );
}

export default Logo;
