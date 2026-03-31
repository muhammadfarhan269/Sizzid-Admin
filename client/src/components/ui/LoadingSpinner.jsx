export default function LoadingSpinner({ size = "md" }) {
  const classes = size === "sm" ? "h-4 w-4 border-2" : "h-8 w-8 border-4";
  return <div className={`animate-spin rounded-full border-white/30 border-t-white ${classes}`} />;
}
