import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { getGameApi, submitGameSessionApi } from "../api/games";
import { getGameLeaderboardApi } from "../api/leaderboard";
import LeaderboardTable from "../components/leaderboard/LeaderboardTable";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function GameDetail() {
  const { id } = useParams();
  const [score, setScore] = useState("");
  const [duration, setDuration] = useState("");
  const { data: game } = useQuery({ queryKey: ["game", id], queryFn: () => getGameApi(id) });
  const { data: lb = [] } = useQuery({ queryKey: ["game-lb", id], queryFn: () => getGameLeaderboardApi(id, { limit: 10 }) });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await submitGameSessionApi(id, { score: Number(score), duration: Number(duration) });
      toast.success(`Session submitted. Earned ${res.pointsEarned || 0} pts`);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Submit failed");
    }
  };

  if (!game) return null;
  return (
    <div className="space-y-4">
      <Card>
        <h1 className="text-2xl font-bold">{game.title}</h1>
        <p className="text-slate-300">{game.description}</p>
        <a href={game.gameUrl} target="_blank" rel="noreferrer">
          <Button className="mt-3">Play Now</Button>
        </a>
      </Card>
      <Card>
        <p className="mb-3 font-semibold">Submit score (mock)</p>
        <form className="grid gap-2 sm:grid-cols-3" onSubmit={onSubmit}>
          <input className="rounded-lg border-dark-500 bg-dark-800" type="number" placeholder="Score" value={score} onChange={(e) => setScore(e.target.value)} />
          <input className="rounded-lg border-dark-500 bg-dark-800" type="number" placeholder="Duration (sec)" value={duration} onChange={(e) => setDuration(e.target.value)} />
          <Button>Submit</Button>
        </form>
      </Card>
      <div>
        <h2 className="mb-2 text-xl font-semibold">Game Leaderboard</h2>
        <LeaderboardTable rows={lb} />
      </div>
    </div>
  );
}
