import { Link } from "react-router-dom";
import Logo from "../assets/images/pageNotFound/page_not_found.svg";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <img src={Logo}></img>
      <br></br>
      <br></br>
      <h3>Ohh! Page Not Found</h3>
      <h4 style={{ color: "rgb(0,0,0,0.5)" }}>
        We can't seem to find the page you're looking for
      </h4>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default ErrorPage;
