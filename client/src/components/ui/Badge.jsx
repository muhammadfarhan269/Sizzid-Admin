const map = {
  bronze: "bg-amber-700/25 text-amber-300 border-amber-600/30",
  silver: "bg-slate-400/20 text-slate-200 border-slate-300/30",
  gold: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30",
  platinum: "bg-cyan-200/20 text-cyan-100 border-cyan-200/30",
  success: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  warning: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  danger: "bg-red-500/20 text-red-300 border-red-500/30",
  info: "bg-blue-500/20 text-blue-300 border-blue-500/30",
};

export default function Badge({ children, variant = "info", className = "" }) {
  return <span className={`rounded-full border px-2 py-0.5 text-xs ${map[variant]} ${className}`}>{children}</span>;
}
