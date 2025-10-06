import { useState } from "react";
import { Link } from "react-router-dom";
import FormRow from "../ui/FormRow";
import AuthFooter from "./AuthFooter";

function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function onSubmit(e) {
    e.preventDefault();
    console.log(email + password);

    setEmail("");
    setPassword("");
  }
  return (
    <div
      className="relative z-10 flex flex-col items-center text-stone-600 bg-white/90 md:bg-white/95
             py-6 px-6 md:py-10 md:px-12 
             rounded-none md:rounded-2xl 
             w-full h-screen md:h-auto 
             md:w-[500px] lg:w-[600px] xl:w-[700px] shadow-lg"
    >
      <img src="/android-chrome-192x192.png" alt="Logo" className="mb-5" />
      <form className="m-0 p-0">
        <h1 className="md:text-4xl font-montserrat text-center text-2xl font-bold mb-7 font-[Poppins] text-purple-900">
          Login to get started
        </h1>

        <FormRow label="Email address" id="email" error="">
          <input
            className="px-4 py-2 border-gray-400 rounded-md border md:border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            autoComplete="username"
            E
          />
        </FormRow>

        <FormRow label="Password" id="password" error="">
          <input
            className="px-4 py-2 border-gray-400 rounded-md border md:border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </FormRow>

        <div className="flex flex-col gap-3 mt-5 w-full sm:max-w-[400px]">
          <button
            type="submit"
            className="w-full cursor-pointer bg-purple-900 hover:bg-purple-800 text-white py-2 rounded-md font-semibold transition-all"
          >
            Create Account
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center">
          <p>
            <span>Don't have an account? </span>
            <Link to="/signup" className="text-blue-800 underline">
              Sign-up for free
            </Link>
          </p>
        </div>

        <div className="w-[90%] mx-auto border-b border-stone-300 mt-10"></div>

        <AuthFooter />
      </form>
    </div>
  );
}

export default LoginForm;
