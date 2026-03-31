import Card from "../ui/Card";
import EmptyState from "../ui/EmptyState";
import LeaderboardRow from "./LeaderboardRow";

export default function LeaderboardTable({ rows = [], currentUserId }) {
  if (!rows.length) return <EmptyState title="No leaderboard data" />;
  return (
    <Card className="overflow-x-auto p-0">
      <table className="min-w-full text-sm">
        <thead className="bg-dark-600/40 text-left">
          <tr>
            <th className="px-3 py-2">Rank</th>
            <th className="px-3 py-2">Player</th>
            <th className="px-3 py-2">VIP</th>
            <th className="px-3 py-2 text-right">Points</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <LeaderboardRow
              key={row.id || row.userId || index}
              item={{ ...row, rank: row.rank || index + 1 }}
              isMe={row.id === currentUserId || row.userId === currentUserId}
            />
          ))}
        </tbody>
      </table>
    </Card>
  );
}
