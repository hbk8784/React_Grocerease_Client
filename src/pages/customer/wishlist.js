import Wrapper from "../../assets/wrapper/wishList";
import { Link } from "react-router-dom";
import { BsFillTrash3Fill } from "react-icons/bs";
import { Footer1, Footer2, NavBar } from "../../component/main";

const WishList = () => {
  return (
    <div>
      <NavBar />
      <br></br>
      <Wrapper className="container px-4  ">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box no-header clearfix">
              <div className="main-box-body clearfix">
                <div className="table-responsive">
                  <div className="card-header px-2">
                    <h3>WishList</h3>
                    <hr></hr>
                  </div>
                  <table className="table user-list">
                    <thead>
                      <tr>
                        <th>
                          <span>Product</span>
                        </th>
                        <th>
                          <span>status</span>
                        </th>
                        <th className="text-center">
                          {/* <button className="btn btn-primary btn-sm px-3">
                        Add All
                      </button> */}
                        </th>
                        <th>
                          <button className="btn btn-danger btn-sm px-3">
                            Clear All
                          </button>
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
                          <Link
                            href="#"
                            className="user-link"
                            style={{ textDecoration: "none" }}
                          >
                            product Name
                          </Link>
                          <span className="user-subhead">Price</span>
                        </td>
                        <td>In Stock</td>
                        <td className="text-center">
                          <button className="label label-default">
                            Add To Cart
                          </button>
                        </td>
                        <td>
                          <button
                            style={{ border: "none", background: "white" }}
                          >
                            <BsFillTrash3Fill style={{ color: "red" }} /> Remove
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://bootdey.com/img/Content/user_3.jpg"
                            alt=""
                          />
                          <Link
                            href="#"
                            className="user-link"
                            style={{ textDecoration: "none" }}
                          >
                            Full name 2
                          </Link>
                          <span className="user-subhead">price</span>
                        </td>
                        <td>Out Of Stock</td>
                        <td className="text-center">
                          <button className="label label-default">
                            Add To Cart
                          </button>
                        </td>
                        <td>
                          <button
                            style={{ border: "none", background: "white" }}
                          >
                            <BsFillTrash3Fill style={{ color: "red" }} /> Remove
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://bootdey.com/img/Content/user_2.jpg"
                            alt=""
                          />
                          <Link
                            to="#"
                            className="user-link"
                            style={{ textDecoration: "none" }}
                          >
                            Product Name
                          </Link>
                          <span className="user-subhead">price</span>
                        </td>
                        <td>In Stock</td>
                        <td className="text-center">
                          <button className="label label-default">
                            Add To Cart
                          </button>
                        </td>
                        <td>
                          <button
                            style={{ border: "none", background: "white" }}
                          >
                            <BsFillTrash3Fill style={{ color: "red" }} /> Remove
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
          <button type="button" className="btn  btn-warning  mt-1 px-2">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Back to shopping
            </Link>
          </button>
          <button type="button" className="btn  btn-primary mt-1">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Add All To Cart
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

export default WishList;
