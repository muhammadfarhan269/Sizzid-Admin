import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getGlobalLeaderboardApi, getMyRankApi } from "../api/leaderboard";
import LeaderboardTable from "../components/leaderboard/LeaderboardTable";
import Card from "../components/ui/Card";
import { useAuth } from "../hooks/useAuth";

export default function Leaderboard() {
  const { user, isAuthenticated } = useAuth();
  const [tab, setTab] = useState("GLOBAL");
  const { data: globalRows = [] } = useQuery({ queryKey: ["global-lb"], queryFn: () => getGlobalLeaderboardApi() });
  const { data: myRank } = useQuery({ queryKey: ["my-rank"], queryFn: getMyRankApi, enabled: isAuthenticated });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Leaderboard</h1>
      {isAuthenticated && (
        <Card>
          You are ranked <span className="font-bold">#{myRank?.rank || "-"}</span> globally.
        </Card>
      )}
      <div className="flex gap-2">
        <button onClick={() => setTab("GLOBAL")} className={`rounded px-3 py-1 ${tab === "GLOBAL" ? "bg-brand-primary" : "bg-dark-700"}`}>
          Global
        </button>
        <button className="rounded bg-dark-700 px-3 py-1">By Game</button>
      </div>
      <LeaderboardTable rows={globalRows} currentUserId={user?.id} />
    </div>
  );
}
