import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { AdminSharedLayout } from "../admin";

const AdminProtectedRoute = () => {
  const { user } = useSelector((store) => store.user);

  if (user?.role === "admin") {
    return <AdminSharedLayout />;
  } else return <Navigate to="/login" />;
};

export default AdminProtectedRoute;
