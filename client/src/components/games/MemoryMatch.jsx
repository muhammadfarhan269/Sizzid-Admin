import { useEffect, useMemo, useState } from "react";

const ICONS = ["fa-star", "fa-heart", "fa-bolt", "fa-diamond", "fa-fire", "fa-crown", "fa-rocket", "fa-gem"];

const newDeck = () =>
  [...ICONS, ...ICONS]
    .map((icon, idx) => ({ id: `${icon}-${idx}`, icon, flipped: false, matched: false }))
    .sort(() => Math.random() - 0.5);

export default function MemoryMatch({ onGameEnd }) {
  const [deck, setDeck] = useState(newDeck());
  const [open, setOpen] = useState([]);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [score, setScore] = useState(1000);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => {
      setSeconds((s) => s + 1);
      setScore((s) => Math.max(0, s - 10));
    }, 1000);
    return () => clearInterval(t);
  }, [running]);

  useEffect(() => {
    if (open.length !== 2) return;
    const [a, b] = open;
    const ca = deck.find((x) => x.id === a);
    const cb = deck.find((x) => x.id === b);
    if (ca?.icon === cb?.icon) {
      setDeck((d) => d.map((c) => (c.id === a || c.id === b ? { ...c, matched: true } : c)));
      setOpen([]);
    } else {
      setScore((s) => Math.max(0, s - 20));
      const t = setTimeout(() => {
        setDeck((d) => d.map((c) => (c.id === a || c.id === b ? { ...c, flipped: false } : c)));
        setOpen([]);
      }, 700);
      return () => clearTimeout(t);
    }
  }, [open, deck]);

  const allMatched = useMemo(() => deck.every((c) => c.matched), [deck]);
  useEffect(() => {
    if (allMatched && running) {
      setRunning(false);
      onGameEnd?.(score, seconds);
    }
  }, [allMatched, running, onGameEnd, score, seconds]);

  const flip = (id) => {
    if (open.length >= 2) return;
    const c = deck.find((x) => x.id === id);
    if (!c || c.flipped || c.matched) return;
    setMoves((m) => m + 1);
    setDeck((d) => d.map((x) => (x.id === id ? { ...x, flipped: true } : x)));
    setOpen((o) => [...o, id]);
  };

  return (
    <div className="sizzld-card">
      <h3>Score: {score} | Moves: {moves} | Time: {seconds}s</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginTop: 14 }}>
        {deck.map((c) => {
          const shown = c.flipped || c.matched;
          return (
            <button
              key={c.id}
              onClick={() => flip(c.id)}
              style={{
                height: 84,
                borderRadius: 10,
                border: "1px solid var(--border-color)",
                background: shown ? (c.matched ? "rgba(16,185,129,0.25)" : "var(--bg-card-hover)") : "var(--bg-secondary)",
                color: shown ? "#fff" : "var(--text-muted)",
                transform: shown ? "rotateY(180deg)" : "rotateY(0deg)",
                transition: "all .25s",
              }}
            >
              <i className={`fa ${shown ? c.icon : "fa-gamepad"}`} />
            </button>
          );
        })}
      </div>
      {allMatched && <p style={{ marginTop: 10 }}>You matched all pairs!</p>}
    </div>
  );
}
