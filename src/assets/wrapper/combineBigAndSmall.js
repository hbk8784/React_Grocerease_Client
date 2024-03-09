import styled from "styled-components";

const CombineBigAndSmall = styled.div`
  display: flex;
  justify-content: space-around;

  .smallCard-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
`;

export default CombineBigAndSmall;
