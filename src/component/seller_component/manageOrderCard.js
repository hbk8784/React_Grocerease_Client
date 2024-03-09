import "../../assets/seller_dashboard/css/style.css";
import { FcApproval } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";
import { FcHome } from "react-icons/fc";

const ManageOrdersCard = () => {
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="row g-4">
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-3x text-primary">
              <FcApproval />
            </i>
            <div className="ms-3">
              <p className="mb-2">Confirmed</p>
              <h6 className="mb-0">$1234</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-3x text-primary">
              <FcServices />
            </i>
            <div className="ms-3">
              <p className="mb-2">Processing</p>
              <h6 className="mb-0">$1234</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-3x text-primary">
              <FcShipped />
            </i>
            <div className="ms-3">
              <p className="mb-2">Dispatched</p>
              <h6 className="mb-0">$1234</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-3x text-primary">
              <FcHome />
            </i>
            <div className="ms-3">
              <p className="mb-2">Delivered</p>
              <h6 className="mb-0">$1234</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrdersCard;
