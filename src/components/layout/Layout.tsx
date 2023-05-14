import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import ReactDOM from "react-dom";
import Drawer from "./Drawer";
import { useState } from "react";

const Layout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const openDrawerHandler = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawerHandler = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="w-full min-h-screen border-2 bg-slate-200">
        <header className="w-full fixed top-0 left-0 z-20 h-16 bg-[#1d6b70] text-white uppercase text-lg font-bold">
          <Topbar onOpen={openDrawerHandler} />
        </header>
        <div className="w-full flex my-16 h-full">
          <div className="hidden md:block md:basis-1/5 md:border md:relative md:h-full md:bg-blue">
            <div className="bg-white shadow-xl fixed top-0 left-0 w-1/5 h-full py-16">
              <Sidebar />
            </div>
          </div>
          <main className="basis-full  min-h-full md:basis-4/5">
            <Outlet />
          </main>
        </div>
      </div>
      {isDrawerOpen &&
        ReactDOM.createPortal(
          <Drawer onClose={closeDrawerHandler} />,
          document.getElementById("overlay-root")!
        )}
    </>
  );
};

export default Layout;
