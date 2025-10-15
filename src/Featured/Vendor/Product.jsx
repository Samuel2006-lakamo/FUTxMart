
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function VendorProducts() {

  return (
    <div className="p-6 bg-white rounded-xl shadow-md mt-20">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Vendor Products</h2>
      
    <TableHeader/>
<TableRow/>
     
    </div>
  );
}

export default VendorProducts;