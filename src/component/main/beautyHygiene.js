import CombineBigAndSmall from "./combineBigAndSmall";
import Wrapper from "../../assets/wrapper/beautyHygiene";
import Pic from "../../assets/images/category/makeup.jpg";
import Pic1 from "../../assets/images/category/anti-ageing.png";
import Pic2 from "../../assets/images/category/perfumes.jpg";
import Pic3 from "../../assets/images/category/bathing.webp";
import Pic4 from "../../assets/images/category/Moisturisers.webp";

function BeautyHygiene() {
  const data = [
    { Pic: Pic, text: "Makeup", url: "/products/beauty hygiene/makeup" },
    {
      Pic: Pic1,
      text: "Anti-ageing",
      url: "/products/beauty hygiene/anti ageing",
    },
    {
      Pic: Pic2,
      text: "Sentful Perfumes",
      url: "/products/beauty hygiene/sentful perfumes",
    },
    {
      Pic: Pic3,
      text: "Bathing Essentials",
      url: "/products/beauty hygiene/bathing essentials",
    },
    {
      Pic: Pic4,
      text: "Moisturisers & serums",
      url: "/products/beauty hygiene/moisturisers serums",
    },
  ];
  return (
    <Wrapper>
      <h5>
        <b>Beauty & Hygiene</b>
      </h5>
      <div>
        <CombineBigAndSmall data={data} />
      </div>
    </Wrapper>
  );
}

export default BeautyHygiene;
