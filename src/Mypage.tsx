import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MyPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 bg-black z-10">
        <Navbar />
      </header>

      <div className="flex h-screen bg-black text-white">
        <Sidebar />
        <div className=" items-center justify-center flex h-[900px] flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
