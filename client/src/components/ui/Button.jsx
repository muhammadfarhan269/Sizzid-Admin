import LoadingSpinner from "./LoadingSpinner";

const variantClasses = {
  primary: "bg-brand-primary hover:bg-indigo-500 text-white",
  secondary: "bg-brand-secondary hover:bg-pink-500 text-white",
  ghost: "bg-transparent border border-dark-500 hover:bg-dark-600 text-white",
  danger: "bg-red-600 hover:bg-red-500 text-white",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  className = "",
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg font-medium transition ${variantClasses[variant]} ${sizeClasses[size]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? <LoadingSpinner size="sm" /> : children}
    </button>
  );
}
