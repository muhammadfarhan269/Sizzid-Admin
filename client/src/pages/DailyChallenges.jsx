import { useEffect, useMemo, useState } from "react";

const KEY = "sizzld_daily_progress";
const initial = { scoreHunter: 0, speedRunner: 0, comebackKing: 0, weeklyGames: 0 };

export default function DailyChallenges() {
  const [progress, setProgress] = useState(initial);
  const [streak, setStreak] = useState(1);

  useEffect(() => {
    const p = JSON.parse(localStorage.getItem(KEY) || "null");
    setProgress(p || initial);
    const ls = JSON.parse(localStorage.getItem("sizzld_login_streak_ui") || "1");
    setStreak(ls);
  }, []);

  const milestones = useMemo(() => (streak >= 30 ? "+2000 pts" : streak >= 7 ? "+500 pts" : "Keep going"), [streak]);
  const save = (next) => { setProgress(next); localStorage.setItem(KEY, JSON.stringify(next)); };

  const cards = [
    ["scoreHunter", "Score Hunter", "Score 1000 pts in any game", 100],
    ["speedRunner", "Speed Runner", "Complete a game in under 60s", 120],
    ["comebackKing", "Comeback King", "Win after being behind", 140],
  ];

  return (
    <div>
      <h1><i className="fa fa-fire" /> Daily Challenges</h1>
      <div className="sizzld-card" style={{ marginTop: 12 }}>
        <h3><i className="fa fa-fire" /> Day {streak} streak</h3>
        <p style={{ color: "var(--text-secondary)" }}>Milestone bonus: {milestones}</p>
        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>{Array.from({ length: 7 }).map((_, i) => <div key={i} style={{ width: 14, height: 14, borderRadius: 7, background: i < Math.min(streak, 7) ? "var(--accent-green)" : "var(--bg-secondary)" }} />)}</div>
      </div>

      <h2 className="section-title" style={{ marginTop: 16 }}>Today's challenges</h2>
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}>
        {cards.map(([k, title, desc, reward]) => {
          const val = progress[k];
          const target = k === "scoreHunter" ? 1000 : 1;
          const pct = Math.min(100, Math.round((val / target) * 100));
          const status = val >= target ? "completed" : "available";
          return (
            <div key={k} className="sizzld-card">
              <h3>{title}</h3><p style={{ color: "var(--text-secondary)" }}>{desc}</p>
              <p>Reward: +{reward} pts</p>
              <div style={{ height: 8, background: "var(--bg-secondary)", borderRadius: 8, marginTop: 8 }}><div style={{ width: `${pct}%`, height: "100%", background: "var(--accent-primary)", borderRadius: 8 }} /></div>
              <span className={`sizzld-badge ${status === "completed" ? "badge-success" : "badge-purple"}`} style={{ marginTop: 8 }}>{status}</span>
              <button className="sizzld-btn sizzld-btn-outline sizzld-btn-sm" style={{ marginTop: 8 }} onClick={() => save({ ...progress, [k]: val + (k === "scoreHunter" ? 100 : 1) })}>Demo progress +</button>
            </div>
          );
        })}
      </div>

      <div className="sizzld-card" style={{ marginTop: 16 }}>
        <h3>Weekly mission</h3>
        <p>Play 5 games this week</p>
        <p style={{ color: "var(--text-secondary)" }}>Progress: {progress.weeklyGames}/5 • Reward: 1000 bonus points</p>
      </div>
    </div>
  );
}
