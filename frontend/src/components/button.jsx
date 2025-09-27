import React from "react";
import clsx from "clsx";

export function Button({ className, children, variant = "default", ...props }) {
  const baseStyles =
    "px-4 py-2 rounded-xl font-semibold transition-all focus:outline-none";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100",
    ghost: "text-gray-600 hover:bg-gray-100",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
