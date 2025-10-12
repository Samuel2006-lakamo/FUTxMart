import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import ProfileSection from "./ProfileSection";
import SecuritySection from "./SecuritySection";
import StoreSection from "./StoreSection";
import NotificationSection from "./NotificationSection";
import PaymentSection from "./PaymentSection";

function VendorSettings() {
  const [activeSection, setActiveSection] = useState(null);

  const handleBack = () => setActiveSection(null);

  const sections = {
    profile: <ProfileSection />,
    security: <SecuritySection />,
    store: <StoreSection />,
    notifications: <NotificationSection />,
    payment: <PaymentSection />,
  };

  const sectionTitles = {
    profile: "Profile",
    security: "Security",
    store: "Store Info",
    notifications: "Notifications",
    payment: "Payment Settings",
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar (desktop only) */}
      <aside className="hidden md:block w-1/4 border-r border-gray-200 p-4">
        <h2 className="text-xl font-semibold mb-4 text-purple-700">Settings</h2>
        <ul className="space-y-2">
          {Object.keys(sectionTitles).map((id) => (
            <li
              key={id}
              onClick={() => setActiveSection(id)}
              className={`cursor-pointer rounded-lg px-3 py-2 hover:bg-purple-100 ${
                activeSection === id ? "bg-purple-50 font-medium" : ""
              }`}
            >
              {sectionTitles[id]}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-5">
        {/* Mobile view */}
        <div className="block md:hidden">
          {!activeSection ? (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">
                Settings
              </h2>
              <ul className="space-y-3">
                {Object.keys(sectionTitles).map((id) => (
                  <li
                    key={id}
                    onClick={() => setActiveSection(id)}
                    className="flex justify-between items-center border rounded-xl px-4 py-3 hover:bg-purple-50 cursor-pointer"
                  >
                    <span className="text-gray-700">{sectionTitles[id]}</span>
                    <span className="text-purple-600">&gt;</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <button
                onClick={handleBack}
                className="flex items-center text-purple-700 mb-4"
              >
                <ArrowLeft className="mr-2" />
                Back
              </button>
              <h2 className="text-xl font-semibold mb-4">
                {sectionTitles[activeSection]}
              </h2>
              {sections[activeSection]}
            </div>
          )}
        </div>

        {/* Desktop view */}
        <div className="hidden md:block">
          {activeSection ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {sectionTitles[activeSection]}
              </h2>
              {sections[activeSection]}
            </div>
          ) : (
            <div className="text-gray-500">
              Select a section from the sidebar.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
export default VendorSettings