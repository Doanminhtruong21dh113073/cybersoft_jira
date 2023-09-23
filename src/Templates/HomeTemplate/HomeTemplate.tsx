import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer/Footer";

type Props = {};

const HomeTemplate: React.FC = (props: Props) => {
  return (
    <div className="bg-blue-600 font-[poppins] select-none">
      <div className="flex flex-grow">
        <div className="w-1/4 flex-shrink-0">
          {" "}
          {/* Sidebar chiếm 1/4 chiều rộng */}
          <Sidebar />
        </div>
        <div className="w-3/4">
          {" "}
          {/* Outlet chiếm 3/4 chiều rộng */}
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default React.memo(HomeTemplate);
