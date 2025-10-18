import { LogOut } from "lucide-react";

function Logout() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 text-red-700">
      <LogOut />
      <span className="hidden md:block">Logout</span>
    </button>
  );
}

export default Logout;
