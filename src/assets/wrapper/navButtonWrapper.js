import styled from "styled-components";

const Wrapper = styled.div`
  width: 10vw;
  display: flex;
  justify-content: space-between;

  .wishList-ribbon {
    text-align: center;
    max-width: 3vw;
    height: 20px;
    background-color: orange;
    position: relative;
    left: 70%;
    bottom: 80%;
    border-radius: 30%;
  }

  .cart-ribbon {
    text-align: center;
    max-width: 3vw;
    height: 20px;
    background-color: orange;
    position: relative;
    left: 70%;
    bottom: 80%;
    border-radius: 30%;
  }

  .profile-hover-options {
    position: absolute;
    background-color: rgb(237, 237, 237);
  }

  .profile-hover-options {
    width: 8rem;
    height: 9rem;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 2px 2px 5px black;
  }
`;

export default Wrapper;
