import { FcSurvey } from "react-icons/fc";
// import { FcCancel } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";

const profileOptions = [
  {
    id: 1,
    text: "Profile",
    path: "/customer/profile",
    icon: <FcReadingEbook />,
  },
  { id: 2, text: "Orders", path: "/customer/orders", icon: <FcSurvey /> },
];

export default profileOptions;
// { id: 3, text: "LogOut", path: "/", icon: <FcCancel /> },
