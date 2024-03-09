import { Logo, SearchBar, CustomreSupport, NavButtons } from "../main";
import Wrapper from "../../assets/wrapper/navbar";

function NavBar() {
  return (
    <div>
      <Wrapper>
        <Logo />
        <SearchBar />
        <CustomreSupport />
        <NavButtons />
      </Wrapper>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgb(0,0,0,0.2)",
          marginTop: "1.5rem",
        }}
      ></div>
    </div>
  );
}

export default NavBar;
