import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex min-h-screen">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
