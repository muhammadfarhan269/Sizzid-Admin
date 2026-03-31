export default function VipProgressBar({ current = 0, next = 1000, tier = "BRONZE", pointsToNextTier = null }) {
  const pct = next ? Math.min(100, Math.round((current / next) * 100)) : 100;
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span>{tier}</span>
        <span>{pointsToNextTier === null ? "Max tier reached" : `${pointsToNextTier} pts to next tier`}</span>
      </div>
      <div className="h-2 rounded-full bg-dark-500">
        <div className="h-2 rounded-full bg-brand-primary" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
