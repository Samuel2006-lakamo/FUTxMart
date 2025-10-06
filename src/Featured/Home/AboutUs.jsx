function AboutUs() {
  return (
    <section className="bg-slate-50 py-12 text-center px-4 md:px-16">
      <h2 className="text-3xl font-bold text-stone-800 font-[montserrat] mb-4 lg:text-5xl">
        About Us
      </h2>
      <p className="text-gray-500 max-w-4xl lg:text-[18px] indent-8 mx-auto text-[16px]/8 font-[poppins] ">
        FUTxMart is an online marketplace built exclusively for FUT Minna
        students — connecting buyers and campus vendors in one easy-to-use
        platform. Our goal is to support student entrepreneurs while making
        campus shopping faster, safer, and more affordable.
      </p>
      <div className="flex gap-10 flex-col md:flex-row items-center justify-center">
        <span className="flex gap-2 flex-col p-10">
          <h1 className="font-extrabold text-purple-700 text-5xl">1000+</h1>
          <p className="text-[18px] text-gray-500">Happy customers</p>
        </span>
        <span className="flex gap-2 flex-col p-10">
          <h1 className="font-extrabold text-purple-700 text-5xl">500+</h1>
          <p className="text-[18px] text-gray-500">Products</p>
        </span>
        <span className="flex gap-2 flex-col p-10">
          <h1 className="font-extrabold text-purple-700 text-5xl">24/7</h1>
          <p className="text-[18px] text-gray-500">Support</p>
        </span>
      </div>
      <button className="inline-block mt-6 font-semibold bg-purple-800 hover:bg-purple-700 text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
        Learn More
      </button>
    </section>
  );
}

export default AboutUs;
