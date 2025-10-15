
import { HiPlus, HiUserAdd } from "react-icons/hi";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function VendorProducts() {

  return (
    <div className="p-6 bg-white rounded-xl shadow-md mt-20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold  text-gray-700">
          Vendor Products
        </h2>
        <button className="flex items-center bg-purple-800 text-white py-1 px-2 rounded-2xl gap-1 cursor-pointer hover:bg-purple-700 ">
          <span>
            <HiPlus />
          </span>
          <span>Add</span>{" "}
        </button>
      </div>

      <TableHeader />
      <TableRow />
    </div>
  );
}

export default VendorProducts;