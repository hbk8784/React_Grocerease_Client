import { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import StyledNavLink from "../../assets/wrapper/styledNavLink";
import Wrapper from "../../assets/wrapper/navButtonWrapper";
import userProfileOptions from "../../utils/userProfileOptions";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userProfileOption2 from "../../utils/userProfileOption-2";
import { FcCancel } from "react-icons/fc";
import { logout } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

function NavButtons() {
  const { cartCount, wishCount, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [logedout, setLogedout] = useState(false);

  function onHoverOverProfile() {
    setIsHover(true);
  }

  function hoverOut() {
    setIsHover(false);
  }
  function handleLogout() {
    dispatch(logout());
    setLogedout(true);
  }

  useEffect(() => {
    if (logedout) {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  }, [logedout]);

  useEffect(() => {
    return () => {
      window.removeEventListener("mouseover", onHoverOverProfile);
      window.removeEventListener("mouseleave", hoverOut);
      window.removeEventListener("click", handleLogout);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <div onMouseOver={onHoverOverProfile} onMouseLeave={hoverOut}>
          <NavLink>
            <BsPersonCircle
              style={{ fontSize: "25px", color: "rgb(25, 25, 112)" }}
            />
          </NavLink>
          {user != null && isHover && (
            <div className="profile-hover-options">
              {userProfileOptions.map((item) => {
                const { id, text, path, icon } = item;
                return (
                  <StyledNavLink to={path} key={id}>
                    <p>
                      {icon} <span>{text}</span>
                    </p>
                  </StyledNavLink>
                );
              })}
              <StyledNavLink onClick={() => handleLogout()}>
                <p>
                  <FcCancel /> <span>Logout</span>
                </p>
              </StyledNavLink>
            </div>
          )}

          {user == null && isHover && (
            <div className="profile-hover-options">
              {userProfileOption2.map((item) => {
                const { id, text, path, icon } = item;
                return (
                  <StyledNavLink to={path} key={id}>
                    <p>
                      {icon} <span>{text}</span>
                    </p>
                  </StyledNavLink>
                );
              })}
            </div>
          )}
        </div>

        <div>
          <NavLink to="/customer/wishlist">
            <BsHeart style={{ fontSize: "25px", color: "red" }} />
          </NavLink>
          {cartCount == 0
            ? false
            : true && (
                <div className="wishList-ribbon">
                  <p>{cartCount}</p>
                </div>
              )}
        </div>

        <div>
          <NavLink to="/customer/cart">
            <BsCart3 style={{ fontSize: "25px", color: "rgb(48, 25, 52)" }} />
          </NavLink>
          {wishCount == 0
            ? false
            : true && (
                <div className="cart-ribbon">
                  <p>{wishCount}</p>
                </div>
              )}
        </div>
      </Wrapper>
      {user && (
        <span>
          Welcome, <br></br> <b>{`${user.firstName} ${user.lastName}`}</b>
        </span>
      )}
    </>
  );
}

export default NavButtons;
