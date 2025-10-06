import { Link, useNavigate } from "react-router-dom";
import Header from "../ui/Header";
import AuthFooter from "../ui/AuthFooter";

function PageNotFound() {
  const navigate = useNavigate();

  function GoBackLink() {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }
  return (
    <>
      <Header />
      <div className="flex items-center justify-center  flex-col min-h-[100vh]">
        <img src="/images/404.jpg" alt="404 image" className="md:w-[40%]" />
        <h1 className="text-3xl md:text-4xl p-5 font-bold text-stone-800">
          This page isn't availabe
        </h1>
        <p className="font-[Poppins] text-stone-700 text-sm text-center">
          The link you follow might be broken, or the page might be removed
        </p>
        <div className="mt-5 mb-10">
          <button onClick={GoBackLink} className="text-purple-700 ">
            Go to the previous page
          </button>
          <span> . </span>
          <Link to="/" className="text-purple-700 ">
            Go home
          </Link>
          <span> . </span>
          <Link to="/" className="text-purple-700 bottom-0">
            Privacy Policy
          </Link>
        </div>
        <AuthFooter />
      </div>
    </>
  );
}

export default PageNotFound;
