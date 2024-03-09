import styled from "styled-components";

const CustomerOrders = styled.div`
  //   border: 1px solid rgb(0, 0, 0, 0.3);

  .main-box.no-header {
    padding-top: 20px;
  }
  .main-box {
    background: #ffffff;
    -webkit-box-shadow: 1px 1px 2px 0 #cccccc;
    -moz-box-shadow: 1px 1px 2px 0 #cccccc;
    -o-box-shadow: 1px 1px 2px 0 #cccccc;
    -ms-box-shadow: 1px 1px 2px 0 #cccccc;
    box-shadow: 1px 1px 2px 0 #cccccc;
    margin-bottom: 16px;
    -webikt-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    border: 1px solid rgb(0, 0, 0, 0.3);
  }
  .table a.table-link.danger {
    color: #e74c3c;
  }
  .label {
    border-radius: 3px;
    font-size: 0.875em;
    font-weight: 600;
  }
  .user-list tbody td .user-subhead {
    font-size: 0.875em;
    font-style: italic;
  }
  .user-list tbody td .user-link {
    display: block;
    font-size: 1.25em;
    padding-top: 3px;
    margin-left: 60px;
  }
  a {
    color: #3498db;
    outline: none !important;
  }
  .user-list tbody td > img {
    position: relative;
    max-width: 50px;
    float: left;
    margin-right: 15px;
  }

  .table thead tr th {
    text-transform: uppercase;
    font-size: 0.875em;
  }
  .table thead tr th {
    border-bottom: 2px solid #e7ebee;
  }
  .table tbody tr td:first-child {
    font-size: 1.125em;
    font-weight: 300;
  }
  .table tbody tr td {
    font-size: 0.875em;
    vertical-align: middle;
    border-top: 1px solid #e7ebee;
    padding: 12px 8px;
  }
  a:hover {
    text-decoration: none;
  }
`;

export default CustomerOrders;