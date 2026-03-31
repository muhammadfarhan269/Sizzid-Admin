import Avatar from "../ui/Avatar";
import VipBadge from "../vip/VipBadge";

export default function LeaderboardRow({ item, isMe = false }) {
  const top = item.rank <= 3 ? ["🥇", "🥈", "🥉"][item.rank - 1] : `#${item.rank}`;
  return (
    <tr className={isMe ? "bg-brand-primary/10" : ""}>
      <td className="px-3 py-2">{top}</td>
      <td className="px-3 py-2">
        <div className="flex items-center gap-2">
          <Avatar name={item.username} src={item.avatarUrl} />
          <span>{item.username}</span>
        </div>
      </td>
      <td className="px-3 py-2">
        <VipBadge tier={item.vipTier} />
      </td>
      <td className="px-3 py-2 text-right">{item.totalPoints ?? item.score ?? 0}</td>
    </tr>
  );
}
