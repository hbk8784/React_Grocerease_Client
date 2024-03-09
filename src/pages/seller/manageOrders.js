import Wrapper from "../../assets/wrapper/seller_wrapper/manageOrders";
import { ManageOrdersCard } from "../../component/seller_component";

const data = [
  {
    id: 1,
    name: "name",
    brand: "brand",
    date: "date",
    status: "delivered",
    quantity: 10,
  },
  {
    id: 2,
    name: "ye hai",
    brand: "ye bhi",
    date: "tarik pe",
    status: "",
    quantity: 12,
  },
];

const ManageOrders = () => {
  // const ostatus = 5;
  // const delivered = ostatus == 5 ? true : false;
  return (
    <Wrapper className="container">
      <ManageOrdersCard />
      <div style={{ marginBottom: "2rem" }}></div>
      <div className="row">
        <div className="col-12">
          <div className="card card-margin">
            <div className="card-body">
              <div className="row search-body">
                <div className="col-lg-12">
                  <div className="search-result">
                    <div className="result-header">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="records">
                            Showing: <b>1-20</b> of <b>200</b> result
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="result-actions">
                            <div className="result-sorting">
                              <span>Sort By:</span>
                              <select
                                className="form-control border-0"
                                id="exampleOption"
                              >
                                <option value="1">Relevance</option>
                                <option value="2">Names (A-Z)</option>
                                <option value="3">Names (Z-A)</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="result-body">
                      <div className="table-responsive">
                        <table className="table widget-26">
                          <thead>
                            <tr>
                              {/* <!-- Set columns width --> */}
                              <th className="text-center ">Order ID</th>
                              <th className="text-center ">
                                Brand / Item / Order Date
                              </th>
                              <th className="text-center ">Quantity</th>
                              <th className="text-center ">Total</th>
                              <th className="text-center ">Status</th>
                              <th className="text-center ">Action</th>
                              <th className="text-center align-middle py-3 px-0"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((item, index) => {
                              const stat = [
                                "confirm",
                                "processing",
                                "quality check",
                                "dispatched",
                                "delivered",
                              ];
                              const ostatus = stat.indexOf(item.status) + 1;
                              const delivered = ostatus == 5 ? true : false;

                              return (
                                <tr
                                  style={{
                                    borderBottom: "1px solid rgb(0,0,0,0.2)",
                                  }}
                                >
                                  <td className="text-center">
                                    <div className="widget-26-job-emp-img ">
                                      <img
                                        src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                        alt="Company"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-title text-center">
                                      <a href="#">
                                        {item.name} / {item.brand} / {item.date}
                                      </a>
                                      <p className="m-0">
                                        <a href="#" className="employer-name">
                                          Axiom Corp.
                                        </a>{" "}
                                        <span className="text-muted time">
                                          1 days ago
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-info text-center">
                                      <p className="type m-0">
                                        {item.quantity}
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-salary text-center">
                                      $ 50
                                    </div>
                                  </td>
                                  <td className="text-center">
                                    <div className="widget-26-job-category bg-soft-base">
                                      <i className="indicator bg-base"></i>
                                      <span>{item.status}</span>
                                    </div>
                                  </td>
                                  <td>
                                    {!delivered && (
                                      <div className="text-center">
                                        <select className="bg-dark text-white text-center">
                                          <option>- Select -</option>
                                          <option
                                            disabled={
                                              ostatus > "0" ? true : false
                                            }
                                          >
                                            Confirmed
                                          </option>
                                          <option
                                            disabled={
                                              ostatus > "1" ? true : false
                                            }
                                          >
                                            Processing
                                          </option>
                                          <option
                                            disabled={
                                              ostatus > "2" ? true : false
                                            }
                                          >
                                            Quality Checking
                                          </option>
                                          <option
                                            disabled={
                                              ostatus > "3" ? true : false
                                            }
                                          >
                                            Dispatched
                                          </option>
                                          <option
                                            disabled={
                                              ostatus > "4" ? true : false
                                            }
                                          >
                                            Delivered
                                          </option>
                                        </select>
                                        <span style={{ marginLeft: "5px" }}>
                                          <button
                                            className="badge"
                                            style={{
                                              backgroundColor: "red",
                                              color: "white",
                                              borderRadius: "5px",
                                            }}
                                          >
                                            Update
                                          </button>
                                        </span>
                                      </div>
                                    )}
                                    {delivered && (
                                      <p
                                        style={{ color: "green" }}
                                        className="text-center"
                                      >
                                        Completed
                                      </p>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="d-flex justify-content-center">
                <ul className="pagination pagination-base pagination-boxed pagination-square mb-0">
                  <li className="page-item">
                    <a className="page-link no-border" href="#">
                      <span aria-hidden="true">«</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link no-border" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link no-border" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link no-border" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link no-border" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link no-border" href="#">
                      <span aria-hidden="true">»</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ManageOrders;
