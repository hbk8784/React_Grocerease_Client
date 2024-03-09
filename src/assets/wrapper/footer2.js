import styled from "styled-components";

const Footer2 = styled.div`
  background-color: black;
  color: white;

  .footer-2-container {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    /* line-height: 35px; */
    padding-bottom: 1rem;
  }
  .footer-2-container .footer-2-desc {
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
  }
  .footer-2-option p {
    font-size: small;
    color: rgb(255, 255, 255);
  }
  .footer-2-container .footer-2-desc-1 {
    max-width: 25%;
  }
  .footer-2-container .footer-2-desc-5 {
    max-width: 25%;
  }
  .footer-2-container h4 {
    white-space: nowrap;
  }
  .footer-2-phn {
    display: flex;
    gap: 5px;
  }
  .footer-2-add {
    display: flex;
    gap: 5px;
  }
  .footer-2-email {
    display: flex;
    gap: 5px;
  }
  .footer-heading {
    font-size: 1.2rem;
    font-weight: bolder;
    color: #94bc34;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 1100px) {
    .footer-2-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    .footer-2-desc-1 {
      grid-column: 1 / span 2;
    }

    .footer-2-container .footer-2-desc-1 {
      max-width: 100%;
    }
    .footer-2-container .footer-2-desc-5 {
      max-width: 100%;
    }
    .footer-2-desc-5 {
      grid-column: 1 / span 2;
    }
  }
`;

export default Footer2;
