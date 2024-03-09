import { NavLink } from "react-router-dom";
import Wrapper from "../../assets/wrapper/bigCard";

function BigCard({ Pic, name, url }) {
  return (
    <Wrapper>
      <div className="bigCard-container">
        <NavLink to={url}>
          <img src={Pic} style={{ width: "700px", height: "490px" }}></img>
          <br></br>
          <br></br>
          <p>{name}</p>
        </NavLink>
      </div>
    </Wrapper>
  );
}

export default BigCard;
