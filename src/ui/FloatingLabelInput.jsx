const FloatingInput = ({ label, id, type = "text", value, onChange }) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer block w-full rounded-md border border-gray-300 bg-transparent px-3 pt-4 pb-1.5 text-sm text-gray-900 focus:border-brand focus:ring-0 focus:outline-none transition-all"
      />

      <label
        htmlFor={id}
        className={`absolute left-3 text-gray-500 bg-white px-1 text-sm transition-all duration-200
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100
          peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:text-brand
          ${value ? "top-0 -translate-y-1/2 scale-90 text-brand" : ""}`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
