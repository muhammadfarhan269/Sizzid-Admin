import { useEffect, useState } from "react";
import { getNotifications, markAllRead, markRead } from "../api/notifications";

const iconFor = (type) =>
  ({ TOURNAMENT: "fa-trophy", REWARD: "fa-gift", SYSTEM: "fa-bell", SUPPORT: "fa-headset" }[type] || "fa-bell");

const rel = (d) => {
  const m = Math.floor((Date.now() - new Date(d).getTime()) / 60000);
  if (m < 60) return `${m} minutes ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} hours ago`;
  return `${Math.floor(h / 24)} days ago`;
};

export default function Notifications() {
  const [items, setItems] = useState([]);
  const [unread, setUnread] = useState(0);
  const load = () => getNotifications({ page: 1, limit: 50 }).then((r) => { setItems(r.data.data || []); setUnread(r.data.unreadCount || 0); });
  useEffect(() => { load(); }, []);

  return (
    <div>
      <h1>Notifications <span className="sizzld-badge badge-purple">{unread}</span></h1>
      <button className="sizzld-btn sizzld-btn-outline sizzld-btn-sm" onClick={() => markAllRead().then(load)}>Mark all read</button>
      <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
        {items.map((n) => (
          <button key={n.id} className="sizzld-card" onClick={() => markRead(n.id).then(load)} style={{ textAlign: "left", background: n.isRead ? "var(--bg-card)" : "var(--bg-card-hover)" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div><i className={`fa ${iconFor(n.type)}`} /> <strong>{n.title}</strong></div>
              <small style={{ color: "var(--text-secondary)" }}>{rel(n.createdAt)}</small>
            </div>
            <p style={{ color: "var(--text-secondary)", marginTop: 4 }}>{n.body}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
