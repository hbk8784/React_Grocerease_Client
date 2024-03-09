import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../features/sellerSlice";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { user } = useSelector((store) => store.user);
  const id = user.id;
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState({ seller_id: id });

  //handling text submitions
  const handleChange = (e) => {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
  };

  //handling image submition
  const handleImage = (e) => {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !productInfo.name ||
      !productInfo.description ||
      !productInfo.mainCat ||
      !productInfo.subCat ||
      !productInfo.brand ||
      !productInfo.weight ||
      !productInfo.status ||
      !productInfo.price ||
      !productInfo.image ||
      !productInfo.qty
    ) {
      toast.warning("Fill out all fields");
      return;
    }

    const DataToSend = new FormData();
    DataToSend.append("name", productInfo.name);
    DataToSend.append("description", productInfo.description);
    DataToSend.append("mainCat", productInfo.mainCat);
    DataToSend.append("subCat", productInfo.subCat);
    DataToSend.append("brand", productInfo.brand);
    DataToSend.append("weight", productInfo.weight);
    DataToSend.append("status", productInfo.status);
    DataToSend.append("price", productInfo.price);
    DataToSend.append("image", productInfo.image);
    DataToSend.append("qty", productInfo.qty);
    DataToSend.append("seller_id", productInfo.seller_id);

    dispatch(addProduct(DataToSend));
  };

  useEffect(() => {
    return () => {
      window.removeEventListener("change", handleChange);
      window.removeEventListener("click", handleSubmit);
      window.removeEventListener("click", handleImage);
    };
  }, [productInfo]);

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <div className="col-sm-12 col-xl-6">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Product Description</h6>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              id="floatingInput"
              value={productInfo.name}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>

          {/* {Brand selector} */}
          <div className="form-floating mb-3">
            <select
              className="form-select"
              id="floatingSelect"
              name="brand"
              onChange={handleChange}
            >
              <option value="">Select a Brand</option>
              <option value="Fresho">Fresho</option>
              <option value="Maggi">Maggi</option>
              <option value="Britannia">Britannia</option>
              <option value="Parle">Parle</option>
              <option value="Lays">Lays</option>
              <option value="Cadbury">Cadbury</option>
              <option value="Kurkure">Kurkure</option>
              <option value="ACT II">ACT II</option>
              <option value="Sunfeast">Sunfeast</option>
              <option value="wai wai">wai wai</option>
              <option value="Coca Cola">Coca Cola</option>
              <option value="Thums Up">Thums Up</option>
              <option value="Pepsi">Pepsi</option>
              <option value="Lipton">Lipton</option>
              <option value="Red/Label">Red Label</option>
              <option value="Taj">Taj</option>
              <option value="Nescafe">Nescafe</option>
              <option value="BRU">BRU</option>
              <option value="Tropicana">Tropicana</option>
              <option value="Real">Real</option>
              <option value="Lakme">Lakme</option>
              <option value="Ponds">Ponds</option>
              <option value="Engage">Engage</option>
              <option value="Nivea">Nivea</option>
              <option value="Dove">Dove</option>
              <option value="Pears">Pears</option>
              <option value="Prestige">Prestige</option>
              <option value="Pioner">Pioner</option>
              <option value="Apsara">Apsara</option>
              <option value="Milton">Milton</option>
              <option value="Duracell">Duracell</option>
              <option value="Phillips">Phillips</option>
              <option value="Surf Excel">Surf Excel</option>
              <option value="Domix">Domix</option>
              <option value="Odonil">Odonil</option>
              <option value="Colin">Colin</option>
            </select>
            <label htmlFor="floatingSelect">Brand</label>
          </div>

          {/* {Main Category Selector} */}
          <div className="form-floating mb-3">
            <select
              className="form-select"
              id="floatingSelect"
              name="mainCat"
              onChange={handleChange}
            >
              <option value="">Select Category</option>

              <option value="sanck">Sanck</option>
              <option value="beverages">Beverages</option>
              <option value="fruits vegetables">Fruits & Vegetables</option>

              <option value="beauty hygiene">Beauty & Hygiene</option>
              <option value="home kitchen">Home & Kitchen</option>
              <option value="cleaning household">Cleaning & Household</option>
            </select>
            <label htmlFor="floatingSelect">Category</label>
          </div>

          {/* {Sub Category selector} */}
          <div className="form-floating mb-3">
            <select
              className="form-select"
              id="floatingSelect"
              name="subCat"
              onChange={handleChange}
            >
              <option selected>- Select -</option>
              <option value="seasonal fruits vegetable">
                Seasonal Fruits & Vegetable
              </option>
              <option value="fresh vegetable">Fresh Vegetable</option>
              <option value="fresh fruits">Fresh Fruits</option>
              <option value="herbs seasonings">Herbs & Seasonings</option>
              <option value="exotic fruits vegetables">
                Exotic Fruits & Vegetables
              </option>
              <option value="chips nachos">Chips & Nachos</option>
              <option value="biscutes cookies">Biscutes & Cookies</option>
              <option value="pasta sauce">Pasta & Sauce</option>
              <option value="chocolate">Chocolate</option>
              <option value="soft drink">Soft Drink</option>
              <option value="tea">Tea</option>
              <option value="coffee">Coffee</option>
              <option value="juice">Juice</option>
              <option value="makeup">Makeup</option>
              <option value="anti ageing">Anti Ageing</option>
              <option value="sentful perfumes">Sentful Perfumes</option>
              <option value="bathing essentials">Bathing Essentials</option>
              <option value="moisturisers serums">Moisturisers & Serums</option>
              <option value="kitchen tools">Kitchen Tools</option>
              <option value="stationary">Stationary</option>
              <option value="storage solutions">Storage Solutions</option>
              <option value="battery electricals">Battery & Electricals</option>
              <option value="detergent">Detergent</option>
              <option value="cleaners">Cleaners</option>
              <option value="fresheners">Fresheners</option>
              <option value="kitchen wipes">Kitchen Wipes</option>
            </select>
            <label htmlFor="floatingSelect">Sub-Category</label>
          </div>

          {/* {Description Section} */}
          <div className="form-floating">
            <textarea
              className="form-control"
              id="floatingTextarea"
              style={{ height: "50px" }}
              name="description"
              onChange={handleChange}
              value={productInfo.description}
            ></textarea>
            <label htmlFor="floatingTextarea">Description in Short</label>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-xl-6 mx-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Other Details</h6>
          <form>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Weight
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail3"
                  name="weight"
                  value={productInfo.weight}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Qty
              </label>
              <div className="col-sm-3">
                <input
                  type="number"
                  className="form-control"
                  id="inputPassword3"
                  name="qty"
                  value={productInfo.qty}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Price
              </label>
              <div className="col-sm-3">
                <input
                  type="number"
                  className="form-control"
                  id="inputPassword3"
                  name="price"
                  value={productInfo.price}
                  onChange={handleChange}
                />
              </div>
            </div>
            <h6 class="mb-1">Status</h6>
            <select
              class="form-select form-select-sm mb-3"
              name="status"
              onChange={handleChange}
            >
              <option selected>- select -</option>
              <option value="in stock">In Stock</option>
              <option value="out stock">Out Stock</option>
            </select>

            <div class="mb-3">
              <label htmlFor="formFile" class="form-label">
                Image
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                name="image"
                onChange={handleImage}
              />
            </div>
            <button onClick={handleSubmit} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
