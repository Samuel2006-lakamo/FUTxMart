import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

function HeaderLeft({ setSidebarOpen }) {
  return (
    <div className="flex items-center gap-3">
      {/* Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="text-3xl text-gray-800 hover:text-purple-700 transition"
      >
        <HiMenuAlt3 />
      </button>

      {/* Logo + Brand Name */}
      <Link to="/" className="flex items-center gap-1 md:gap-2 group">
        <img
          src="/logo.jpg"
          alt="FUTxMart logo"
          className=" h-10 md:h-14  py-1 px-1 border-2 border-transparent hover:border-purple-800 rounded-lg transition-all duration-200 group-hover:scale-105"
        />

        {/* <span
          className="md:text-3xl text-1xl font-semibold tracking-tight text-gray-900"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          FUTM<span className="text-purple-700 font-bold">x</span>
          <span className="text-gray-800 font-medium">Mart</span>
        </span> */}
      </Link>
    </div>
  );
}

export default HeaderLeft;
