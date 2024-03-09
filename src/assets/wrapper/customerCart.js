import styled from "styled-components";

const CustomerOrder = styled.div`
  margin-top: 20px;
  background: #eee;

  .ui-w-40 {
    width: 40px !important;
    height: auto;
  }

  .card {
    box-shadow: 0 1px 15px 1px rgba(52, 40, 104, 0.08);
  }

  .ui-product-color {
    display: inline-block;
    overflow: hidden;
    margin: 0.144em;
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 10rem;
    -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15) inset;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15) inset;
    vertical-align: middle;
  }
`;
export default CustomerOrder;
