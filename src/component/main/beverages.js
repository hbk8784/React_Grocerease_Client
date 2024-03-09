import CombinedSmall from "./combinedSmall";
import Wrapper from "../../assets/wrapper/beverages";
import Pic1 from "../../assets/images/category/softdrink.jpg";
import Pic2 from "../../assets/images/category/tea.jpg";
import Pic3 from "../../assets/images/category/coffee.webp";
import Pic4 from "../../assets/images/category/juice.jpg";

const data = [
  { Pic: Pic1, text: "Softdrink", url: "/products/beverages/soft drink" },
  { Pic: Pic2, text: "Tea", url: "/products/beverages/tea" },
  { Pic: Pic3, text: "Coffee", url: "/products/beverages/coffee" },
  { Pic: Pic4, text: "Juice", url: "/products/beverages/juice" },
];

function Beverages() {
  return (
    <Wrapper>
      <h5 style={{ color: "white" }}>
        <b>Beverages</b>
      </h5>
      <div className="snack-container">
        <CombinedSmall data={data} />
      </div>
    </Wrapper>
  );
}

export default Beverages;
