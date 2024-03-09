import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import SellerSharedLayout from "./sellerSharedLayout";

const SellerProtectedRoute = () => {
  const { user } = useSelector((store) => store.user);

  if (user && user.role === "seller") {
    return <SellerSharedLayout />;
  }
  return <Navigate to="/login" />;
};

export default SellerProtectedRoute;
