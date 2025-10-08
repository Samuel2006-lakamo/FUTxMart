// import AuthBackground from "../ui/AuthBackground";
// import SigninForm from "../ui/SigninForm";

// function SignUp() {
//   return (
//     <AuthBackground>
//       <SigninForm />
//     </AuthBackground>
//   );
// }

// export default SignUp;
import { Link } from "react-router-dom";
import AuthFooter from "../ui/AuthFooter";

function SignUp() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-100 font-[Poppins]">
      {/* Left: Image Section */}
      <div className="md:w-1/2 w-full h-[250px] md:h-auto relative">
        <img
          src="/images/hero4.jpg"
          alt="Sign up"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-800/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Join FUTMxMart
          </h1>
          <p className="text-sm md:text-base text-gray-200">
            Create your account and start exploring student vendors and deals.
          </p>
        </div>
      </div>

      {/* Right: Form Section */}
      <div className="md:w-1/2 w-full  flex items-center justify-center flex-col p-6 md:p-12 bg-white">
        <form className="w-full mb-5 max-w-md space-y-6 shadow-lg p-6 rounded-xl bg-slate-50">
          <h2 className="text-2xl font-bold text-center text-purple-800">
            Create account
          </h2>

          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4  py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <input
              type="text"
              placeholder="WhatsApp number"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <select
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            >
              <option value="">Select Account Type</option>
              <option value="buyer">Buyer</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-900 cursor-pointer hover:bg-purple-800 text-white py-2 rounded-md font-semibold transition-all"
          >
            Create Account
          </button>
          <p className="text-[10px] text-center text-gray-500">
            By clicking Sign Up, you agree to our{" "}
            <span className="text-blue-800 hover:underline cursor-pointer">
              Terms
            </span>
            ,
            <span className="text-blue-800  hover:underline cursor-pointer">
              {" "}
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="text-blue-800  hover:underline cursor-pointer">
              Cookies Policy
            </span>
            . You may receive SMS notifications from us and can opt out at any
            time.
          </p>
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-700 hover:underline">
              Sign In
            </Link>
          </p>
        </form>

        <AuthFooter />
      </div>
    </div>
  );
}

export default SignUp;
