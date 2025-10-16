function Row({ product, index ,rowColors,handleEdit,handleDelete,}) {

  
  return (
    <>
      <div className="hidden md:block ">
        <div
          className={`grid grid-cols-6 gap-4 items-center border-b py-3 transition-all ${
            rowColors[index % rowColors.length]
          } hover:opacity-80`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-[5rem] aspect-[3/2] object-cover object-center rounded-md"
          />
          <div className="font-medium text-gray-700">{product.name}</div>
          <div className="font-semibold text-gray-800">
            #{product.price.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </div>
          <div>
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                product.availability === "Available"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.availability}
            </span>
          </div>
          <div className="flex justify-end gap-2 pr-6">
            <button
              onClick={() => handleEdit(product.id)}
              className="px-3 py-1 text-xs cursor-pointer bg-purple-800 text-white rounded-md hover:bg-purple-700 transition"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(product.id)}
              className="px-3 py-1 text-xs cursor-pointer bg-red-700 text-white rounded-md hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-4 mb-3">
        <div
          key={product.id}
          className={`rounded-lg shadow-sm p-4 ${
            rowColors[index % rowColors.length]
          }`}
        >
          <div className="flex gap-3 items-center mb-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-md border"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{product.name}</h3>
              <p className="text-purple-700 font-medium">
                #{product.price.toLocaleString()}
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-2">{product.description}</p>

          <div className="flex justify-between items-center">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                product.availability === "Available"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.availability}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(product.id)}
                className="px-3 py-1 text-xs bg-purple-800 text-white rounded-md hover:bg-purple-700 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="px-3 py-1 text-xs bg-red-800 text-white rounded-md hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Row;