import FormRow from "./FormRow";

function SigninForm() {
  return (
    <div
      className="relative z-10 flex flex-col items-center text-stone-600 bg-white/85 
             py-6 px-6 md:py-10 md:px-12 
             rounded-none md:rounded-2xl 
             w-full h-screen md:h-auto 
             md:w-[500px] lg:w-[600px] xl:w-[700px] shadow-lg"
    >
      <img src="/android-chrome-192x192.png" alt="Logo" className="mb-5" />
      <div className="border-1 border-stone-600 flex py-2 px-5 flex-col items-center justify-center">
        <div className="absolute inset-0 bg-black/50 "></div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">Create a new account</h1>
          <span className="text-center w-auto flex text-sm">
            It's quick and easy
          </span>
        </div>

        <form className="border-t border-stone-400 pt-5 mt-5">
          <div className="flex gap-3">
            <input
              type="text"
              className="border-1 m-0 border-stone-400 py-2.5 px-5 text-[15px] rounded-md outline-none "
              placeholder="First name"
            />
            <input
              type="text"
              placeholder="Surname"
              className="border-1 m-0 border-stone-400 py-2.5 px-5 text-[15px] rounded-md outline-none "
            />
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
}

export default SigninForm;
