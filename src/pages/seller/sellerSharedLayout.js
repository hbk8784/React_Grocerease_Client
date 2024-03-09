import { Outlet } from "react-router";
import {
  SideNavBar,
  TopNavBar,
  Footer,
} from "../../component/seller_component";
import { useSelector } from "react-redux";

const SellerSharedLayout = () => {
  const { user } = useSelector((store) => store.user);
  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <SideNavBar firstName={user.firstName} lastName={user.lastName} />

      <div className="content">
        <TopNavBar firstName={user.firstName} lastName={user.lastName} />
        <div style={{ marginBottom: "3rem" }}></div>
        <Outlet />

        {/* <!-- Sale & Revenue Start --> */}

        {/* <!-- Sale & Revenue End --> */}

        {/* <!-- Recent Sales Start --> */}

        {/* <!-- Recent Sales End --> */}

        {/* <!-- Footer Start --> */}
        <div style={{ marginTop: "3rem" }}></div>
        <Footer />
        {/* <!-- Footer End --> */}
      </div>
    </div>
  );
};

export default SellerSharedLayout;
