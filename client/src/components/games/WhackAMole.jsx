import { useEffect, useMemo, useState } from "react";

const holes = Array.from({ length: 9 }, (_, i) => i);

export default function WhackAMole({ onGameEnd }) {
  const [time, setTime] = useState(30);
  const [score, setScore] = useState(0);
  const [active, setActive] = useState([]);
  const [started, setStarted] = useState(false);
  const [startTs, setStartTs] = useState(0);
  const speed = useMemo(() => Math.max(350, 1000 - (30 - time) * 20), [time]);

  useEffect(() => {
    if (!started) return;
    if (time <= 0) {
      onGameEnd?.(score, Math.floor((Date.now() - startTs) / 1000));
      return;
    }
    const t = setTimeout(() => {
      const count = 1 + Math.floor(Math.random() * 3);
      const picks = [...holes].sort(() => Math.random() - 0.5).slice(0, count);
      setActive(picks);
    }, speed);
    return () => clearTimeout(t);
  }, [started, time, speed, score, startTs, onGameEnd]);

  useEffect(() => {
    if (!started) return;
    const timer = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [started]);

  const hit = (i) => {
    if (!started) return;
    if (active.includes(i)) {
      setScore((s) => s + 10);
      setActive((a) => a.filter((x) => x !== i));
    } else {
      setScore((s) => s - 5);
    }
  };

  return (
    <div className="sizzld-card">
      <h3>Time: {Math.max(time, 0)}s | Score: {score}</h3>
      {!started ? (
        <button className="sizzld-btn sizzld-btn-primary" onClick={() => { setStarted(true); setStartTs(Date.now()); }}>
          Start
        </button>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginTop: 10 }}>
          {holes.map((i) => (
            <button
              key={i}
              onClick={() => hit(i)}
              style={{
                height: 90,
                borderRadius: "50%",
                border: "1px solid var(--border-color)",
                background: active.includes(i) ? "rgba(16,185,129,0.35)" : "var(--bg-secondary)",
                color: active.includes(i) ? "#fff" : "transparent",
                fontSize: 28,
              }}
            >
              🐹
            </button>
          ))}
        </div>
      )}
      {started && time <= 0 && <p style={{ marginTop: 10 }}>Game over! Final score: {score}</p>}
    </div>
  );
}
