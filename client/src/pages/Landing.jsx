import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getGames } from "../api/games";
import { getGlobal } from "../api/leaderboard";

const featured = [
  { name: "Snake", cat: "Arcade", to: "/games/snake" },
  { name: "Tetris", cat: "Puzzle", to: "/games/tetris" },
  { name: "Whack-a-Mole", cat: "Arcade", to: "/games/whack-a-mole" },
  { name: "Memory Match", cat: "Puzzle", to: "/games/memory-match" },
];

export default function Landing() {
  const [count, setCount] = useState(0);
  const [top, setTop] = useState([]);
  useEffect(() => {
    getGames().then((r) => setCount((r.data.data || []).length)).catch(() => setCount(0));
    getGlobal({ limit: 5 }).then((r) => setTop(r.data.data || [])).catch(() => setTop([]));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <section style={{ minHeight: "88vh", display: "grid", placeItems: "center", textAlign: "center", background: "radial-gradient(circle at top, rgba(124,58,237,.3), transparent 50%)" }}>
        <div>
          <div className="sizzld-badge badge-purple" style={{ marginBottom: 14 }}>🎮 Skill-Based Gaming Platform</div>
          <h1 style={{ fontSize: 56 }}>Compete. Win.</h1>
          <h1 style={{ fontSize: 56, background: "linear-gradient(90deg,#7c3aed,#a855f7)", WebkitBackgroundClip: "text", color: "transparent" }}>Rise to the Top.</h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: 700, margin: "12px auto 18px" }}>
            Join thousands of players competing in real skill-based games. Earn SIZZL Points, climb leaderboards, and redeem real rewards.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="sizzld-btn sizzld-btn-primary sizzld-btn-lg" to="/register">Start Playing Free</Link>
            <Link className="sizzld-btn sizzld-btn-outline sizzld-btn-lg" to="/leaderboard">View Leaderboard</Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 18, marginTop: 18, flexWrap: "wrap" }}>
            <Stat icon="fa-gamepad" text={`${count}+ Games`} />
            <Stat icon="fa-gift" text="Real Rewards" />
            <Stat icon="fa-bolt" text="Free to Play" />
          </div>
        </div>
      </section>

      <section className="sizzld-card" style={{ marginTop: 22 }}>
        <h2 className="section-title">How it works</h2>
        <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
          <Step n={1} icon="fa-user-plus" title="Create account + verify" />
          <Step n={2} icon="fa-gamepad" title="Play skill games" />
          <Step n={3} icon="fa-gift" title="Earn points + redeem rewards" />
        </div>
      </section>

      <section className="sizzld-card" style={{ marginTop: 22 }}>
        <h2 className="section-title">Featured games</h2>
        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
          {featured.map((f) => (
            <div key={f.name} className="sizzld-card">
              <h4>{f.name}</h4>
              <p style={{ color: "var(--text-secondary)" }}>{f.cat}</p>
              <Link className="sizzld-btn sizzld-btn-primary sizzld-btn-sm" to={f.to}>Play Free</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="sizzld-card" style={{ marginTop: 22 }}>
        <h2 className="section-title">VIP Tiers showcase</h2>
        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))" }}>
          {[
            ["Bronze", "1x", "basic access", "badge-bronze"],
            ["Silver", "1.25x", "priority matchmaking", "badge-silver"],
            ["Gold", "1.5x", "exclusive games", "badge-gold"],
            ["Platinum", "2x", "VIP tournaments", "badge-platinum"],
          ].map(([t, m, b, cls]) => (
            <div key={t} className="sizzld-card" style={{ boxShadow: t === "Gold" || t === "Platinum" ? "var(--shadow-glow)" : "none" }}>
              <span className={`sizzld-badge ${cls}`}>{t}</span>
              <h3 style={{ marginTop: 8 }}>{m}</h3>
              <p style={{ color: "var(--text-secondary)" }}>{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sizzld-card" style={{ marginTop: 22 }}>
        <h2 className="section-title">Leaderboard preview</h2>
        {(top || []).map((u, i) => (
          <div key={u.id || i} style={{ display: "grid", gridTemplateColumns: "70px 1fr 130px", padding: "8px 0", borderBottom: "1px solid var(--border-color)" }}>
            <div>#{i + 1}</div><div>{u.username}</div><div>{u.totalPoints} pts</div>
          </div>
        ))}
        <Link to="/leaderboard" style={{ color: "var(--accent-secondary)", display: "inline-block", marginTop: 10 }}>See full leaderboard</Link>
      </section>

      <section className="sizzld-card" style={{ margin: "22px 0", textAlign: "center", boxShadow: "var(--shadow-glow)" }}>
        <h2>Ready to compete?</h2>
        <Link className="sizzld-btn sizzld-btn-primary" to="/register" style={{ marginTop: 8 }}>Start Playing Free</Link>
      </section>

      <footer style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", color: "var(--text-secondary)", paddingBottom: 30 }}>
        <div>SIZZLD</div>
        <div style={{ display: "flex", gap: 12 }}>
          <Link to="/games">Games</Link><Link to="/leaderboard">Leaderboard</Link><Link to="/vip">VIP</Link><Link to="/login">Login</Link>
        </div>
        <div>© 2026 SIZZLD. All rights reserved.</div>
      </footer>
    </div>
  );
}

function Stat({ icon, text }) { return <div className="sizzld-card"><i className={`fa ${icon}`} /> {text}</div>; }
function Step({ n, icon, title }) { return <div className="sizzld-card"><div className="sizzld-badge badge-purple">Step {n}</div><h4 style={{ marginTop: 6 }}><i className={`fa ${icon}`} /> {title}</h4></div>; }
