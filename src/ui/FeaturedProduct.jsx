import { useFetchData } from "../hooks/useFetchProduct";

import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";



function FeaturedProducts() {
    const {isFeatured, products,isLoading} = useFetchData("products", "http://localhost:5000/products");
    const navigate = useNavigate()
     console.log(isFeatured,products,isLoading);
  if (isLoading) return <p>Loading featured products...</p>;
  

  return (
    <section className="featured-products px-6 py-10 flex flex-col items-center ">
      <h2 className="text-2xl text-gray-800 md:text-4xl font-bold mb-6 ">
        Featured{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">
          Products
        </span>
      </h2>

      <div className="grid sm:grid-cols-2 items-center justify-center md:grid-cols-3  gap-6 w-full">
        {isFeatured.map((product) => (
          <div
            key={product.id}
            className="border border-slate-200 rounded-2xl shadow-sm p-4 hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3
              className="text-lg font-semibold text-purple-800 cursor-pointer hover:underline"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 mb-1">{product.category}</p>
            {/* <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {product.description || "No description available."}
            </p> */}

            <div className="flex items-center gap-2 mb-4">
              <p className="text-xl font-bold text-green-600">
                {formatCurrency(product.price)}
              </p>
              {product.price && (
                <p className="text-gray-400 line-through">
                  {formatCurrency(product.price  + product.price * 20/100)}
                </p>
              )}
            </div>

            <button
              onClick={() => navigate("/signup")}
              className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-600 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
