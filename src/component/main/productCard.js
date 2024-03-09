import Wrapper from "../../assets/wrapper/productCard";
import { BsCartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

// const arr = Array.from({ length: 10 }, (_, index) => index + 1);
function ProductCard({ bestItems }) {
  return (
    <Wrapper>
      {bestItems.map((item, index) => {
        return (
          <div
            className="product-card"
            key={index}
            style={{ borderRadius: "5px" }}
          >
            <img
              src={`http://localhost:8080/images/${item.image}`}
              style={{ width: "235px", height: "200px" }}
            ></img>
            <hr></hr>
            <p>
              <b>{item.brand}</b>
            </p>
            <p>{item.name}</p>
            <p>
              &#x20B9;{" "}
              <span style={{ color: "green" }}>
                <b>{item.price}</b>
              </span>{" "}
              / {item.weight}
            </p>{" "}
            <form
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>Qty: </h4>
              <input
                type="number"
                style={{ width: "50px", height: "30px" }}
              ></input>
              <button
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "50%",
                  border: "none",
                }}
              >
                <BsCartFill />
              </button>
              <button
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgb(255, 150, 0)",
                  color: "white",
                  paddingTop: "5px",
                  borderRadius: "50%",
                  border: "none",
                }}
              >
                <BsHeart />
              </button>
            </form>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default ProductCard;
