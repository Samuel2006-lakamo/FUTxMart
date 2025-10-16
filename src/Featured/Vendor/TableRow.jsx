
import { useState } from "react";

import Row from "./Row";
import { productsData } from "../../Utils/VendorsProductList";

function TableRow() {

      const [products, setProducts] = useState(productsData);
const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEdit = (id) => {
    alert("Edit product with ID:" `${id}`);
  };
    const rowColors = ["bg-gray-50", "bg-green-50", ];
  return (
    <>
      {products.map((product, index) => (<Row  rowColors={rowColors}  key={product.id} index={index}
         product={product} handleEdit={handleEdit} handleDelete={handleDelete}/>
       
      ))}
    </>
  );
}

export default TableRow;

