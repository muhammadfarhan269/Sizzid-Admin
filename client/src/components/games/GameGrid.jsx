import EmptyState from "../ui/EmptyState";
import GameCard from "./GameCard";

export default function GameGrid({ games = [] }) {
  if (!games.length) return <EmptyState title="No games found" description="Try another filter or search term." />;
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
