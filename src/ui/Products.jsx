import { useFetchData } from "../hooks/useFetchProduct";
import { useState } from "react";
import { ShoppingCart, Heart, Filter } from "lucide-react";


function Products() {
  const [filter, setFilter] = useState("all");

  const { products } = useFetchData(
    "products",
    "http://localhost:5000/products"
  );
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category?.toLowerCase() === filter);
  return (
    <>
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md shadow-md flex flex-wrap items-center justify-between gap-3 p-4">
        <div className="flex items-center gap-2">
          <Filter className="text-purple-700" />
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="border border-purple-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All Products</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="food">Food</option>
            <option value="books">Books</option>
          </select>
        </div>

        <input
          type="search"
          placeholder="Search products..."
          className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-[300px] focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <section className="p-6 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
                <button className="absolute top-2 right-2 bg-white/70 p-2 rounded-full hover:bg-white transition">
                  <Heart className="text-purple-700" size={18} />
                </button>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-slate-800 truncate">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-2">
                  {product.description || "No description provided"}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-purple-700 text-lg">
                      ₦{product.price.toLocaleString()}
                    </span>
                    {product.cancelPrice && (
                      <span className="line-through text-gray-400 text-sm">
                        ₦{product.cancelPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <button className="mt-3 w-full flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-md transition">
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500">
            No products available.
          </div>
        )}
      </section>
    </>
  );
}

export default Products;
