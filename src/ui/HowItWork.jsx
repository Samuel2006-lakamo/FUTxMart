import  { useState } from "react";
import {
  UserPlus,
  Image as ImageIcon,
  MessageSquare,
  DollarSign,
  Store,
  Package,
  TrendingUp,
  CheckCircle,
  PhoneCall,
  ContactIcon,
  ContactRound,
} from "lucide-react";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("seller");

  const sellerSteps = [
    {
      id: 1,
      icon: <UserPlus className="w-6 h-6" />,
      title: "Sign Up & Verify",
      desc: "Create your account with your campus email. Verify your student status using your student ID.",
    },
    {
      id: 2,
      icon: <ImageIcon className="w-6 h-6" />,
      title: "List Your Items",
      desc: "Upload product images, add descriptions, set your price, and choose a pickup location.",
    },
    {
      id: 3,
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Connect & Negotiate",
      desc: "Buyers contact you directly to chat, negotiate, and arrange safe campus meetups.",
    },
    {
      id: 4,
      icon: <DollarSign className="w-6 h-6" />,
      title: "Meet & Exchange",
      desc: "Meet, complete the transaction, and get paid instantly — no middleman.",
    },
  ];

  const buyerSteps = [
    {
      id: 1,
      icon: <Store className="w-6 h-6" />,
      title: "Register as Buyer",
      desc: "Apply to become a buyer on FUTMxMart. Approval usually takes 0 hours.",
    },
    {
      id: 2,
      icon: <Package className="w-6 h-6" />,
      title: "Brownse the store",
      desc: "Search through the available product, and select the ones you want.",
    },
    {
      id: 3,
      icon: <ContactRound className="w-6 h-6" />,
      title: "Reach out to vendors",
      desc: "Reach out to the vendors personnally via whatsapp number, just a click away.",
    },
    {
      id: 4,
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Make pickup and payment",
      desc: "Handle delivery or pickup and make instant payment once confirmed.",
    },
  ];

  const steps = activeTab === "seller" ? sellerSteps : buyerSteps;

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6  text-gray-900">
          How It{" "} 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">
            Works
          </span>
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          Simple steps to start selling or buying on FUTMxMart.
        </p>

        {/* Toggle Tabs */}
        <div className="flex justify-center gap-3 mb-14">
          <button
            onClick={() => setActiveTab("seller")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "seller"
                ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-md"
                : "bg-white border text-gray-600 hover:text-purple-600"
            }`}
          >
            For Sellers
          </button>
          <button
            onClick={() => setActiveTab("vendor")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "vendor"
                ? "bg-gradient-to-r from-teal-500 to-purple-600 text-white shadow-md"
                : "bg-white border text-gray-600 hover:text-purple-600"
            }`}
          >
            For Buyers
          </button>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border border-purple-100"
            >
              <div className="relative mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-teal-500 p-4 rounded-full text-white shadow-md">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-black w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold">
                  {String(step.id).padStart(2, "0")}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
