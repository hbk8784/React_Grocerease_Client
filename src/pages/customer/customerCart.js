import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrapper/customerCart";
import { Footer1, Footer2, NavBar } from "../../component/main";
import { BsFillTrash3Fill } from "react-icons/bs";

const CustomerCart = () => {
  return (
    <div>
      <NavBar />
      <Wrapper className="container px-0 my-5 clearfix">
        {/* <!-- Shopping cart table --> */}
        <div className="card">
          <div className="card-header">
            <h3>Shopping Cart</h3>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered m-0">
                <thead>
                  <tr>
                    {/* <!-- Set columns width --> */}
                    <th
                      className="text-center py-3 px-0"
                      style={{ minWidth: "400px" }}
                    >
                      Product Name &amp; Details
                    </th>
                    <th
                      className="text-center py-3 px-0"
                      style={{ width: "100px" }}
                    >
                      Price
                    </th>
                    <th
                      className="text-center py-3 px-0"
                      style={{ width: "120px" }}
                    >
                      Quantity
                    </th>
                    <th
                      className="text-center py-3 px-0"
                      style={{ width: "100px" }}
                    >
                      Total
                    </th>
                    <th
                      className="text-center align-middle py-3 px-0"
                      style={{ width: "40px" }}
                    >
                      <a
                        href="#"
                        className="shop-tooltip float-none text-light"
                        title=""
                        data-original-title="Clear cart"
                      >
                        <i className="ino ion-md-trash"></i>
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4">
                      <div className="media align-items-center d-flex flex-row">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="d-block ui-w-40 ui-bordered mr-4"
                          alt=""
                        />
                        <div className="media-body px-2">
                          <a href="#" className="d-block text-dark">
                            Product 1
                          </a>
                          <small>
                            <span className="text-muted">Color:</span>
                            <span
                              className="ui-product-color ui-product-color-sm align-text-bottom"
                              style={{ background: "#e81e2c" }}
                            ></span>{" "}
                            &nbsp;
                            <span className="text-muted">Size: </span> EU 37
                            &nbsp;
                            <span className="text-muted">
                              Ships from:{" "}
                            </span>{" "}
                            China
                          </small>
                        </div>
                      </div>
                    </td>
                    <td className="text-right font-weight-semibold align-middle p-4">
                      $57.55
                    </td>
                    <td className="align-middle p-4">
                      <input
                        type="text"
                        className="form-control text-center"
                        value="2"
                      />
                    </td>
                    <td className="text-right font-weight-semibold align-middle p-4">
                      $115.1
                    </td>
                    <td className="text-center align-middle px-0">
                      <a
                        href="#"
                        className="shop-tooltip close float-none text-danger"
                        title=""
                        data-original-title="Remove"
                      >
                        <BsFillTrash3Fill />
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4">
                      <div className="media align-items-center d-flex flex-row">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar6.png"
                          className="d-block ui-w-40 ui-bordered mr-4"
                          alt=""
                        />
                        <div className="media-body px-2">
                          <a href="#" className="d-block text-dark">
                            Product 2
                          </a>
                          <small>
                            <span className="text-muted">Color:</span>
                            <span
                              className="ui-product-color ui-product-color-sm align-text-bottom"
                              style={{ background: "#000" }}
                            ></span>{" "}
                            &nbsp;
                            <span className="text-muted">Storage: </span> 32GB
                            &nbsp;
                            <span className="text-muted">Warranty: </span>{" "}
                            Standard - 1 year &nbsp;
                            <span className="text-muted">
                              Ships from:{" "}
                            </span>{" "}
                            China
                          </small>
                        </div>
                      </div>
                    </td>
                    <td className="text-right font-weight-semibold align-middle p-4">
                      $1049.00
                    </td>
                    <td className="align-middle p-4">
                      <input
                        type="text"
                        className="form-control text-center"
                        value="1"
                      />
                    </td>
                    <td className="text-right font-weight-semibold align-middle p-4">
                      $1049.00
                    </td>
                    <td className="text-center align-middle px-0">
                      <a
                        href="#"
                        className="shop-tooltip close float-none text-danger"
                        title=""
                        data-original-title="Remove"
                      >
                        <BsFillTrash3Fill />
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4">
                      <div className="media align-items-center d-flex flex-row">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          className="d-block ui-w-40 ui-bordered mr-4"
                          alt=""
                        />
                        <div className="media-body px-2">
                          <a href="#" className="d-block text-dark">
                            Product 3
                          </a>
                          <small>
                            <span className="text-muted">Ships from: </span>{" "}
                            Germany
                          </small>
                        </div>
                      </div>
                    </td>
                    <td className="text-right font-weight-semibold align-middle p-4">
                      $20.55
                    </td>
                    <td className="align-middle p-4">
                      <input
                        type="text"
                        className="form-control text-center"
                        value="1"
                      />
                    </td>
                    <td className="text-right font-weight-semibold align-middle p-4">
                      $20.55
                    </td>
                    <td className="text-center align-middle px-0">
                      <a
                        href="#"
                        className="shop-tooltip close float-none text-danger"
                        title=""
                        data-original-title="Remove"
                      >
                        <BsFillTrash3Fill />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <!-- / Shopping cart table --> */}

            <div className="d-flex flex-row-reverse px-3">
              <div className="d-flex">
                <div className="text-right mt-4">
                  <label className="text-muted font-weight-normal m-0">
                    Total price
                  </label>
                  <div className="text-large">
                    <strong>$1164.65</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between ">
              <button
                type="button"
                className="btn btn-sm btn-danger  mt-4 px-2"
              >
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Back to shopping
                </Link>
              </button>
              <button type="button" className="btn btn-sm btn-primary mt-4">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Checkout
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default CustomerCart;
