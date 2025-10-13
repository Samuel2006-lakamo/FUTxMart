function Button({value}) {
  return (
    <div className="flex items-end justify-end">
      <button
        type="submit"
        className="w- bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-brand/40 focus:outline-none"
      >
        {value}
      </button>
    </div>
  );
}

export default Button;