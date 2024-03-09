import { useSelector } from "react-redux";
import "../../assets/seller_dashboard/css/style.css";
import { SalesRevCard, RecentSales } from "../../component/seller_component";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <>
      <div>
        {loading && (
          <div
            id="spinner"
            class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
          >
            <div
              className="spinner-border text-primary"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <SalesRevCard />
      <RecentSales />
    </>
  );
};

export default Dashboard;
