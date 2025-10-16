import { useState } from "react";

export default function AddProductForm({ onCloseModal }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", form);

    // Reset form
    setForm({
      name: "",
      price: "",
      category: "",
      description: "",
      image: null,
    });

    onCloseModal?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md mx-auto p-2 sm:p-4 overflow-y-auto"
    >
      <h2 className="text-lg sm:text-xl font-semibold text-purple-700 text-center mb-2">
        Add New Product
      </h2>

      {/* Product Image */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Product Image*</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Product Name */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Product Name*</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Product Price */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Price (₦)*</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Category */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Category*</label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Select Category</option>
          <option value="Clothing">Clothing</option>
          <option value="Shoes">Shoes</option>
          <option value="Accessories">Accessories</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>

      {/* Description */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows="3"
          className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Write a short description..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-purple-700 text-white py-2 sm:py-3 rounded-lg hover:bg-purple-800 transition-all font-semibold"
      >
        Save Product
      </button>
    </form>
  );
}
