import { useEffect, useReducer, useState } from "react";
import Wrapper from "../assets/wrapper/products";
import { Footer1, Footer2, NavBar, ProductCard } from "../component/main";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../features/productSlice";
import { BsChevronRight } from "react-icons/bs";
import { useParams } from "react-router";
import { setFilter } from "../features/productSlice";
import { NavLink } from "react-router-dom";

const Products = () => {
  // const [currentPriceRange, setCurrentPriceRange] = useState(null);

  const {
    products,
    category,
    subCategory,
    priceRange,
    brand,
    status,
    page,
    totalPage,
    limit,
    searchNow,
  } = useSelector((store) => store.products);

  const dispatchSlice = useDispatch();
  const { mainCat, subCat } = useParams();

  if (mainCat != category) {
    dispatchSlice(setFilter({ name: "category", value: mainCat }));
  }
  if (subCat != "all") {
    dispatchSlice(setFilter({ name: "subCategory", value: subCat }));
  }
  if (subCat == "all") {
    dispatchSlice(setFilter({ name: "subCategory", value: subCat }));
  }

  // if (currentPriceRange) {
  //   dispatchSlice(setFilter({ name: "priceRange", value: currentPriceRange }));
  // }

  const handleFilter = (e) => {
    if (e.target.dataset.name) {
      dispatchSlice(
        setFilter({
          name: e.target.dataset.name,
          value: e.target.dataset.value,
        })
      );
    }
    dispatchSlice(setFilter({ name: e.target.name, value: e.target.value }));
  };

  //-------------------------------------------------------------------------

  const handleSearchFilter = (e) => {
    // e.preventDefault();
    dispatchSlice(setFilter({ name: e.target.name, value: e.target.value }));
  };

  //----------------------------------------------------------------------------

  const handlePrice = (e) => {
    dispatchSlice(setFilter({ name: e.target.name, value: e.target.value }));
  };

  //---------------------------------------------------------------------------

  const handlePageChange = (e) => {
    dispatchSlice(
      setFilter({ name: e.target.dataset.name, value: e.target.dataset.value })
    );
    setTimeout(() => {
      dispatchSlice(getProducts());
    }, 500);
  };

  //---------------------------------------------------------------------------

  // calling for new product list after applying filter or when page is changed
  useEffect(() => {
    if (searchNow) {
      dispatchSlice(getProducts());
    }
  }, [searchNow]);

  //page counter----------------------------------------------------
  let pages;
  if (totalPage == 1) {
    pages = [1];
  } else pages = Array.from({ length: totalPage }, (_, index) => index + 1);

  //--------------------------------------------------------------------------

  return (
    <>
      <div style={{ marginTop: "3rem" }}></div>
      <NavBar />
      <br></br>
      <br></br>
      <link
        href="https://netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <Wrapper className="container bootdey mt-4">
        <div className="col-md-3">
          <section className="panel border">
            <header className="panel-heading">Category</header>
            <div className="panel-body">
              <ul className="nav prod-cat">
                <li>
                  <NavLink
                    className={`${
                      category == "fruits vegetables" ? "active" : ""
                    }`}
                    // onClick={handleFilter}
                    // data-value="fruits vegetables"
                    // data-name="category"
                    to="/products/fruits vegetables/all"
                  >
                    <i className="fa ">
                      <BsChevronRight />
                    </i>{" "}
                    Fruits & Vegetable
                  </NavLink>
                  <ul
                    className={`nav ${
                      category == "fruits vegetables" ? "" : "hide"
                    }`}
                  >
                    <li
                      className={`${
                        subCategory == "seasonal fruits vegetable"
                          ? "active"
                          : ""
                      }`}
                    >
                      <NavLink
                        // onClick={handleFilter}
                        // data-value="seasonal fruits vegetable"
                        // data-name="subCategory"
                        to="/products/fruits vegetables/seasonal fruits vegetable"
                      >
                        - seasonal
                      </NavLink>
                    </li>{" "}
                    <li
                      className={`${
                        subCategory == "fresh vegetable" ? "active" : ""
                      }`}
                    >
                      <NavLink
                        // onClick={handleFilter}
                        // data-value="fresh vegetable"
                        // data-name="subCategory"
                        to="/products/fruits vegetables/fresh vegetable"
                      >
                        - vegetable
                      </NavLink>
                    </li>
                    <li
                      className={`${
                        subCategory == "fresh fruits" ? "active" : ""
                      }`}
                    >
                      <NavLink
                        // onClick={handleFilter}
                        // data-value="fresh fruits"
                        // data-name="subCategory"
                        to="/products/fruits vegetables/fresh fruits"
                      >
                        - fruits
                      </NavLink>
                    </li>
                    <li
                      className={`${
                        subCategory == "herbs seasonings" ? "active" : ""
                      }`}
                    >
                      <NavLink
                        // onClick={handleFilter}
                        // data-value="herbs seasonings"
                        // data-name="subCategory"
                        to="/products/fruits vegetables/herbs seasonings"
                      >
                        - Herbs
                      </NavLink>
                    </li>
                    <li
                      className={`${
                        subCategory == "exotic fruits vegetables"
                          ? "active"
                          : ""
                      }`}
                    >
                      <NavLink
                        // onClick={handleFilter}
                        // data-value="exotic fruits vegetables"
                        // data-name="subCategory"
                        to="/products/fruits vegetables/exotic fruits vegetables"
                      >
                        - exotic
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    className={`${category == "snack" ? "active" : ""}`}
                    // data-value="snack"
                    // data-name="category"
                    // onClick={handleFilter}
                    to="/products/snack/all"
                  >
                    <i className="fa ">
                      <BsChevronRight />
                    </i>{" "}
                    Snacks
                  </NavLink>
                  <ul className={`nav ${category == "snack" ? "" : "hide"}`}>
                    <li
                      className={`${
                        subCategory == "chips nachos" ? "active" : ""
                      }`}
                    >
                      <NavLink
                        // onClick={handleFilter}
                        // data-value="chips nachos"
                        // data-name="subCategory"
                        to="/products/snack/chips nachos"
                      >
                        - chips
                      </NavLink>
                    </li>{" "}
                    <br></br>
                    <li
                      className={`${
                        subCategory == "biscutes cookies" ? "active" : ""
                      }`}
                    >
                      <NavLink
                        // onClick={handleFilter}
                        // data-value="biscutes cookies"
                        // data-name="subCategory"
                        to="/products/snack/biscutes cookies"
                      >
                        - biscuits
                      </NavLink>
                    </li>
                    <li
                      className={`${
                        subCategory == "pasta sauce" ? "active" : ""
                      }`}
                    >
                      <NavLink
                        // onClick={handleFilter}
                        // data-value="pasta sauce"
                        // data-name="subCategory"
                        to="/products/snack/pasta sauce"
                      >
                        - pasta
                      </NavLink>
                    </li>
                    <li>
                      <a>- chocolate</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <NavLink
                    className={`${category == "beverages" ? "active" : ""}`}
                    // data-value="beverages"
                    // data-name="category"
                    // onClick={handleFilter}
                    to="/products/beverages/all"
                  >
                    <i className="fa ">
                      <BsChevronRight />
                    </i>{" "}
                    Beverage
                  </NavLink>
                  <ul
                    className={`nav ${category == "beverages" ? "" : "hide"}`}
                  >
                    <li className="activee">
                      <a>- soft drink</a>
                    </li>{" "}
                    <br></br>
                    <li>
                      <a>- tea</a>
                    </li>
                    <li>
                      <a>- coffee</a>
                    </li>
                    <li>
                      <a>- juice</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    className={`${
                      category == "beauty hygiene" ? "active" : ""
                    }`}
                    // data-value="beauty hygiene"
                    // data-name="category"
                    // onClick={handleFilter}
                    to="/products/beauty hygiene/all"
                  >
                    <i className="fa ">
                      <BsChevronRight />
                    </i>{" "}
                    Beauty & Hygine
                  </NavLink>
                  <ul
                    className={`nav ${
                      category == "beauty hygiene" ? "" : "hide"
                    }`}
                  >
                    <li className="activee">
                      <a>- makeup</a>
                    </li>{" "}
                    <br></br>
                    <li>
                      <a>- anti ageing</a>
                    </li>
                    <li>
                      <a>- santeful perfume</a>
                    </li>
                    <li>
                      <a>- bathing essential</a>
                    </li>
                    <li>
                      <a>- moisturisers</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    className={`${category == "home kitchen" ? "active" : ""}`}
                    // data-value="home kitchen"
                    // data-name="category"
                    // onClick={handleFilter}
                    to="/products/home kitchen/all"
                  >
                    <i className="fa">
                      <BsChevronRight />
                    </i>{" "}
                    Home & Kitchen
                  </NavLink>
                  <ul
                    className={`nav ${
                      category == "home kitchen" ? "" : "hide"
                    }`}
                  >
                    <li className="activee">
                      <a>- tools</a>
                    </li>{" "}
                    <br></br>
                    <li>
                      <a>- stationary</a>
                    </li>
                    <li>
                      <a>- storage sollutions</a>
                    </li>
                    <li>
                      <a>- battries</a>
                    </li>
                  </ul>
                  <li>
                    <NavLink
                      className={`${
                        category == "cleaning household" ? "active" : ""
                      }`}
                      // data-value="cleaning household"
                      // data-name="category"
                      // onClick={handleFilter}
                      to="/products/cleaning household/all"
                    >
                      <i className="fa ">
                        <BsChevronRight />
                      </i>{" "}
                      Cleaning & Household
                    </NavLink>
                    <ul
                      className={`nav ${
                        category == "cleaning household" ? "" : "hide"
                      }`}
                    >
                      <li className="activee">
                        <a>- detergent</a>
                      </li>{" "}
                      <li>
                        <a>- cleaners</a>
                      </li>
                      <li>
                        <a>- freshners</a>
                      </li>
                      <li>
                        <a>- kitchen wipes</a>
                      </li>
                    </ul>
                  </li>
                </li>
              </ul>
            </div>
          </section>

          <section className="panel border">
            <header className="panel-heading">Price Range</header>
            <div className="panel-body sliders">
              <div id="slider-range" className="slider"></div>
              <div className="slider-info">
                <span id="slider-range-amount">
                  <p>&#x20B9; {priceRange}</p>
                </span>
                <input
                  name="priceRange"
                  type="range"
                  min={0}
                  max={5000}
                  step={50}
                  onChange={handlePrice}
                ></input>
              </div>
            </div>
          </section>
          <section className="panel border">
            <header className="panel-heading">Filter</header>
            <div className="panel-body">
              <form role="form product-form">
                <div className="form-group">
                  <label>Brand</label>
                  <select
                    className="form-control hasCustomSelect"
                    style={{
                      WebkitAppearance: "menulist-button",
                      width: "231px",
                      position: "absolute",
                      opacity: "0",
                      height: "34px",
                      fontSize: "12px",
                    }}
                    onChange={handleFilter}
                    name="brand"
                  >
                    <option value="all">All</option>
                    <option value="ACT II">ACT II</option>
                    <option value="Apsara">Apsara</option>
                    <option value="BRU">BRU</option>
                    <option value="Britannia">Britannia</option>
                    <option value="Cadbury">Cadbury</option>
                    <option value="Coca Cola">Coca Cola</option>
                    <option value="Colin">Colin</option>
                    <option value="Domix">Domix</option>
                    <option value="Dove">Dove</option>
                    <option value="Duracell">Duracell</option>
                    <option value="Engage">Engage</option>
                    <option value="Fresho">Fresho</option>
                    <option value="Kurkure">Kurkure</option>
                    <option value="Lakme">Lakme</option>
                    <option value="Lays">Lays</option>
                    <option value="Lipton">Lipton</option>
                    <option value="Maggi">Maggi</option>
                    <option value="Milton">Milton</option>
                    <option value="Nescafe">Nescafe</option>
                    <option value="Nivea">Nivea</option>
                    <option value="Odonil">Odonil</option>
                    <option value="Parle">Parle</option>
                    <option value="Pears">Pears</option>
                    <option value="Pepsi">Pepsi</option>
                    <option value="Phillips">Phillips</option>
                    <option value="Pioner">Pioner</option>
                    <option value="Ponds">Ponds</option>
                    <option value="Prestige">Prestige</option>
                    <option value="Real">Real</option>
                    <option value="Red/Label">Red Label</option>
                    <option value="Surf Excel">Surf Excel</option>
                    <option value="Sunfeast">Sunfeast</option>
                    <option value="Taj">Taj</option>
                    <option value="Thums Up">Thums Up</option>
                    <option value="Tropicana">Tropicana</option>
                    <option value="wai wai">wai wai</option>
                  </select>
                  <span
                    className="customSelect form-control"
                    style={{ display: "inline-block" }}
                  >
                    <span
                      className="customSelectInner"
                      style={{ width: "209px", display: "inline-block" }}
                    >
                      {brand ? brand : "select"}
                    </span>
                  </span>
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select
                    className="form-control hasCustomSelect"
                    style={{
                      WebkitAppearance: "menulist-button",
                      width: "231px",
                      position: "absolute",
                      opacity: "0",
                      height: "34px",
                      fontSize: "12px",
                    }}
                    onChange={handleFilter}
                    name="status"
                  >
                    <option value="all">All</option>
                    <option value="in stock">In Stock</option>
                    <option value="out stock">Out Stock</option>
                  </select>
                  <span
                    className="customSelect form-control"
                    style={{ display: "inline-block" }}
                  >
                    <span
                      className="customSelectInner"
                      style={{ width: "209px", display: "inline-block" }}
                    >
                      {status ? status : "select"}
                    </span>
                  </span>
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSearchFilter}
                  name="searchNow"
                  value={!searchNow}
                >
                  Filter
                </button>
                <NavLink
                  className="btn btn-danger mx-2"
                  to="/products/all/all"
                  // onClick={handleClear}
                >
                  Clear
                </NavLink>
              </form>
            </div>
          </section>
        </div>
        <div className="col-md-9">
          <pre>
            <b>Category :</b> {category} <b style={{ color: "red" }}>||</b>{" "}
            <b>Sub-Category :</b> {subCategory}{" "}
            <b style={{ color: "red" }}>||</b> <b>Brand :</b> {brand}{" "}
            <b style={{ color: "red" }}>||</b> <b> Page :</b> {page} <b>-</b>{" "}
            {pages.length}
          </pre>
          <div className="row product-list">
            {products &&
              products.map((item, index) => {
                return (
                  <div className="col-md-4 mt-5" key={index}>
                    <ProductCard bestItems={[item]} />
                  </div>
                );
              })}

            <section className="panel mt-4">
              <div className="panel-body">
                <div className="pull-right">
                  <ul className="pagination pagination-sm pro-page-list">
                    {pages.map((item, index) => {
                      return (
                        <li key={index + "u"}>
                          <a
                            href="#"
                            data-name="page"
                            data-value={item}
                            onClick={handlePageChange}
                          >
                            {item}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Wrapper>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Products;
