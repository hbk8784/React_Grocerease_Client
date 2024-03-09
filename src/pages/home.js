import { useEffect } from "react";
import {
  NavBar,
  NavBar2,
  HeroImage,
  BrowseByCatogery,
  BestSellers,
  FruitsVegetable,
  Snack,
  Beverages,
  BeautyHygiene,
  HomeKitchen,
  CleaningHousehold,
  Footer1,
  Footer2,
} from "../component/main";
import { useDispatch, useSelector } from "react-redux";
import { homePageImage } from "../features/homeSlice";

function Home() {
  const dispatch = useDispatch();
  const { heroImage, bestItems } = useSelector((store) => store.homePage);

  useEffect(() => {
    dispatch(homePageImage());
  }, []);
  return (
    <>
      <div style={{ marginTop: "3rem" }}></div>
      <NavBar />

      <div className="home-container">
        <NavBar2 />
        <HeroImage heroImage={heroImage} /> <br></br>
        <br></br>
        <BrowseByCatogery />
        <br></br>
        <br></br>
        <BestSellers bestItems={bestItems} />
        <br></br>
        <br></br>
        <FruitsVegetable />
        <br></br>
        <br></br>
        <div
          style={{
            backgroundColor: "rgb(0, 0, 0)",
            margin: "3rem 0",
          }}
        >
          <Snack />

          <Beverages />
        </div>{" "}
        <br></br>
        <BeautyHygiene />
        <br></br>
        <br></br>
        <HomeKitchen />
        <CleaningHousehold />
        <Footer1 />
        <Footer2 />
      </div>
    </>
  );
}

export default Home;
