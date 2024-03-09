import Wrapper from "../../assets/wrapper/seller_wrapper/payment";

const Payment = () => {
  return (
    <Wrapper class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-body">
              <h5 class="header-title pb-3 mt-0">Payments</h5>
              <div class="table-responsive">
                <table class="table table-hover mb-0">
                  <thead>
                    <tr class="align-self-center">
                      <th>Product</th>
                      <th>Customer</th>
                      <th>Payment Type</th>
                      <th>Paid Date</th>
                      <th>Amount</th>
                      <th>Transaction</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        little product <p>Description</p>
                      </td>
                      <td>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          alt=""
                          class="thumb-sm rounded-circle mr-2"
                        />{" "}
                        Kevin Heal
                      </td>
                      <td>Paypal</td>
                      <td>5/8/2018</td>
                      <td>$15,000</td>
                      <td>
                        <span class="badge badge-boxed badge-soft-warning">
                          panding
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!--end table-responsive--> */}
              <div class="pt-3 border-top text-right">
                <a href="#" class="text-primary">
                  View all <i class="mdi mdi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Payment;
