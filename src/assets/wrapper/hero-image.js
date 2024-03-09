import styled from "styled-components";

const heroImageWrapper = styled.div`
  margin-top: 2rem;
  background-color: black;

  width: 100%;
  height: 70vh;

  .hero-container {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .hero-image-1 {
    width: 100%;
    margin: auto;
    margin-top: 2.5rem;
  }

  .hero-image-2 {
    width: 100%;
    margin: auto;
    margin-top: 2.5rem;
  }

  .hero-image-1 img {
    border-radius: 10px;
  }

  .hero-image-2 img {
    border-radius: 10px;
  }
`;
export default heroImageWrapper;
