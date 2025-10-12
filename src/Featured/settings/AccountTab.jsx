import { LogOut, Trash2 } from "lucide-react";

function AccountTab() {
  return (
    <div className="max-w-lg">
      <h3 className="text-xl font-semibold mb-4">Account Management</h3>

      <button className="flex items-center gap-2 text-red-600 font-medium hover:text-red-700">
        <Trash2 size={18} /> Delete Account
      </button>

      <div className="mt-5">
        <button className="flex items-center gap-2 text-gray-700 hover:text-purple-800">
          <LogOut size={18} /> Logout from all devices
        </button>
      </div>
    </div>
  );
}
export default AccountTab;