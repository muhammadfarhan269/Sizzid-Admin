import { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getStats } from "../api/user";
import { getHotGames } from "../api/games";
import { getGlobal } from "../api/leaderboard";
import { getHistory } from "../api/points";
import api from "../api/axios";
import StatCard from "../components/ui/StatCard";
import GameCard from "../components/games/GameCard";
import LoadingSpinner from "../components/ui/LoadingSpinner";

export default function Home() {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState(null);
  const [hot, setHot] = useState([]);
  const [promo, setPromo] = useState(null);
  const [top, setTop] = useState([]);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const [s, h, p, g, a] = await Promise.all([
          getStats(),
          getHotGames(),
          api.get("/promotions/active"),
          getGlobal({ limit: 5 }),
          getHistory({ limit: 5 }),
        ]);
        setStats(s.data.data);
        setHot(h.data.data || []);
        setPromo((p.data.data || [])[0] || null);
        setTop(g.data.data || []);
        setActivity(a.data.data || []);
      } catch {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const dateText = useMemo(() => new Date().toLocaleDateString(undefined, { dateStyle: "full" }), []);
  if (loading) return <LoadingSpinner />;
  if (error) return <div className="empty-state">{error}</div>;

  return (
    <div>
      <h1 style={{ marginBottom: 4 }}>Welcome back, {user?.username} 👋</h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>{dateText} • Ready to compete?</p>
      <div className="stats-grid">
        <StatCard icon="fa-coins" iconClass="stat-icon-gold" label="Points Balance" value={stats?.currentPointsBalance ?? 0} />
        <StatCard icon="fa-trophy" iconClass="stat-icon-purple" label="Global Rank" value={`#${stats?.globalRank ?? "-"}`} />
        <StatCard icon="fa-star" iconClass="stat-icon-green" label="VIP Tier" value={stats?.currentVipTier ?? "BRONZE"} />
        <StatCard icon="fa-fire" iconClass="stat-icon-red" label="Login Streak" value={`${stats?.loginStreak ?? 0} days`} />
      </div>

      <div className="sizzld-card" style={{ marginBottom: 16 }}>
        <h2 className="section-title">Daily Challenge</h2>
        <p>Play any game and score 500+ points</p>
        <div style={{ height: 8, background: "var(--bg-secondary)", borderRadius: 10, margin: "10px 0" }}>
          <div style={{ width: "0%", height: "100%", background: "var(--accent-green)", borderRadius: 10 }} />
        </div>
        <p style={{ color: "var(--text-secondary)" }}>Reward: +100 bonus points</p>
        <Link className="sizzld-btn sizzld-btn-primary" to="/games">Play Now</Link>
      </div>

      {promo && (
        <div className="sizzld-card" style={{ marginBottom: 16, borderColor: "var(--accent-secondary)" }}>
          <h3>{promo.title}</h3><p>{promo.description}</p><small>Ends: {new Date(promo.endsAt).toLocaleString()}</small>
        </div>
      )}

      <h2 className="section-title">Hot Games</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 12 }}>
        {hot.map((g) => <GameCard key={g.id} game={g} />)}
      </div>

      <h2 className="section-title" style={{ marginTop: 22 }}>Quick Leaderboard</h2>
      <div className="sizzld-card">
        {top.map((u, i) => <Row key={u.id || i} left={`#${i + 1} ${u.username}`} right={`${u.totalPoints} pts`} />)}
        <Link to="/leaderboard" style={{ color: "var(--accent-secondary)" }}>View Full Leaderboard</Link>
      </div>

      <h2 className="section-title" style={{ marginTop: 22 }}>My Recent Activity</h2>
      <div className="sizzld-card">
        {activity.map((t) => <Row key={t.id} left={`${t.description || t.type}`} right={`${t.amount} • ${new Date(t.createdAt).toLocaleDateString()}`} />)}
      </div>
    </div>
  );
}

function Row({ left, right }) {
  return <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--border-color)" }}><span>{left}</span><span style={{ color: "var(--text-secondary)" }}>{right}</span></div>;
}
