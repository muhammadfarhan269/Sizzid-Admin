import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  return (
    <div className="sizzld-card" style={{ minWidth: 250 }}>
      <div style={{ height: 120, borderRadius: 10, background: "linear-gradient(135deg, #4c1d95, #2563eb)" }} />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
        <h4>{game.title}</h4>
        {game.isHot && <span className="sizzld-badge badge-hot">HOT</span>}
      </div>
      <p style={{ color: "var(--text-secondary)", fontSize: 13 }}>{game.category} • <i className="fa fa-users" /> {game.activePlayers || 0}</p>
      <p style={{ color: "var(--text-secondary)", fontSize: 12 }}>Earn up to {(game.pointsHint || 100)} pts</p>
      <Link className="sizzld-btn sizzld-btn-primary" to={`/games/${game.id}`} style={{ marginTop: 8 }}>
        Play
      </Link>
    </div>
  );
}
