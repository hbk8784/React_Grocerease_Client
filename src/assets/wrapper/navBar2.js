import styled from "styled-components";

const navbar2Wrapper = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 1rem;

  .navbar2-option-button {
    width: 13rem;
    height: 2.5rem;
    background-color: rgb(255, 191, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }

  .navbar2-option-button:hover {
    cursor: pointer;
  }

  .navbar2-container {
    display: flex;
  }

  .deal-container {
    margin-left: 1rem;
    width: 20rem;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .navbar2-hover-options {
    position: absolute;
    top: 14.3rem;
    background-color: rgb(237, 237, 237);
    width: 13rem;
    height: 16rem;
    list-style-type: none;
    line-height: 2rem;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 2px 2px 5px black;
  }
  li:hover {
    background-color: rgb(255, 191, 0);
    padding-left: 10px;
    font-weight: 30px;
    border-radius: 5px;
  }
`;

export default navbar2Wrapper;
