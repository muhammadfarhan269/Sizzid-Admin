import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getTournaments, joinTournament } from "../api/games";
import { getTournamentBoard } from "../api/leaderboard";
import Modal from "../components/ui/Modal";

export default function Tournaments() {
  const [tab, setTab] = useState("UPCOMING");
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState(null);
  const [board, setBoard] = useState([]);

  useEffect(() => {
    getTournaments({ status: tab }).then((r) => setItems(r.data.data || [])).catch(() => setItems([]));
  }, [tab]);

  const onJoin = async (id) => {
    try {
      await joinTournament(id);
      toast.success("You've joined the tournament!");
    } catch (e) {
      toast.error(e?.response?.data?.message || "Join failed");
    }
  };
  const openDetail = async (t) => {
    setDetail(t);
    try {
      const b = await getTournamentBoard(t.id);
      setBoard(b.data.data || []);
    } catch {
      setBoard([]);
    }
  };

  return (
    <div>
      <h1><i className="fa fa-flag" /> Tournaments</h1>
      <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
        {["UPCOMING", "ACTIVE", "COMPLETED"].map((t) => (
          <button key={t} className={`sizzld-btn ${tab === t ? "sizzld-btn-primary" : "sizzld-btn-outline"}`} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>
      <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
        {items.map((t) => (
          <div key={t.id} className="sizzld-card">
            <h3>{t.title}</h3>
            <p>{t.game?.title || "Game"} • <span className="sizzld-badge badge-purple">{t.status}</span></p>
            <p><i className="fa fa-trophy" /> {t.prizePool} • {t.entryCount || 0}/{t.maxPlayers}</p>
            <p style={{ color: "var(--text-secondary)" }}>{new Date(t.startAt).toLocaleString()} - {new Date(t.endAt).toLocaleString()}</p>
            {(t.status === "UPCOMING" || t.status === "ACTIVE") && <button className="sizzld-btn sizzld-btn-primary sizzld-btn-sm" onClick={() => onJoin(t.id)}>Join Tournament</button>}
            {t.status === "COMPLETED" && <button className="sizzld-btn sizzld-btn-outline sizzld-btn-sm" onClick={() => openDetail(t)}>View Results</button>}
          </div>
        ))}
      </div>
      <Modal open={!!detail} title={detail?.title || "Tournament"} onClose={() => setDetail(null)}>
        <h4>Leaderboard</h4>
        {(board || []).map((r, i) => <div key={r.id || i}>#{i + 1} {r.user?.username} — {r.score}</div>)}
      </Modal>
    </div>
  );
}
