import Wrapper from "../../assets/wrapper/orderTracking";
import { Link } from "react-router-dom";
import { Footer1, Footer2, NavBar } from "../../component/main";
import { BsCardChecklist } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";

const OrderTracking = () => {
  return (
    <div>
      <NavBar />
      <br></br>
      <br></br>
      <Wrapper className="container padding-bottom-3x mb-4 mt-5">
        <div className="card mb-3">
          <div className="p-4 text-center text-white text-lg bg-dark rounded-top">
            <span className="text-uppercase">Tracking Order No - </span>
            <span className="text-medium">34VB5540K83</span>
          </div>
          <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
            <div className="w-100 text-center py-1 px-2">
              <span className="text-medium">Shipped Via:</span> UPS Ground
            </div>
            <div className="w-100 text-center py-1 px-2">
              <span className="text-medium">Status:</span> Checking Quality
            </div>
            <div className="w-100 text-center py-1 px-2">
              <span className="text-medium">Expected Date:</span> SEP 09, 2017
            </div>
          </div>
          <div className="card-body">
            <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between">
              <div className="step completed">
                <div className="step-icon-wrap">
                  <div className="step-icon">
                    <BsCardChecklist />
                  </div>
                </div>
                <h4 className="step-title">Confirmed Order</h4>
              </div>
              <div className="step completed">
                <div className="step-icon-wrap">
                  <div className="step-icon">
                    <BsArrowRepeat />
                  </div>
                </div>
                <h4 className="step-title">Processing Order</h4>
              </div>
              <div className="step completed ">
                <div className="step-icon-wrap">
                  <div className="step-icon">
                    <BsFillStarFill />
                  </div>
                </div>
                <h4 className="step-title">Quality Check</h4>
              </div>
              <div className="step">
                <div className="step-icon-wrap">
                  <div className="step-icon">
                    <BsTruck />
                  </div>
                </div>
                <h4 className="step-title">Product Dispatched</h4>
              </div>
              <div className="step">
                <div className="step-icon-wrap">
                  <div className="step-icon">
                    <BsFillHouseFill />
                  </div>
                </div>
                <h4 className="step-title">Product Delivered</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-sm-between align-items-center">
          <div className="custom-control custom-checkbox mr-3">
            <button type="button" className="btn btn-sm btn-danger  mt-4 px-2">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Back to shopping
              </Link>
            </button>
          </div>
          <div className="text-left text-sm-right">
            <a
              className="btn btn-outline-primary btn-rounded btn-sm"
              href="orderDetails"
              data-toggle="modal"
              data-target="#orderDetails"
            >
              View Order Details
            </a>
          </div>
        </div>
      </Wrapper>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default OrderTracking;
