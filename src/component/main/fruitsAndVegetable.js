import CombineBigAndSmall from "./combineBigAndSmall";
import Wrapper from "../../assets/wrapper/fruiteVegetable";
import Pic from "../../assets/images/category/seasonal.jpg";
import Pic1 from "../../assets/images/category/carrot.jpg";
import Pic2 from "../../assets/images/category/Apple-Babanas.jpg";
import Pic3 from "../../assets/images/category/DHANIA-SEEDS.jpg";
import Pic4 from "../../assets/images/category/exotic-fruits.jpg";

const data = [
  {
    Pic: Pic,
    text: "Seasonal Fruits & Vegetable",
    url: "/products/fruits vegetables/seasonal fruits vegetable",
  },
  {
    Pic: Pic1,
    text: "Vegetable",
    url: "/products/fruits vegetables/fresh vegetable",
  },
  {
    Pic: Pic2,
    text: "Fruits",
    url: "/products/fruits vegetables/fresh fruits",
  },
  {
    Pic: Pic3,
    text: "Herbs & Seasoning",
    url: "/products/fruits vegetables/herbs seasonings",
  },
  {
    Pic: Pic4,
    text: "Exotic Fruits and Vegetable",
    url: "/products/fruits vegetables/exotic fruits vegetables",
  },
];

function FruitsVegetable() {
  return (
    <Wrapper>
      <h5 style={{ color: "rgb(25, 25, 112)" }}>
        <b>Fruits & Vegetable</b>
      </h5>
      <CombineBigAndSmall data={data} />
    </Wrapper>
  );
}

export default FruitsVegetable;
