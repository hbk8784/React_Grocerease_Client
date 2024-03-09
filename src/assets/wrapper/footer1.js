import styled from "styled-components";

const Footer1 = styled.div`
  padding: 1rem 0;
  margin-top: 5rem;
  background-color: black;
  color: white;
  height: 10rem;

  .main-footer1-container {
    width: 90%;
    margin: auto;
    padding: 2rem 0 0 0;
  }

  .footer1-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .single-footer1 {
    display: flex;

    width: 20%;
    justify-content: space-around;
    align-items: center;
    line-height: 1px;
  }
`;

export default Footer1;
