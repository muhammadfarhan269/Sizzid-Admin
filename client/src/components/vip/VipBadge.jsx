import Badge from "../ui/Badge";

const map = {
  BRONZE: "bronze",
  SILVER: "silver",
  GOLD: "gold",
  PLATINUM: "platinum",
};

export default function VipBadge({ tier }) {
  return <Badge variant={map[tier] || "info"}>{tier || "BRONZE"}</Badge>;
}
