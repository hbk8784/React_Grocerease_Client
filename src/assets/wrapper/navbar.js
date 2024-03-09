import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  height: 100px;

  .customer-support-container {
    line-height: 5px;
    text-align: right;
  }

  .contact-number {
    margin-top: 0;
    font-size: 23px;
  }

  .support-24*7 {
    margin-bottom: 0;
  }

  .searchBar-container form input {
    border: 1px solid rgb(0, 0, 0, 0.1);
    // box-shadow: 10px 10px 15px 1px black;
    border-left: 1px solid black;
    background-color: rgba(233, 233, 233, 255);
    width: 25vw;
    height: 5vh;
    outline: none;
    padding: 0.5rem 1rem;
  }

  .searchBar-container form select {
    border: 0;
    // box-shadow: 30px 10px 15px 1px black;
    width: 18vw;
    height: 5vh;
    padding: 0.5rem 1rem;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: rgb(211, 211, 211);
    color: black;
  }

  .btn-search {
    background-color: rgb(25, 25, 112);
    color: white;
    border: 0;
    height: 5vh;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 0.5rem 1rem;
  }
`;

export default NavBar;
