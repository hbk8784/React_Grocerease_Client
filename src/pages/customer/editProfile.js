import { Footer1, Footer2, NavBar, UpdateUser } from "../../component/main";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const { user } = useSelector((store) => store.user);
  return (
    <div>
      <NavBar />
      <UpdateUser oldUserData={user} />
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default EditProfile;
