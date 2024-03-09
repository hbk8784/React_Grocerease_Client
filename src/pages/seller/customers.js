import Wrapper from "../../assets/wrapper/seller_wrapper/customer";
import { FcFeedback } from "react-icons/fc";

const Customers = () => {
  return (
    <Wrapper className="container">
      <div className="row">
        <div className="col-12 mb-3 mb-lg-5">
          <div className="overflow-hidden card table-nowrap table-card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Customers</h5>
              <a href="#!" className="btn btn-light btn-sm">
                View All
              </a>
            </div>
            <div className="table-responsive">
              <table className="table mb-0">
                <thead className="small text-uppercase bg-body text-muted">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>phone</th>
                    <th>Product Ordered</th>
                    <th>Order Date</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-middle">
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="avatar sm rounded-pill me-3 flex-shrink-0"
                          alt="Customer"
                        />
                        <div>
                          <div className="h6 mb-0 lh-1">Mark Voldov</div>
                        </div>
                      </div>
                    </td>
                    <td>mvoges@email.com</td>
                    <td>
                      {" "}
                      <span className="d-inline-block align-middle">
                        Russia
                      </span>
                    </td>
                    <td>
                      <span>****6231</span>
                    </td>
                    <td>21 Sep, 2021</td>
                    <td className="text-end">
                      <div className="d-inline-block align-middle">
                        <button
                          href="#!"
                          type="button"
                          className="btn btn-info"
                        >
                          Send Msg
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Customers;
