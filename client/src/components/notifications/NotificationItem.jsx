import { formatDate } from "../../utils/formatters";
import Card from "../ui/Card";

export default function NotificationItem({ item, onRead }) {
  return (
    <Card className={`${item.isRead ? "opacity-70" : "border-brand-primary/40"} cursor-pointer`} onClick={() => onRead(item.id)}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-semibold">{item.title}</p>
          <p className="text-sm text-slate-300">{item.body}</p>
        </div>
        <span className="text-xs text-slate-400">{formatDate(item.createdAt)}</span>
      </div>
    </Card>
  );
}
