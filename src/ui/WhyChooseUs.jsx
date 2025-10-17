import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaAward, FaTruckFast } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";

function WhyChooseUs() {
  const whyChooseUsArray = [
    {
      icon: <FaTruckFast />,
      name: "Fast Delivery",
      description: "   Lightning-fast delivery to your doorstep",
    },
    {
      icon: <IoIosPricetags />,
      name: "Best Prices",
      description:
        " Competitive prices for the highest quality products for students",
    },
    {
      icon: <FaAward />,
      name: "Trusted Brand",
      description: " Trusted by thousands of satisfied students",
    },
    {
      icon: <AiFillSafetyCertificate />,
      name: "Secure Shopping",
      description: "Safe and secure online shopping experience",
    },
  ];
  return (
    <section className="flex items-center justify-center flex-col mt-5 text-stone-900 px-5">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-gray-900">
        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">
          FUTMxMart
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 text-center">
        {whyChooseUsArray.map((obj) => (
          <div
            key={obj.name}
            className="flex flex-col items-center hover:translate-y-[-5px] bg-gray-200 p-4 rounded-xl  hover:shadow-md transition-all duration-100 "
          >
            <span className="bg-purple-700 text-3xl mb-3 text-white p-6 rounded-full">
              {obj.icon}
            </span>
            <span>
              <h2 className="font-semibold text-2xl mb-1 text-gray-700">
                {obj.name}
              </h2>
              <p className="text-gray-600 text-[16px]">{obj.description}</p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
