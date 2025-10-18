import { useState } from "react";
import { HiOutlineClipboardList } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";
import AccountDropDown from "./AccountDropDown";
import Modal from "./Modal";
import AddProductForm from "../Featured/Vendor/AddProductForm";


function HeaderMenus({ setShowSearch, showSearch }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const auth = true;
  const buyer = true;

  const vendor = false;
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-2 md:gap-5">
      {buyer && (
        <button
          className="sm:hidden p-2 rounded-full hover:bg-purple-100"
          onClick={() => setShowSearch(!showSearch)}
        >
          <IoSearchOutline className="w-5 h-5 text-gray-600" />
        </button>
      )}

      {buyer && (
        <button
          onClick={() => navigate("/cart")}
          className="relative flex items-center hover:text-purple-900 gap-2 hover:bg-purple-100 cursor-pointer rounded-full px-2 py-2 text-stone-600 font-extralight transition"
        >
          <span className="relative">
            <IoCartOutline className="text-3xl text-gray-500" />
            <span className="absolute -top-2 -right-2 text-[12px] text-white bg-purple-800 px-1.5 py-[1px] font-bold rounded-full border-2 border-white">
              3
            </span>
          </span>
          <span className="text-md font-medium hidden sm:block">Cart</span>
        </button>
      )}

      {vendor && (
        <div className="flex items-center gap-2 md:gap-5 relative">
          <Modal>
            <Modal.Open opens="addProduct">
              <button
                onClick={() => navigate("/vendor/add-product")}
                className="relative flex items-center hover:text-purple-900 gap-2 hover:bg-purple-100 cursor-pointer rounded-full px-2 py-2 text-stone-500 font-medium transition"
              >
                <IoMdAdd className="text-2xl" />
                <span className="text-md font-medium hidden sm:block">Add</span>
              </button>
            </Modal.Open>
            <Modal.Window name="addProduct">
              <AddProductForm />
            </Modal.Window>
          </Modal>
          {/* Orders */}
          <button
            onClick={() => navigate("/vendor/orders")}
            className="relative flex items-center hover:text-purple-900 gap-2 hover:bg-purple-100 cursor-pointer rounded-full px-2 py-2 text-stone-500 font-medium transition"
          >
            <HiOutlineClipboardList className="text-2xl" />
            <span className="text-md font-medium hidden sm:block">Orders</span>
          </button>

          {/* Profile + Dropdown */}
          <div className="relative">
            <img
              onClick={() => setShowDropdown(!showDropdown)}
              onMouseEnter={() => setShowDropdown(!showDropdown)}
           
              src="/images/default-user.jpg"
              className="w-8 h-8 rounded-full object-cover bg-purple-700 border border-purple-600 cursor-pointer"
              alt="Vendor profile"
            />

            {showDropdown && (
              <AccountDropDown setShowDropdown={setShowDropdown} />
            )}
          </div>
        </div>
      )}

      {/* Logout */}
      {auth && buyer && <Logout />}
    </div>
  );
}

export default HeaderMenus;
