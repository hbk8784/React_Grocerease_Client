import { NavBar, NavBar2, Footer1, Footer2 } from "../component/main";
import Login from "../component/login";

const LoginPage = () => {
  return (
    <>
      <div style={{ marginTop: "3rem" }}></div>
      <NavBar />

      <NavBar2 />
      <div style={{ marginTop: "8rem", marginBottom: "10rem" }}>
        <Login />
      </div>

      <Footer1 />
      <Footer2 />
    </>
  );
};

export default LoginPage;
