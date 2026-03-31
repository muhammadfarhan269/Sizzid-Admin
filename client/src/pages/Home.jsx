import { useQuery } from "@tanstack/react-query";
import { listHotGamesApi } from "../api/games";
import { getGlobalLeaderboardApi } from "../api/leaderboard";
import api from "../api/axios";
import GameGrid from "../components/games/GameGrid";
import LeaderboardTable from "../components/leaderboard/LeaderboardTable";
import Card from "../components/ui/Card";
import { useAuth } from "../hooks/useAuth";
import { formatPoints } from "../utils/formatters";

export default function Home() {
  const { user } = useAuth();
  const { data: stats = {} } = useQuery({ queryKey: ["my-stats"], queryFn: async () => (await api.get("/users/stats")).data.data });
  const { data: hotGames = [] } = useQuery({ queryKey: ["hot-games"], queryFn: listHotGamesApi });
  const { data: promotions = [] } = useQuery({
    queryKey: ["promotions-active"],
    queryFn: async () => (await api.get("/promotions/active")).data.data || [],
  });
  const { data: leaderboard = [] } = useQuery({ queryKey: ["leaderboard-top5"], queryFn: () => getGlobalLeaderboardApi({ limit: 5 }) });

  return (
    <div className="space-y-6">
      <Card>
        <h1 className="text-2xl font-bold">Welcome back, {user?.username}</h1>
      </Card>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Card>Balance: {formatPoints(stats.currentPointsBalance)}</Card>
        <Card>Rank: #{stats.globalRank || "-"}</Card>
        <Card>VIP: {stats.currentVipTier || "BRONZE"}</Card>
        <Card>Streak: {stats.loginStreak || 0}</Card>
      </div>
      {promotions[0] && (
        <Card className="border-brand-secondary/30">
          <p className="font-semibold">{promotions[0].title}</p>
          <p className="text-sm text-slate-300">{promotions[0].description}</p>
        </Card>
      )}
      <section>
        <h2 className="mb-3 text-xl font-semibold">Hot Games</h2>
        <GameGrid games={hotGames} />
      </section>
      <section>
        <h2 className="mb-3 text-xl font-semibold">Quick Leaderboard</h2>
        <LeaderboardTable rows={leaderboard.slice(0, 5)} currentUserId={user?.id} />
      </section>
    </div>
  );
}
