import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header
      className="flex shadow-sm w-[100vw] z-1000 pr-3 pl-2 md:pr-7 md:pl-7 top-0 right-0 left-0 items-center justify-between h-15 fixed bg-white"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      <div>
        <Link to="/">
          {" "}
          <img
            src="  /logo.png-removebg-preview.png"
            className="w-35 sm:40 md:45"
            alt=""
          />
        </Link>
      </div>
      {/* <input
          type="searchs"
          placeholder="search"
          class="border-gray-700 border-1 p-3  md:grow-0"
        /> */}

      <div className="flex justify-between md:gap-6 gap-2">
        <button
          onClick={() => navigate("/login")}
          className="hover:bg-purple-100 rounded-full text-1 border-0 font-medium text-stone-800 bg-none pl-3.5 pr-3.5 pt-2 pb-2  "
        >
          Log in
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="border-gray-300 font-medium text-1 border-0 hover:bg-purple-200 bg-purple-50  text-stone-800 pl-3 pr-3 rounded-full :hover"
        >
          Sign up
        </button>
      </div>
    </header>
  );
}

export default Header;
