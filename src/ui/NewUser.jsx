import { Link, useNavigate } from "react-router-dom";

function NewUser() {
  const navigate = useNavigate();
  return (
    <section
      className="flex items-center flex-col border-b-1 border-t-1
     border-stone-300 mt-10 mb-3 p-5"
    >
      <h1 className="text-2xl font-extrabold text-stone-800 font-sans p-5 text-center">
        Ready to start shopping?
      </h1>
      <button
        onClick={() => navigate("/login")}
        className="bg-purple-800 text-white font-light hover:bg-purple-700 px-10 py-3 rounded-full text-sm transition-all hover:scale-105  shadow-lg"
      >
        Sign in
      </button>
      <div className="text-[13px] pt-1.5 font-[Poppins]">
        <span className="">New customer? </span>
        <Link
          to="/signup"
          className="underline text-blue-700  transition-all hover:scale-105 "
        >
          Start here
        </Link>
      </div>
    </section>
  );
}

export default NewUser;
