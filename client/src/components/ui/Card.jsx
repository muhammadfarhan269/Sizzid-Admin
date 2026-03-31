export default function Card({ children, className = "", hover = false }) {
  return (
    <div
      className={`rounded-xl border border-dark-600 bg-dark-700 p-4 ${
        hover ? "transition hover:-translate-y-0.5 hover:border-brand-primary/50" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
