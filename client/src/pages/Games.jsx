import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getGames } from "../api/games";
import GameCard from "../components/games/GameCard";
import EmptyState from "../components/ui/EmptyState";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const tabs = ["All", "Puzzle", "Arcade", "Strategy", "Trivia", "Sports"];
const builtins = [
  { id: "snake", title: "Snake", category: "Arcade", activePlayers: 0, isHot: true },
  { id: "tetris", title: "Tetris", category: "Puzzle", activePlayers: 0, isHot: true },
  { id: "whack-a-mole", title: "Whack-a-Mole", category: "Arcade", activePlayers: 0, isHot: false },
  { id: "memory-match", title: "Memory Match", category: "Puzzle", activePlayers: 0, isHot: false },
];

export default function Games() {
  const [tab, setTab] = useState("All");
  const [search, setSearch] = useState("");
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getGames({ category: tab === "All" ? undefined : tab.toUpperCase(), search: search || undefined })
      .then((r) => setGames(r.data.data || []))
      .catch(() => setError("Failed to load data"))
      .finally(() => setLoading(false));
  }, [tab, search]);

  const all = useMemo(() => games, [games]);

  return (
    <div>
      <h1>Game Library</h1>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "12px 0" }}>
        {tabs.map((t) => (
          <button key={t} className={`sizzld-btn sizzld-btn-sm ${tab === t ? "sizzld-btn-primary" : "sizzld-btn-outline"}`} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>
      <input placeholder="Search games" value={search} onChange={(e) => setSearch(e.target.value)} />

      <h2 className="section-title" style={{ marginTop: 16 }}>Built-in Games</h2>
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))" }}>
        {builtins.map((g) => <GameCard key={g.id} game={g} />)}
      </div>

      <h2 className="section-title" style={{ marginTop: 22 }}>All Games</h2>
      {loading ? <LoadingSpinner /> : error ? <EmptyState title={error} /> : !all.length ? <EmptyState /> : (
        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))" }}>
          {all.map((g) => <GameCard key={g.id} game={g} />)}
        </div>
      )}
      <div style={{ marginTop: 16 }}>
        <Link className="sizzld-btn sizzld-btn-outline" to="/tournaments"><i className="fa fa-flag" /> Browse Tournaments</Link>
      </div>
    </div>
  );
}
