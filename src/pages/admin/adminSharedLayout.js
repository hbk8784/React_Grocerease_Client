import { Outlet } from "react-router";
import { SideNavBar, TopNavBar, Footer } from "../../component/admin_component";

const AdminSharedLayout = () => {
  return (
    <div>
      <SideNavBar />
      <TopNavBar />
      <main id="main" class="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AdminSharedLayout;
