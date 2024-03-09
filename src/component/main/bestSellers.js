import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import Wrapper from "../../assets/wrapper/bestSellers";
import ProductCard from "./productCard";
import { useEffect, useRef, useState } from "react";

function BestSellers({ bestItems }) {
  const scroll = useRef(null);

  function scrollLeft() {
    console.log("left button was clicked");
    scroll.current.scrollLeft += 600;
  }

  function scrollRight() {
    console.log("left button was clicked");
    scroll.current.scrollLeft -= 600;
  }

  useEffect(() => {
    return () => {
      window.removeEventListener("click", scrollLeft);
      window.removeEventListener("click", scrollRight);
    };
  });

  return (
    <Wrapper>
      <h5 style={{ color: "rgb(25, 25, 112)" }}>
        <b>Best Sellers</b>
      </h5>
      <div className="bestSeller-container">
        <BsChevronLeft
          style={{ fontSize: "40px", backgroundColor: "black", color: "white" }}
          onClick={scrollLeft}
        />
        <div className="bestSeller-products" ref={scroll}>
          <ProductCard bestItems={bestItems} />
        </div>
        <BsChevronRight
          style={{ fontSize: "40px", backgroundColor: "black", color: "white" }}
          onClick={scrollRight}
        />
      </div>
    </Wrapper>
  );
}

export default BestSellers;
