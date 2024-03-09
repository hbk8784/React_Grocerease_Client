import Wrapper from "../../assets/wrapper/admin_wrapper/dashboard";

const Dashboard = () => {
  return (
    <>
      <div classNameName="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Page Title --> */}

      <section className="section dashboard">
        <div className="row">
          {/* <!-- Left side columns --> */}
          <div className="col-lg-8">
            <div className="row">
              {/* <!-- Sales Card --> */}
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card sales-card">
                  <div className="card-body">
                    <h5 className="card-title">Customers</h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-person"></i>
                      </div>
                      <div className="ps-3">
                        <h6>145</h6>
                        <span className="text-muted small pt-2 ps-1">
                          total
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Sales Card --> */}

              {/* <!-- Revenue Card --> */}
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card revenue-card">
                  <div className="card-body">
                    <h5 className="card-title">Sellers</h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-person-check"></i>
                      </div>
                      <div className="ps-3">
                        <h6>$3,264</h6>
                        <span className="text-muted small pt-2 ps-1">
                          total
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Revenue Card --> */}

              {/* <!-- Customers Card --> */}
              <div className="col-xxl-4 col-xl-12">
                <div className="card info-card customers-card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">
                      Sales <span>| This Year</span>
                    </h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-bar-chart"></i>
                      </div>
                      <div className="ps-3">
                        <h6>1244</h6>

                        <span className="text-muted small pt-2 ps-1">
                          total sales
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Customers Card --> */}

              {/* <!-- Recent Sales --> */}
              <div className="col-12">
                <div className="card recent-sales overflow-auto">
                  <div className="card-body">
                    <h5 className="card-title">Recent Orders</h5>

                    <table className="table table-borderless datatable">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Customer</th>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <a href="#">#2457</a>
                          </th>
                          <td>Brandon Jacob</td>
                          <td>
                            <a href="#" className="text-primary">
                              At praesentium minu
                            </a>
                          </td>
                          <td>$64</td>
                          <td>
                            <span className="badge bg-success">Approved</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* <!-- End Recent Sales --> */}

              {/* <!-- Top Selling --> */}
              <div className="col-12">
                <div className="card top-selling overflow-auto">
                  <div className="card-body pb-0">
                    <h5 className="card-title">Top Selling</h5>

                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Preview</th>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Sold</th>
                          <th scope="col">Revenue</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <a href="#">
                              <img src="assets/img/product-1.jpg" alt="" />
                            </a>
                          </th>
                          <td>
                            <a href="#" className="text-primary fw-bold">
                              Ut inventore ipsa voluptas nulla
                            </a>
                          </td>
                          <td>$64</td>
                          <td className="fw-bold">124</td>
                          <td>$5,828</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* <!-- End Top Selling --> */}
            </div>
          </div>
          {/* <!-- End Left side columns --> */}

          {/* <!-- Right side columns --> */}
          <div className="col-lg-4">
            <div className="col-xxl-12 col-md-6">
              <div className="card info-card sales-card">
                <div className="card-body">
                  <h5 className="card-title">Products</h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-stack"></i>
                    </div>
                    <div className="ps-3">
                      <h6>145</h6>
                      <span className="text-muted small pt-2 ps-1">items</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Recent Activity --> */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Recent Members</h5>

                <Wrapper className="container">
                  <div className="">
                    <div className="">
                      <div className="panel  panel-widget">
                        <div className="panel-body">
                          <ul className="basic-list image-list">
                            <li>
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                alt="img"
                                className="img"
                              />
                              <b>John Doe</b>
                              <span className="desc">Designer</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Wrapper>
              </div>
            </div>
            {/* <!-- End Recent Activity --> */}

            {/* <!-- Budget Report --> */}
            <div className="card">
              <div className="card-body pb-0">
                <h5 className="card-title">Recent Added Products</h5>

                <div className="card-body">
                  <table className="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <a href="#">1</a>
                        </th>
                        <td>Brandon Jacob</td>
                        <td>
                          <a href="#" className="text-primary">
                            Snack
                          </a>
                        </td>
                        <td>250</td>
                        <td>
                          <span className="badge bg-success">10</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
