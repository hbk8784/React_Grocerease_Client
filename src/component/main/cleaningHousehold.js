import CombinedSmall from "./combinedSmall";
import Wrapper from "../../assets/wrapper/cleaningHousehold";
import Pic1 from "../../assets/images/category/detergent.jpg";
import Pic2 from "../../assets/images/category/cleaner.jpg";
import Pic3 from "../../assets/images/category/freshner.jpg";
import Pic4 from "../../assets/images/category/wipes.jpg";

const data = [
  {
    Pic: Pic1,
    text: "Detergent",
    url: "/products/cleaning household/detergent",
  },
  { Pic: Pic2, text: "Cleaners", url: "/products/cleaning household/cleaners" },
  {
    Pic: Pic3,
    text: "Fresheners",
    url: "/products/cleaning household/fresheners",
  },
  {
    Pic: Pic4,
    text: "Kitchen Wipes",
    url: "/products/cleaning household/kitchen wipes",
  },
];

function CleaningHousehold() {
  return (
    <Wrapper>
      <h5>
        <b>Cleaning & Household</b>
      </h5>
      <div>
        <CombinedSmall data={data} />
      </div>
    </Wrapper>
  );
}

export default CleaningHousehold;
