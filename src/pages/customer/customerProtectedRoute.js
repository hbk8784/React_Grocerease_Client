import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.user);

  if (user?.role == "customer") {
    return <Outlet />;
  } else return <Navigate to="/login" />;
};

export default ProtectedRoute;
