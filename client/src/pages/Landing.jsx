import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { listGamesApi } from "../api/games";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function Landing() {
  const { data: games = [] } = useQuery({ queryKey: ["landing-games-count"], queryFn: () => listGamesApi() });
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-2xl border border-dark-600 bg-dark-700/40 p-10">
          <h1 className="text-4xl font-extrabold">Compete. Win. Rise.</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Play skill-based games, climb leaderboards, and earn real rewards.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/register">
              <Button>Start Playing</Button>
            </Link>
            <Link to="/leaderboard">
              <Button variant="ghost">View Leaderboard</Button>
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {["Skill-based games", "Earn SIZZL Points", "Real rewards"].map((x) => (
            <Card key={x}>{x}</Card>
          ))}
        </section>

        <section className="mt-10 rounded-xl border border-dark-600 bg-dark-700 p-4 text-center">
          <p className="text-lg font-semibold">{games.length} games available</p>
          <p className="text-slate-300">Join thousands of players</p>
        </section>

        <section className="mt-10 text-center">
          <p className="mb-3 text-xl font-semibold">Ready to play?</p>
          <Link to="/register">
            <Button>Get Started</Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
