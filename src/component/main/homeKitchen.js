import CombinedSmall from "./combinedSmall";
import Wrapper from "../../assets/wrapper/homeKitchen";
import Pic1 from "../../assets/images/category/kitchen-tools.jpg";
import Pic2 from "../../assets/images/category/stationary.png";
import Pic3 from "../../assets/images/category/storage.jpg";
import Pic4 from "../../assets/images/category/battery.webp";

const data = [
  {
    Pic: Pic1,
    text: "Kitchen Tools",
    url: "/products/home kitchen/kitchen tools",
  },
  { Pic: Pic2, text: "Stationary", url: "/products/home kitchen/stationary" },
  {
    Pic: Pic3,
    text: "Storage Sollutions",
    url: "/products/home kitchen/storage solutions",
  },
  {
    Pic: Pic4,
    text: "Batteries & Electricals",
    url: "/products/home kitchen/battery electricals",
  },
];

function HomeKitchen() {
  return (
    <Wrapper>
      <h5>
        <b>Home & Kitchen</b>
      </h5>
      <div>
        <CombinedSmall data={data} />
      </div>
    </Wrapper>
  );
}

export default HomeKitchen;
