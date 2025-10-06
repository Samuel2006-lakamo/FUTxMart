import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaAward, FaTruckFast } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";

function WhyChooseUs() {
  return (
    <section className="flex items-center justify-center flex-col mt-5 text-stone-900 px-5">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[montserrat] text-center">
        Why choose Us
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 text-center">
        <div className="flex hover:translate-y-[-5px] flex-col items-center p-4 bg-purple-50 rounded-xl hover:shadow-md transition-all duration-100 ">
          <span className="bg-purple-700 text-3xl mb-3 text-white p-6 rounded-full">
            <FaTruckFast />
          </span>
          <span>
            <h2 className="font-semibold text-2xl mb-1 text-gray-700">
              Fast Delivery
            </h2>
            <p className="text-gray-600 text-[16px] px-3">
              Lightning-fast delivery to your doorstep
            </p>
          </span>
        </div>

        <div className="flex flex-col items-center hover:translate-y-[-5px] bg-purple-50 p-4  rounded-xl  hover:shadow-md transition-all duration-100 ">
          <span className="bg-purple-700 text-3xl mb-3 text-white p-6 rounded-full">
            <IoIosPricetags />
          </span>
          <span>
            <h2 className="font-semibold text-2xl mb-1 text-gray-700">
              Best Prices
            </h2>
            <p className="text-gray-600 text-[16px]">
              Competitive prices for the highest quality products for students
            </p>
          </span>
        </div>

        <div className="flex flex-col items-center hover:translate-y-[-5px] bg-purple-50 p-4 rounded-xl  hover:shadow-md transition-all duration-100 ">
          <span className="bg-purple-700 text-3xl mb-3 text-white p-6 rounded-full">
            <FaAward />
          </span>
          <span>
            <h2 className="font-semibold text-2xl mb-1 text-gray-700">
              Trusted Brand
            </h2>
            <p className="text-gray-600 text-[16px]">
              Trusted by thousands of satisfied students
            </p>
          </span>
        </div>

        <div className="flex flex-col items-center p-4 hover:translate-y-[-5px] bg-purple-50  rounded-xl  hover:shadow-md transition-all duration-100 ">
          <span className="bg-purple-700 text-3xl mb-3 text-white p-6 rounded-full">
            <AiFillSafetyCertificate />
          </span>
          <span>
            <h2 className="font-semibold text-2xl mb-1 text-gray-700">
              Secure Shopping
            </h2>
            <p className="text-gray-600 text-[16px]">
              Safe and secure online shopping experience
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
