import CombinedSmall from "./combinedSmall";
import Wrapper from "../../assets/wrapper/snack";
import Pic1 from "../../assets/images/category/nachose.webp";
import Pic2 from "../../assets/images/category/biscuits.jpg";
import Pic3 from "../../assets/images/category/pasta.jpg";
import Pic4 from "../../assets/images/category/chocolate.webp";
import { withTheme } from "styled-components";

const data = [
  { Pic: Pic1, text: "chips & nachos", url: "/products/snack/chips nachos" },
  {
    Pic: Pic2,
    text: "biscuits & cookies",
    url: "/products/snack/biscutes cookies",
  },
  { Pic: Pic3, text: "pasta & sauce", url: "/products/snack/pasta sauce" },
  { Pic: Pic4, text: "chocolate", url: "/products/snack/chocolate" },
];

function Snack() {
  return (
    <Wrapper>
      <h5 style={{ color: "white" }}>
        <b>Snack Store</b>
      </h5>
      <div className="snack-container">
        <CombinedSmall data={data} />
      </div>
    </Wrapper>
  );
}

export default Snack;
