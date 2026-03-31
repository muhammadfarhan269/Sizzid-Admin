import { initials } from "../../utils/formatters";

export default function Avatar({ name, src, className = "" }) {
  if (src) {
    return <img src={src} alt={name} className={`h-9 w-9 rounded-full object-cover ${className}`} />;
  }
  return (
    <div className={`flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary/30 text-sm font-semibold ${className}`}>
      {initials(name)}
    </div>
  );
}
