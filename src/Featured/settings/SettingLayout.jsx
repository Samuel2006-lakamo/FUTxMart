import { useState } from "react";
import Profile from "./Profile";
import Security from "./Security";

import Notifications from "./Notification";
import { HiArrowLeft, HiTrash } from "react-icons/hi2";
import ShopDetails from "./ShopDetails";

const tabs = [
  { name: "Profile", component: <Profile /> },
  { name: "Security", component: <Security /> },

  { name: "Notifications", component: <Notifications /> },
  { name: "ShopDetails", component: <ShopDetails /> },
];

export default function Setting() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [mobileView, setMobileView] = useState(false);

  const currentTab = tabs.find((tab) => tab.name === activeTab);

  return (
    <div className="min-h-screen overflow-hidden bg-brand-accent font-sans">
      {/* Header (Mobile) */}
      {mobileView && (
        <div className="flex items-center gap-3 p-4 bg-brand mt-15 text-white">
          <button
            onClick={() => setMobileView(false)}
            className="text-lg font-medium hover:border-2 border-white rounded-full p-2"
          >
            <HiArrowLeft />
          </button>
          <h2 className="text-lg font-semibold">{activeTab}</h2>
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        {/* Sidebar (Desktop Only) */}
        <aside className="hidden md:flex md:flex-col w-64 bg-white border-r shadow-sm  relative border-stone-200 mt-15 h-auto">
          <h1 className="text-2xl font-semibold text-brand px-6 py-4">
            Settings
          </h1>
          <nav className="flex flex-col gap-2 mt-4">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`text-left px-6 py-2  transition-all duration-200 ${
                  activeTab === tab.name
                    ? "bg-brand text-white"
                    : "text-gray-700 hover:bg-brand-accent"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
          <div className="absolute w-full bottom-0 p-4 bg-purple-200 flex items-center gap-3">
            <button className="text-red-700 ">Delete account</button><span><HiTrash/></span>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 md:p-6 bg-slate-100  ">
          {/* Mobile view: show list or tab content */}
          {!mobileView ? (
            <div className="md:hidden bg-brand-white font mt-15 py-6 px-4">
              <h2 className="text-xl bg-brand-white font-semibold mb-4">
                Settings
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => {
                      setActiveTab(tab.name);
                      setMobileView(true);
                    }}
                    className="p-4 hover:translate-y-[-2px] transition-all duration-75 bg-brand-accent text-brand font-medium rounded-lg"
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="md:hidden">{currentTab.component}</div>
          )}

          {/* Desktop view: render tab content */}
          <div className="hidden md:block">{currentTab.component}</div>
        </main>
      </div>
    </div>
  );
}
