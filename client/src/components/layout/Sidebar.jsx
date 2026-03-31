import { Link, NavLink } from "react-router-dom";

const badgeClass = (tier) => `sizzld-badge badge-${String(tier || "bronze").toLowerCase()}`;

export default function Sidebar({ user, unreadCount = 0 }) {
  const initials = (user?.username || "U").slice(0, 2).toUpperCase();
  const points = user?.totalPoints ?? 0;
  return (
    <aside
      style={{
        width: "var(--sidebar-width)",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        background: "var(--bg-sidebar)",
        borderRight: "1px solid var(--border-color)",
        padding: 18,
      }}
      className="hide-mobile"
    >
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--accent-primary)", fontWeight: 800, fontSize: 20 }}>
        <i className="fa fa-gamepad" /> SIZZLD
      </Link>

      <Section title="MAIN">
        <Item to="/home" icon="fa-home" label="Home" />
        <Item to="/games" icon="fa-gamepad" label="Games" />
        <Item to="/leaderboard" icon="fa-trophy" label="Leaderboard" />
        <Item to="/tournaments" icon="fa-flag" label="Tournaments" />
        <Item to="/daily" icon="fa-fire" label="Daily Challenges" />
      </Section>
      <Section title="REWARDS">
        <Item to="/rewards" icon="fa-gift" label="Rewards Store" />
        <Item to="/vip" icon="fa-star" label="VIP Tiers" />
      </Section>
      <Section title="ACCOUNT">
        <Item to="/profile" icon="fa-user" label="Profile" />
        <Item to="/support" icon="fa-headphones" label="Support" />
        <Item to="/notifications" icon="fa-bell" label={`Notifications${unreadCount ? ` (${unreadCount})` : ""}`} />
      </Section>

      <div className="sizzld-card" style={{ position: "absolute", left: 16, right: 16, bottom: 16, display: "flex", gap: 10 }}>
        <div style={{ width: 40, height: 40, borderRadius: 20, background: "var(--accent-primary)", display: "grid", placeItems: "center" }}>{initials}</div>
        <div>
          <div style={{ fontSize: 14 }}>{user?.username || "Guest"}</div>
          <span className={badgeClass(user?.vipTier)}>{user?.vipTier || "BRONZE"}</span>
          <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }}>{points} pts</div>
        </div>
      </div>
    </aside>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginTop: 22 }}>
      <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 10 }}>{title}</div>
      <div style={{ display: "grid", gap: 6 }}>{children}</div>
    </div>
  );
}

function Item({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        display: "flex",
        gap: 10,
        alignItems: "center",
        color: "var(--text-secondary)",
        padding: "10px 12px",
        borderLeft: isActive ? "3px solid var(--accent-primary)" : "3px solid transparent",
        background: isActive ? "var(--accent-glow)" : "transparent",
        borderRadius: "var(--radius-sm)",
      })}
    >
      <i className={`fa ${icon}`} />
      {label}
    </NavLink>
  );
}
