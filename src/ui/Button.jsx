import React from "react";
import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";

  const variants = {
    primary:
      "bg-purple-700 text-white hover:bg-purple-800 focus:ring-purple-500",
    outline:
      "border border-white text-white hover:bg-purple-50 focus:ring-purple-500",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  return (
    <button
      {...props}
      className={clsx(base, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}
