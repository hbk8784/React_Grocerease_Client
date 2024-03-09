import styled from "styled-components";

const bestSeller = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 3rem;

  .bestSeller-container {
    width: 100%;
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .bestSeller-products {
    padding: 1rem;
    display: flex;
    border: 1px solid black;
    overflow-x: auto;
    scroll-behavior: smooth;
  }
`;

export default bestSeller;
