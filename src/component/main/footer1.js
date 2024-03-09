import Wrapper from "../../assets/wrapper/footer1";
import Footer1Options from "../../utils/footer1Options";

function Footer1() {
  return (
    <Wrapper>
      <div className="main-footer1-container">
        <div className="footer1-container">
          {Footer1Options.map((item) => {
            const { id, icon, h, p } = item;
            return (
              <div key={id} className="single-footer1">
                {icon}
                <div>
                  <p style={{ color: "#94bc34" }}>{h}</p>
                  <p>{p}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <hr
        style={{ backgroundColor: "white", height: "2px", marginTop: "2rem" }}
      ></hr>
    </Wrapper>
  );
}

export default Footer1;
