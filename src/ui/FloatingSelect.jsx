function FloatingSelect({value,onChange}) {
  return (
    <div className="relative w-full">
      <select
        id="gender"
        value={value}
        onChange={onChange}
        className="peer block w-full appearance-none rounded-md border border-gray-300 bg-transparent px-3 pt-5 pb-1.5 text-sm text-gray-900 focus:border-brand focus:ring-0 focus:outline-none transition-all"
      >
        <option value="" disabled hidden></option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label
        htmlFor="gender"
        className={`absolute left-3 text-gray-500 bg-white px-1 text-sm transition-all duration-200
      ${
        value
          ? "top-0 -translate-y-1/2 scale-90 text-brand"
          : "top-1/2 -translate-y-1/2 scale-100"
      }
      peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:text-brand`}
      >
        Gender
      </label>

      {/* Optional dropdown arrow */}
      <svg
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}

export default FloatingSelect;