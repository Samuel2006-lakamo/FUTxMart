import { BiLogOut } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function AccountDropDown({ setShowDropdown }) {
  const navigate = useNavigate();
  return (
    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md z-50 animate-fadeIn">
      <button
        onClick={() => {
          navigate("/vendor/profile");
          setShowDropdown(false);
        }}
        className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
      >
        <IoSettingsOutline />
        Settings
      </button>

      <button
        onClick={() => {
          // handle logout logic
          setShowDropdown(false);
        }}
        className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 text-red-600"
      >
        <BiLogOut />
        Logout
      </button>
    </div>
  );
}

export default AccountDropDown;
