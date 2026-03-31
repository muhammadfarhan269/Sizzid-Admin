export default function EmptyState({ title = "No data", description = "Nothing to show right now." }) {
  return (
    <div className="rounded-xl border border-dashed border-dark-500 bg-dark-800 p-8 text-center">
      <p className="text-lg font-semibold">{title}</p>
      <p className="mt-1 text-sm text-slate-300">{description}</p>
    </div>
  );
}
