import { useNavigate } from "react-router-dom";

export default function Navbar({ user, unreadCount = 0, onLogout, onMenu }) {
  const navigate = useNavigate();
  const initials = (user?.username || "U").slice(0, 2).toUpperCase();
  return (
    <header
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        height: "var(--navbar-height)",
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border-color)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        zIndex: 50,
      }}
    >
      <button className="sizzld-btn sizzld-btn-outline sizzld-btn-sm" onClick={onMenu} style={{ display: "none" }}>
        <i className="fa fa-bars" />
      </button>
      <div style={{ maxWidth: 420, width: "100%", position: "relative" }}>
        <i className="fa fa-search" style={{ position: "absolute", left: 10, top: 12, color: "var(--text-muted)" }} />
        <input placeholder="Search games, players..." style={{ paddingLeft: 30 }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button className="sizzld-btn sizzld-btn-outline sizzld-btn-sm" onClick={() => navigate("/notifications")}>
          <i className="fa fa-bell" /> {unreadCount > 0 ? unreadCount : ""}
        </button>
        <div style={{ width: 36, height: 36, borderRadius: 18, background: "var(--accent-primary)", display: "grid", placeItems: "center" }}>
          {initials}
        </div>
        <div style={{ fontSize: 14 }}>{user?.username || "Guest"}</div>
        <button className="sizzld-btn sizzld-btn-outline sizzld-btn-sm" onClick={onLogout}>
          <i className="fa fa-sign-out" />
        </button>
      </div>
    </header>
  );
}
