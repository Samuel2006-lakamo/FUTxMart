function SecurityTab() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Security Settings</h3>
      <form className="space-y-4 max-w-lg">
        <div>
          <label className="block text-sm font-medium">Current Password</label>
          <input
            type="password"
            className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">New Password</label>
          <input
            type="password"
            className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <button className="bg-purple-800 hover:bg-purple-700 text-white px-5 py-2 rounded-md">
          Update Password
        </button>
      </form>
    </div>
  );
}
export default SecurityTab;