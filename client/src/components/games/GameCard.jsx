import { Link } from "react-router-dom";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function GameCard({ game }) {
  return (
    <Card hover className="space-y-3">
      <div className="h-28 rounded-lg bg-gradient-to-br from-brand-primary/40 to-brand-secondary/30" />
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{game.title}</h3>
        {game.isHot && <Badge variant="warning">HOT</Badge>}
      </div>
      <div className="flex items-center justify-between text-xs text-slate-300">
        <Badge variant="info">{game.category}</Badge>
        <span>{game.activePlayers || 0} active</span>
      </div>
      <Link to={`/games/${game.id}`}>
        <Button fullWidth size="sm">
          Play
        </Button>
      </Link>
    </Card>
  );
}
