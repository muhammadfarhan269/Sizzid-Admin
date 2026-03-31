import Button from "../ui/Button";
import Card from "../ui/Card";
import { formatPoints } from "../../utils/formatters";

export default function RewardCard({ reward, onRedeem }) {
  return (
    <Card hover className="space-y-3">
      <div className="h-24 rounded-lg bg-gradient-to-br from-brand-accent/40 to-brand-primary/30" />
      <p className="font-semibold">{reward.title}</p>
      <p className="text-sm text-brand-accent">{formatPoints(reward.pointsCost)}</p>
      <p className="text-xs text-slate-300">Stock: {reward.stockInfo || reward.stock}</p>
      <Button onClick={() => onRedeem(reward)} fullWidth size="sm">
        Redeem
      </Button>
    </Card>
  );
}
