import { BsFillTrash3Fill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { inventory } from "../../features/sellerSlice";

const Inventory = () => {
  const { products, pcount, limit, page, totalPage } = useSelector(
    (store) => store.seller
  );

  const dispatch = useDispatch();
  const [sort, setSort] = useState("all");
  const [pageCurrent, setPageCurrent] = useState(null);

  const handleChange = (e) => {
    setSort(e.target.value);
  };

  const handlePage = (e) => {
    setPageCurrent(e.target.value);
  };

  let pageCount;
  if (totalPage.length <= limit) {
    pageCount = [1];
  } else {
    pageCount = Array.from({ length: totalPage }, (_, index) => index + 1);
  }

  useEffect(() => {
    if (sort) {
      dispatch(inventory({ sort, pageCurrent }));
    }
    return () => {
      window.removeEventListener("change", handleChange);
      window.removeEventListener("click", handlePage);
    };
  }, [sort, pageCurrent]);

  return (
    <div className="container">
      <div className="row flex-lg-nowrap">
        <div className="col">
          <div className="e-tabs mb-3 ">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Products
                </a>
              </li>
            </ul>
          </div>

          <div className="row flex-lg-nowrap">
            <div className="col mb-3">
              <div className="e-panel card">
                <div className="card-body">
                  <div className="card-title">
                    <h6 className="mr-0">
                      <span>Showing Result / {sort}</span>
                    </h6>
                  </div>
                  <div className="e-table">
                    <div className="table-responsive table-lg mt-3">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th className="align-top">ID</th>
                            <th>Photo</th>
                            <th className="max-width">Brand</th>
                            <th className="sortable">Product</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Weight</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((item, index) => {
                            const {
                              id,
                              name,
                              description,
                              mainCat,
                              subCat,
                              brand,
                              weight,
                              status,
                              price,
                              qty,
                              seller_id,
                              image,
                            } = item;
                            return (
                              <tr key={id}>
                                <td className="align-middle">{id}</td>
                                <td className="align-middle text-center">
                                  <div
                                    className="bg-light d-inline-flex justify-content-center align-items-center align-top"
                                    style={{
                                      width: "35px",
                                      height: "35px",
                                      borderRadius: "3px",
                                    }}
                                  >
                                    <img
                                      style={{
                                        opacity: "0.8",
                                        width: "50px",
                                        height: "50px",
                                      }}
                                      src={`http://127.0.0.1:8080/images/${image}`}
                                    />
                                  </div>
                                </td>
                                <td className="text-nowrap align-middle">
                                  {brand}
                                </td>
                                <td className="text-nowrap align-middle">
                                  <span>{name}</span>
                                </td>
                                <td className="text-wrap align-middle">
                                  {description}
                                </td>
                                <td className="text-nowrap align-middle">
                                  {mainCat}
                                </td>
                                <td className="align-middle">{price}</td>
                                <td className="align-middle">{qty}</td>
                                <td className="align-middle">{weight}</td>
                                <td className="text-nowrap align-middle">
                                  {status}
                                </td>
                                <td className="align-middle">
                                  <div className="btn-group align-top">
                                    <button
                                      className="btn btn-sm btn-outline-dark badge text-info"
                                      type="button"
                                      data-toggle="modal"
                                      data-target="#user-form-modal"
                                    >
                                      Edit
                                    </button>
                                    <button
                                      className="btn btn-sm btn-outline-dark text-danger badge "
                                      type="button"
                                    >
                                      <i className="fa">
                                        <BsFillTrash3Fill />
                                      </i>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex justify-content-center">
                      <ul className="pagination mt-3 mb-0">
                        {/* page numbers */}

                        {pageCount.map((item, index) => {
                          return (
                            <li
                              className={`${
                                page == item ? "active" : ""
                              } page-item`}
                              key={index}
                            >
                              <button
                                href="#"
                                className="page-link"
                                value={item}
                                onClick={handlePage}
                              >
                                {item}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <hr className="my-3" />
                  <div className="e-navlist e-navlist--active-bold">
                    <ul className="nav">
                      <li className="nav-item active">
                        <a href="" className="nav-link text-dark">
                          <span>Total</span>&nbsp;
                          <small> / &nbsp;{pcount.allCount}</small>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="" className="nav-link text-success">
                          <span>In Stock</span>&nbsp;
                          <small> / &nbsp;{pcount.inStockCount}</small>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="" className="nav-link text-danger">
                          <span>Out of Stock</span>&nbsp;
                          <small> / &nbsp;{pcount.outStockCount}</small>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <hr className="my-3" />

                  <div className="">
                    <label>Sort :</label>
                    <div className="px-2">
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="user-status"
                          id="users-status-disabled"
                          value="out stock"
                          onChange={handleChange}
                          checked={sort === "out stock"}
                        />
                        <label
                          className="custom-control-label px-1"
                          htmlFor="users-status-disabled"
                        >
                          Out Of Stock
                        </label>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="user-status"
                          id="users-status-active"
                          value="in stock"
                          onChange={handleChange}
                          checked={sort === "in stock"}
                        />
                        <label
                          className="custom-control-label px-1"
                          htmlFor="users-status-active"
                        >
                          In Stock
                        </label>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="user-status"
                          id="users-status-any"
                          value="all"
                          onChange={handleChange}
                          checked={sort === "all"}
                        />
                        <label
                          className="custom-control-label px-1"
                          htmlFor="users-status-any"
                        >
                          All
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
