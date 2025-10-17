import { FaArrowRight } from "react-icons/fa";
import { HiX } from "react-icons/hi";

import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ClipboardList,
  PlusSquare,
  MessageSquare,
  Store,
  Settings,
  LogIn,
} from "lucide-react";
import { Home, ShoppingCart, Users } from "lucide-react";
import Logout from "./Logout";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate()
  
  const auth = true;
  const vendor = true;
  const buyer = false;

  const vendorLinks = [
    {
      name: "Dashboard",
      path: "/vendor/dashboard",
      icon: <LayoutDashboard className="w-6 h-6" />,
    },
    {
      name: "My Products",
      path: "/vendor/products",
      icon: <Package className="w-6 h-6" />,
    },
    {
      name: "Orders",
      path: "/vendor/orders",
      icon: <ClipboardList className="w-6 h-6" />,
    },
    {
      name: "Add Product",
      path: "/vendor/add-product",
      icon: <PlusSquare className="w-6 h-6" />,
    },

    {
      name: "Settings",
      path: "/vendor/settings",
      icon: <Settings className="w-6 h-6" />,
    },
  ];

  const buyerLinks = [
    {
      name: "Home",
      path: "/",
      icon: <Home className="w-6 h-6" />,
    },
    {
      name: "Cart",
      path: "/cart",
      icon: <ShoppingCart className="w-6 h-6" />,
    },
    {
      name: "Shop",
      path: "/shop",
      icon: <Store className="w-6 h-6" />,
    },
    {
      name: "Vendors",
      path: "/vendors",
      icon: <Users className="w-6 h-6" />,
    },
    {
      name: "My Orders",
      path: "/orders",
      icon: <ClipboardList className="w-6 h-6" />,
    },
  ];

  const supports = [
    {
      name: "FAQ",
      path: "/faq",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
  ];
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 scroll transform transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <img src="/logo.png" className="h-10" />

        <button
          onClick={() => setSidebarOpen(false)}
          className="text-2xl text-gray-700 hover:text-purple-700"
        >
          <HiX />
        </button>
      </div>

      {/* Sidebar Links */}
      <nav className="flex flex-col gap-4 p-4 text-gray-700">
        {buyer &&
          buyerLinks.map((buyerLink) => (
            <NavLink
              onClick={() => setSidebarOpen(false)}
              to={buyerLink.path}
              className={({ isActive }) =>
                `relative flex items-center gap-2 w-full rounded-sm  px-2 py-2 font-medium transition ${
                  isActive
                    ? "text-purple-900 bg-purple-100"
                    : "text-stone-800 hover:text-purple-900 hover:bg-purple-100"
                }`
              }
            >
              {buyerLink.icon}
              <span>{buyerLink.name}</span>
            </NavLink>
          ))}

        {vendor &&
          vendorLinks.map((vendorItem) => (
            <NavLink
              onClick={() => setSidebarOpen(false)}
              to={vendorItem.path}
              className={({ isActive }) =>
                `relative flex items-center gap-2 w-full rounded-sm  px-2 py-2 font-medium transition ${
                  isActive
                    ? "text-purple-900 bg-purple-100"
                    : "text-stone-800 hover:text-purple-900 hover:bg-purple-100"
                }`
              }
            >
              {vendorItem.icon}
              <span>{vendorItem.name}</span>
            </NavLink>
          ))}

        <div className="border-b border-gray-200 w-full mt-10"></div>

        {supports.map((support) => (
          <NavLink
            onClick={() => setSidebarOpen(false)}
            className="hover:text-purple-700 px-2 py-2 active:text-purple-700 hover:bg-purple-100 rounded-sm font-medium flex  justify-between items-center gap-3"
          >
            <span>{support.name}</span>
            <FaArrowRight />
          </NavLink>
        ))}
      </nav>
      <div className="fixed bottom-0 p-5 flex items-center gap-3 bg-slate-100 w-full">
        {auth && <Logout />}
        {!auth && (
          <>
            <span className="text-gray-700 font-bold">Login</span>
            <button onClick={() => navigate("/login")} className="bg-purple-50 hover:bg-purple-200 text-stone-800 px-3 py-2 rounded-full flex items-center">
              <LogIn className="text-lg" />
            </button>{" "}
          </>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
