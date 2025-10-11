import { useState } from "react";

import Sidebar from "./Sidebar";
import HeaderLeft from "./HeaderLeft";
import Search from "./Search";
import HeaderMenus from "./HeaderMenus";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>

      {/* Header */}
      <header
        className="flex shadow-sm w-full fixed top-0 left-0 right-0 z-50 bg-white items-center justify-between px-3 md:px-7 h-16"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <HeaderLeft setSidebarOpen={setSidebarOpen} />

        <div className="relative hidden sm:block w-48 md:w-72">
          <Search />
        </div>

        <HeaderMenus setShowSearch={setShowSearch} showSearch={showSearch} />
      </header>

      {showSearch && (
        <div className="md:hidden pt-3 fixed top-16 left-0 right-0 bg-white z-40 px-3 pb-2 shadow-md animate-slideDown">
          <div className="relative">
            <Search />
          </div>
        </div>
      )}
      {sidebarOpen && (
        <>
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black opacity-50 z-40"
          ></div>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </>
      )}
    </>
  );
}

export default Header;
