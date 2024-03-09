import { BsRocketTakeoff } from "react-icons/bs";
import { BsArrowClockwise } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { BsTag } from "react-icons/bs";

const Footer1Options = [
  {
    id: 1,
    icon: <BsRocketTakeoff style={{ fontSize: "30px" }} />,
    h: "Free Shipping",
    p: "For all order over Rs.500",
  },
  {
    id: 2,
    icon: <BsArrowClockwise style={{ fontSize: "30px" }} />,
    h: "1 & 1 Returns",
    p: "Cancellation after 1 day",
  },
  {
    id: 3,
    icon: <BsShieldCheck style={{ fontSize: "30px" }} />,
    h: "100%",
    p: "Gurantee secure payments",
  },
  {
    id: 4,
    icon: <BsClock style={{ fontSize: "30px" }} />,
    h: "24/7 Dedicated Support",
    p: "Anywhere & anytime",
  },
  {
    id: 5,
    icon: <BsTag style={{ fontSize: "30px" }} />,
    h: "Daily Offers",
    p: "Discount up to 70% OFF",
  },
];

export default Footer1Options;
