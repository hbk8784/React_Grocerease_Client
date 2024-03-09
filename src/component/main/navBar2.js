import productCategory from "../../utils/productCategory";
import Wrapper from "../../assets/wrapper/navBar2";
import { BsList } from "react-icons/bs";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { BsFillTagFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar2() {
  const [isHover, setHover] = useState(false);

  function onHover() {
    setHover(true);
  }

  function offHover() {
    setHover(false);
  }

  useEffect(() => {
    return () => {
      window.removeEventListener("mouseover", onHover);
      window.removeEventListener("mouseleave", offHover);
    };
  }, []);
  return (
    <Wrapper>
      <div className="navbar2-container">
        <div
          className="navbar2-option-button"
          onMouseOver={onHover}
          onMouseLeave={offHover}
        >
          <BsList style={{ fontSize: "1.5rem" }} />
          <pre
            className="shopBy-tag"
            style={{ wordSpacing: "-5px", marginTop: "1rem" }}
          >
            {" "}
            SHOP BY CATEGORY
          </pre>
          {isHover && (
            <ul className="navbar2-hover-options">
              {productCategory.map((item) => {
                const { id, text, value, url } = item;
                return (
                  <li key={id} value={value}>
                    <NavLink to={url}>{text}</NavLink>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="deal-container">
          <div>
            <BsFillLightningChargeFill /> Deals Today
          </div>
          <div>
            <BsFillTagFill /> Special Price
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default NavBar2;
