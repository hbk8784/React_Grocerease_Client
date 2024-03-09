import Wrapper from "../../assets/wrapper/footer2";

function Footer2() {
  return (
    <Wrapper>
      <section className="footer-2-container">
        <div className="footer-2-desc-1">
          <p className="footer-heading">GrocerEase - Your Online Grocery</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            officia omnis ullam aperiam laborum officiis odit corporis
            cupiditate?
          </p>
          <br></br>
          <div className="footer-2-phn">
            <h4 className="bi-telephone"></h4>
            <div>
              <p>Hotline 24/7</p>
              <p style={{ fontSize: "1.2rem", color: "#94bc34" }}>
                +91 62904 65395
              </p>
            </div>
          </div>

          <div className="footer-2-add">
            <h4 className="bi-house"></h4>
            <p>222/2 BelurMath Howrah, West Bengal</p>
          </div>

          <div className="footer-2-email">
            <h4 className="bi-envelope"></h4>
            <p>support@GrocerEase.com</p>
          </div>
        </div>

        <div className="footer-2-desc-2">
          <p className="footer-heading">Useful Links</p>
          <p>About Us</p>
          <p>Contact</p>
          <p>Help Center</p>
          <p>Career</p>
          <p>Policy</p>
          <p>Flash Sale</p>
          <p>Official</p>
          <p>Sitemap</p>
        </div>

        <div className="footer-2-desc-3">
          <p className="footer-heading">Help Center</p>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Products Return</p>
          <p>FAQ</p>
          <p>Checkout</p>
          <p>Other Issues</p>
        </div>

        <div className="footer-2-desc-4">
          <p className="footer-heading">GrocerEase Business</p>
          <p>Sell On GrocerEase</p>
          <p>Affiliate Program</p>
          <p>Our Suppliers</p>
          <p>Accessibility</p>
          <p>Advertise With Us</p>
        </div>

        <div className="footer-2-desc-5">
          <p className="footer-heading">GrocerEase Newsletter</p>
          <p>
            Register now to get updates on promotions and coupns. Don’t worry!
            We Wont spam
          </p>
        </div>
      </section>
    </Wrapper>
  );
}

export default Footer2;
