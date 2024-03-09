import productCategory from "../../utils/productCategory";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <div className="searchBar-container">
      <form>
        <select name="category">
          {productCategory.map((item) => {
            const { id, text, value } = item;
            return (
              <option key={id} value={value}>
                {text}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="i'm Searching for..."
          style={{ backgroundColor: "white" }}
        />
        <button className="btn-search">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
