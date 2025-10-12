function StoreTab() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Store Information</h3>
      <form className="space-y-4 max-w-lg">
        <div>
          <label className="block text-sm font-medium">Store Name</label>
          <input
            type="text"
            placeholder="FUTxMart Hub"
            className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Store Description</label>
          <textarea
            className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-600"
            placeholder="Describe your store..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Store Banner</label>
          <input
            type="file"
            className="mt-1 w-full border rounded-md px-3 py-2"
          />
        </div>
        <button className="bg-purple-800 hover:bg-purple-700 text-white px-5 py-2 rounded-md">
          Update Store
        </button>
      </form>
    </div>
  );
}
export default StoreTab;