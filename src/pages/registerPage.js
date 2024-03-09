import { NavBar, NavBar2, Footer1, Footer2 } from "../component/main";
import Registration from "../component/registration";

const RegistrationPage = () => {
  return (
    <div>
      <div style={{ marginTop: "3rem" }}></div>
      <NavBar />
      <NavBar2 />
      <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <Registration />
      </div>

      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default RegistrationPage;
