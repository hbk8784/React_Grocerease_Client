import { NavLink } from "react-router-dom";
import Wrapper from "../../assets/wrapper/smallCard";

function SmallCard({ Pic, name, url }) {
  return (
    <Wrapper>
      <div className="smallCard">
        <NavLink to={url}>
          <img src={Pic} style={{ width: "200px", height: "200px" }}></img>
          <br></br>
          <br></br>
          <p>{name}</p>
        </NavLink>
      </div>
    </Wrapper>
  );
}

export default SmallCard;
