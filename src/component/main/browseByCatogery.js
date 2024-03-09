import { NavLink } from "react-router-dom";
import productCategory from "../../utils/productCategory";
import Wrapper from "../../assets/wrapper/browseByCatogery";

function BrowseByCatogery() {
  return (
    <Wrapper>
      <h5 style={{ color: "rgb(25, 25, 112)" }}>
        <b>Browse by Category</b>
      </h5>
      <div className="browse-by-category-container">
        {productCategory.map((item) => {
          if (item.image) {
            const { id, text, value, image } = item;
            return (
              <NavLink
                key={id}
                className="browse-by-category-options"
                to={`/products/${value}/all`}
              >
                {<img src={image}></img>}
                <br></br>
                <p
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  {text}
                </p>
              </NavLink>
            );
          }
        })}
      </div>
    </Wrapper>
  );
}

export default BrowseByCatogery;
