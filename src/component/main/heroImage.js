import Wrapper from "../../assets/wrapper/hero-image";

function HeroImage({ heroImage }) {
  if (heroImage.length) {
    return (
      <Wrapper>
        <div className="hero-container">
          <div className="hero-image-1">
            <img
              src={`http://localhost:8080/images/${heroImage[0]?.image}`}
              style={{ width: "750px", height: "500px" }}
              alt="add1"
            ></img>
            <br></br>
          </div>
          <div className="hero-image-2">
            <img
              src={`http://localhost:8080/images/${heroImage[1]?.image}`}
              style={{ width: "750px", height: "500px" }}
              alt="add2"
            ></img>{" "}
            <br></br>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default HeroImage;
