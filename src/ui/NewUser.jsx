import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

function NewUser() {
  const navigate = useNavigate();
  return (
    <section
      className="flex items-center flex-col border-b-1 border-t-1
     border-slate-200 mt-10 mb-3 p-5"
    >
      <h1 className="text-4xl md:text-5xl font-bold  text-center text-gray-900">
        Ready to start shopping?
      </h1>
      <p className="text-slate-500 font-medium text-center text-[15px] p-3">
        Join thousand of student already enjoying FUTMxMart
      </p>
      <Button
        variant={"primary"}
        size={"sm"}
        onClick={() => navigate("/login")}
        className="px-10 py-3 rounded-full text-sm transition-all hover:scale-105  shadow-lg"
      >
        Sign in
      </Button>
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
