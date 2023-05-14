import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-screen border-2">
      <header className="w-full fixed top-0 left-0 z-20 h-16 bg-[#1d6b70] text-white uppercase text-lg font-bold">
        <Topbar />
      </header>
      <div className="w-full flex my-16 h-full">
        <div className="hidden md:block md:basis-1/5 md:border md:relative md:h-full md:bg-blue">
          <div className="bg-blue-300 fixed top-0 left-0 w-1/5 h-full py-16">
            <Sidebar />
          </div>
        </div>
        <main className="basis-4/5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
