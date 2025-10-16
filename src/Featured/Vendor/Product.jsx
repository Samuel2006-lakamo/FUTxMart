
import { HiPlus, HiUserAdd } from "react-icons/hi";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import AddProduct from "./AddProduct";


function VendorProducts() {

  return (
    <div className="p-6 bg-white rounded-xl shadow-md mt-20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold  text-gray-700">
          Vendor Products
        </h2>
      <AddProduct/>
      </div>

      <TableHeader />
      <TableRow />
    </div>
  );
}

export default VendorProducts;