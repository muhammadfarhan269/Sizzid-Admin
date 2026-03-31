import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getByGame, getGlobal, getMyRank } from "../api/leaderboard";
import { getGames } from "../api/games";

export default function Leaderboard() {
  const { user } = useContext(AuthContext);
  const [tab, setTab] = useState("global");
  const [rows, setRows] = useState([]);
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState("");
  const [myRank, setMyRank] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getGlobal({ page, limit: 20 }).then((r) => setRows(r.data.data || []));
    getGames().then((r) => {
      const g = r.data.data || [];
      setGames(g);
      if (g[0]) setSelectedGame(g[0].id);
    });
    getMyRank().then((r) => setMyRank(r.data.data)).catch(() => setMyRank(null));
  }, [page]);

  useEffect(() => {
    if (tab === "game" && selectedGame) getByGame(selectedGame).then((r) => setRows(r.data.data || []));
    if (tab === "global") getGlobal({ page, limit: 20 }).then((r) => setRows(r.data.data || []));
  }, [tab, selectedGame, page]);

  return (
    <div>
      <h1><i className="fa fa-trophy" /> Global Leaderboard</h1>
      {myRank && <div className="sizzld-card" style={{ marginTop: 12 }}>You are ranked #{myRank.rank} globally with {myRank.totalPoints} points</div>}
      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
        <button className={`sizzld-btn ${tab === "global" ? "sizzld-btn-primary" : "sizzld-btn-outline"}`} onClick={() => setTab("global")}>Global</button>
        <button className={`sizzld-btn ${tab === "game" ? "sizzld-btn-primary" : "sizzld-btn-outline"}`} onClick={() => setTab("game")}>By Game</button>
      </div>
      {tab === "game" && (
        <select style={{ marginTop: 10 }} value={selectedGame} onChange={(e) => setSelectedGame(e.target.value)}>
          {games.map((g) => <option key={g.id} value={g.id}>{g.title}</option>)}
        </select>
      )}
      <div className="sizzld-card" style={{ marginTop: 12 }}>
        <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 140px 120px", color: "var(--text-secondary)", marginBottom: 10 }}>
          <div>Rank</div><div>Player</div><div>VIP</div><div>Points</div>
        </div>
        {rows.map((r, i) => {
          const rank = r.rank || i + 1;
          const vip = String(r.vipTier || "BRONZE").toLowerCase();
          return (
            <div key={r.id || r.userId || i} style={{ display: "grid", gridTemplateColumns: "80px 1fr 140px 120px", padding: "10px 0", borderBottom: "1px solid var(--border-color)", background: user?.id === (r.id || r.userId) ? "var(--accent-glow)" : rank <= 3 ? "rgba(245,158,11,0.08)" : "transparent" }}>
              <div>{rank === 1 ? "👑 #1" : `#${rank}`}</div><div>{r.username || r.user?.username}</div><div><span className={`sizzld-badge badge-${vip}`}>{r.vipTier || "BRONZE"}</span></div><div>{r.totalPoints ?? r.score ?? 0}</div>
            </div>
          );
        })}
      </div>
      {tab === "global" && <button className="sizzld-btn sizzld-btn-outline" style={{ marginTop: 10 }} onClick={() => setPage((p) => p + 1)}>Load more</button>}
    </div>
  );
}
