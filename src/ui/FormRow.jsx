function FormRow({ children, label, id, error = "" }) {
  return (
    <div className="flex flex-col gap-3 w-full sm:max-w-[400px]">
      <label className="text-sm md:text-base" htmlFor={id}>
        {label}
      </label>
      {children}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default FormRow;
