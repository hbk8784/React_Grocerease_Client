import {
  beauty_hygeine,
  beverage,
  cleaning,
  fruits_vegetable,
  home_kitchen,
  snack,
} from "../assets/images/category";

const productCategory = [
  { id: 1, text: "ALL CATAGORY", value: "all", url: "/products/all/all" },
  {
    id: 2,
    text: "Home & Kitchen",
    value: "home kitchen",
    image: home_kitchen,
    url: "/products/home kitchen/all",
  },
  {
    id: 3,
    text: "Snacks",
    value: "snack",
    image: snack,
    url: "/products/snack/all",
  },
  {
    id: 4,
    text: "Beverages",
    value: "beverages",
    image: beverage,
    url: "/products/beverages/all",
  },
  {
    id: 5,
    text: "Fruits & Vegetable",
    value: "fruits vegetables",
    image: fruits_vegetable,
    url: "/products/fruits vegetables/all",
  },
  {
    id: 6,
    text: "Beauty & Hygiene",
    value: "beauty hygiene",
    image: beauty_hygeine,
    url: "/products/beauty hygiene/all",
  },
  {
    id: 7,
    text: "Cleaning & Household",
    value: "cleaning household",
    image: cleaning,
    url: "/products/cleaning household/all",
  },
];

export default productCategory;
