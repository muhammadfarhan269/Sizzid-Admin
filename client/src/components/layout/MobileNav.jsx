import { NavLink } from "react-router-dom";

const tabs = [
  ["/home", "fa-home", "Home"],
  ["/games", "fa-gamepad", "Games"],
  ["/leaderboard", "fa-trophy", "Board"],
  ["/rewards", "fa-gift", "Rewards"],
  ["/profile", "fa-user", "Profile"],
];

export default function MobileNav() {
  return (
    <nav
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        height: 64,
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-color)",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      {tabs.map(([to, icon, label]) => (
        <NavLink key={to} to={to} style={({ isActive }) => ({ color: isActive ? "var(--accent-primary)" : "var(--text-secondary)", fontSize: 12 })}>
          <div style={{ display: "grid", placeItems: "center" }}>
            <i className={`fa ${icon}`} />
            {label}
          </div>
        </NavLink>
      ))}
    </nav>
  );
}
