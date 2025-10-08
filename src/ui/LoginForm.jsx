import { useState } from "react";
import { Link } from "react-router-dom";
import FormRow from "../ui/FormRow";
import AuthFooter from "./AuthFooter";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log(email, password);

    setEmail("");
    setPassword("");
  }

  return (
    <div
      className="relative z-10 flex flex-col items-center text-stone-600 bg-white/90 md:bg-white/95
      py-8 px-6 md:py-12 md:px-12 
      rounded-none md:rounded-2xl 
      w-full h-screen md:h-auto 
      md:w-[450px] lg:w-[520px] shadow-lg"
    >
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="/logo1.png"
          alt="FUTxMart logo"
          className="h-20 w-auto mb-2 transition-transform hover:scale-105"
        />
        <h1
          className="text-3xl font-semibold text-purple-900"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          FUTM<span className="text-purple-700 font-bold">x</span>Mart
        </h1>
      </div>

      {/* Form Section */}
      <form className="w-full flex flex-col items-center" onSubmit={onSubmit}>
        <h2 className="md:text-3xl text-center text-2xl font-bold mb-6 text-stone-900 font-[Poppins]">
          Login to get started
        </h2>

        <div className="w-full sm:max-w-[400px] space-y-4">
          <FormRow label="Email address" id="email">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              autoComplete="username"
              required
            />
          </FormRow>

          <FormRow label="Password" id="password">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              autoComplete="current-password"
              required
            />
          </FormRow>

          <button
            type="submit"
            className="w-full bg-purple-900 hover:bg-purple-800 text-white py-2 rounded-md font-semibold transition-all mt-4"
          >
            Login
          </button>
        </div>

        {/* Sign-up link */}
        <div className="mt-5 text-center">
          <p>
            <span>Don't have an account? </span>
            <Link to="/signup" className="text-blue-800 underline font-medium">
              Sign up for free
            </Link>
          </p>
        </div>

        {/* Divider */}
        <div className="w-[90%] mx-auto border-b border-stone-300 mt-10 mb-4"></div>

        <AuthFooter />
      </form>
    </div>
  );
}

export default LoginForm;
