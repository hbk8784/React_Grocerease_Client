import styled from "styled-components";

const BrowseByCatogery = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 3rem;
  .browse-by-category-options img {
    width: 70px;
    height: 70px;
  }

  .browse-by-category-container {
    border: 1px solid black;
    width: 90%;
    margin: auto;
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 1rem;
  }

  .browse-by-category-options {
    width: 170px;
    height: 170px;
    padding-top: 2rem;
    line-height: 2rem;
    background-color: white;
    box-shadow: 2px 1px 10px 1px black;
    border-radius: 5px;
  }
`;

export default BrowseByCatogery;
