import "../../assets/seller_dashboard/css/style.css";
import { FcBullish } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcScatterPlot } from "react-icons/fc";
import { FcNeutralTrading } from "react-icons/fc";

const SalesRevCard = () => {
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="row g-4">
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-3x text-primary">
              <FcBullish />
            </i>
            <div className="ms-3">
              <p className="mb-2">Today Sales</p>
              <h6 className="mb-0">$1234</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-3x text-primary">
              <FcComboChart />
            </i>
            <div className="ms-3">
              <p className="mb-2">Week Sales</p>
              <h6 className="mb-0">$1234</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-3x text-primary">
              <FcScatterPlot />
            </i>
            <div className="ms-3">
              <p className="mb-2">Month Sales</p>
              <h6 className="mb-0">$1234</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-3x text-primary">
              <FcNeutralTrading />
            </i>
            <div className="ms-3">
              <p className="mb-2">Total Sales</p>
              <h6 className="mb-0">$1234</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesRevCard;
