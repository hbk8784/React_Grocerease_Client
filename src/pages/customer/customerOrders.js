import Wrapper from "../../assets/wrapper/customerOrders";
import { Footer1, Footer2, NavBar } from "../../component/main";
import { Link } from "react-router-dom";
import { FcDocument } from "react-icons/fc";
import { BsFillGeoAltFill } from "react-icons/bs";

const CustomerOrders = () => {
  return (
    <div>
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <Wrapper className="container bootstrap snippets bootdey">
        <div className="card-header p-2">
          <h3>Orders History</h3>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box no-header clearfix mt-3">
              <div className="main-box-body clearfix">
                <div className="table-responsive">
                  <table className="table user-list">
                    <thead>
                      <tr>
                        <th>
                          <span>Description</span>
                        </th>
                        <th>
                          <span>Date</span>
                        </th>
                        <th className="text-center">
                          <span>Status</span>
                        </th>
                        <th>
                          <span>Track</span>
                        </th>
                        <th>
                          <span>Invoice</span>
                        </th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="https://bootdey.com/img/Content/user_1.jpg"
                            alt=""
                          />
                          <a href="#" className="user-link">
                            Full name 1
                          </a>
                          <span className="user-subhead">Member</span>
                        </td>
                        <td>2013/08/12</td>
                        <td className="text-center">
                          <span className="label label-default">pending</span>
                        </td>
                        <td>
                          <Link style={{ color: "red", fontSize: "25px" }}>
                            <BsFillGeoAltFill />
                          </Link>
                        </td>
                        <td>
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              fontSize: "25px",
                            }}
                          >
                            <FcDocument />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://bootdey.com/img/Content/user_3.jpg"
                            alt=""
                          />
                          <a href="#" className="user-link">
                            Full name 2
                          </a>
                          <span className="user-subhead">Admin</span>
                        </td>
                        <td>2013/08/12</td>
                        <td className="text-center">
                          <span className="label label-success">Active</span>
                        </td>
                        <td>
                          <Link style={{ color: "red", fontSize: "25px" }}>
                            <BsFillGeoAltFill />
                          </Link>
                        </td>
                        <td>
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              fontSize: "25px",
                            }}
                          >
                            <FcDocument />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://bootdey.com/img/Content/user_2.jpg"
                            alt=""
                          />
                          <a href="#" className="user-link">
                            Full name 3
                          </a>
                          <span className="user-subhead">Member</span>
                        </td>
                        <td>2013/08/12</td>
                        <td className="text-center">
                          <span className="label label-danger">inactive</span>
                        </td>
                        <td>
                          <Link style={{ color: "red", fontSize: "25px" }}>
                            <BsFillGeoAltFill />
                          </Link>
                        </td>
                        <td>
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              fontSize: "25px",
                            }}
                          >
                            <FcDocument />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-control custom-checkbox mr-3 py-3">
          <button type="button" className="btn btn-sm btn-danger  mt-4 px-2">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Back to shopping
            </Link>
          </button>
        </div>
      </Wrapper>

      <br></br>

      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default CustomerOrders;
