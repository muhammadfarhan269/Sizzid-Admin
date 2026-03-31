import { useEffect, useMemo, useRef, useState } from "react";

const W = 10, H = 20, SIZE = 30;
const SHAPES = [
  { c: "#00ffff", p: [[1,1,1,1]] }, { c: "#ffff00", p: [[1,1],[1,1]] }, { c: "#a855f7", p: [[0,1,0],[1,1,1]] },
  { c: "#22c55e", p: [[0,1,1],[1,1,0]] }, { c: "#ef4444", p: [[1,1,0],[0,1,1]] }, { c: "#3b82f6", p: [[1,0,0],[1,1,1]] }, { c: "#f97316", p: [[0,0,1],[1,1,1]] },
];
const rot = (m) => m[0].map((_, i) => m.map((r) => r[i]).reverse());

export default function TetrisGame({ onGameEnd }) {
  const canvasRef = useRef(null);
  const [board, setBoard] = useState(Array.from({ length: H }, () => Array(W).fill(null)));
  const [piece, setPiece] = useState({ ...SHAPES[2], p: SHAPES[2].p, x: 3, y: 0 });
  const [next, setNext] = useState(SHAPES[0]);
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [running, setRunning] = useState(true);
  const [startTs] = useState(Date.now());
  const level = useMemo(() => Math.floor(lines / 10) + 1, [lines]);

  const collides = (b, pc) => pc.p.some((r, yy) => r.some((v, xx) => v && (pc.x + xx < 0 || pc.x + xx >= W || pc.y + yy >= H || b[pc.y + yy]?.[pc.x + xx])));
  const merge = (b, pc) => {
    const n = b.map((r) => [...r]);
    pc.p.forEach((r, yy) => r.forEach((v, xx) => { if (v && pc.y + yy >= 0) n[pc.y + yy][pc.x + xx] = pc.c; }));
    return n;
  };

  useEffect(() => {
    const key = (e) => {
      if (!running) return;
      if (e.key === "ArrowLeft" || e.key === "a") setPiece((p) => (!collides(board, { ...p, x: p.x - 1 }) ? { ...p, x: p.x - 1 } : p));
      if (e.key === "ArrowRight" || e.key === "d") setPiece((p) => (!collides(board, { ...p, x: p.x + 1 }) ? { ...p, x: p.x + 1 } : p));
      if (e.key === "ArrowDown" || e.key === "s") setPiece((p) => (!collides(board, { ...p, y: p.y + 1 }) ? { ...p, y: p.y + 1 } : p));
      if (e.key === "ArrowUp" || e.key === "w") setPiece((p) => (!collides(board, { ...p, p: rot(p.p) }) ? { ...p, p: rot(p.p) } : p));
      if (e.key === " ") setPiece((p) => ({ ...p, y: p.y + 1 }));
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [board, running]);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => {
      setPiece((p) => {
        const moved = { ...p, y: p.y + 1 };
        if (!collides(board, moved)) return moved;
        let n = merge(board, p);
        let cleared = 0;
        n = n.filter((r) => { const full = r.every(Boolean); if (full) cleared += 1; return !full; });
        while (n.length < H) n.unshift(Array(W).fill(null));
        if (cleared) {
          setLines((l) => l + cleared);
          setScore((s) => s + [0, 10, 30, 50, 100][cleared]);
        }
        setBoard(n);
        const np = { ...next, p: next.p, x: 3, y: 0 };
        const nxt = SHAPES[Math.floor(Math.random() * SHAPES.length)];
        setNext(nxt);
        if (collides(n, np)) {
          setRunning(false);
          onGameEnd?.(score, Math.floor((Date.now() - startTs) / 1000));
        }
        return np;
      });
    }, Math.max(120, 700 - level * 45));
    return () => clearInterval(t);
  }, [board, next, level, running, score, startTs, onGameEnd]);

  useEffect(() => {
    const c = canvasRef.current; if (!c) return; const ctx = c.getContext("2d");
    ctx.fillStyle = "#0f0f1a"; ctx.fillRect(0, 0, c.width, c.height);
    board.forEach((r, y) => r.forEach((v, x) => { if (v) { ctx.fillStyle = v; ctx.fillRect(x * SIZE, y * SIZE, SIZE - 1, SIZE - 1); } }));
    piece.p.forEach((r, y) => r.forEach((v, x) => { if (v) { ctx.fillStyle = piece.c; ctx.fillRect((piece.x + x) * SIZE, (piece.y + y) * SIZE, SIZE - 1, SIZE - 1); } }));
  }, [board, piece]);

  return (
    <div className="sizzld-card">
      <h3>Score: {score} | Lines: {lines} | Level: {level}</h3>
      <canvas ref={canvasRef} width={W * SIZE} height={H * SIZE} style={{ width: "100%", maxWidth: 360 }} />
      {!running && <p style={{ color: "#ef4444" }}>Game Over</p>}
      <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
        <button className="sizzld-btn sizzld-btn-outline sizzld-btn-sm" onClick={() => setPiece((p) => ({ ...p, x: p.x - 1 }))}>←</button>
        <button className="sizzld-btn sizzld-btn-outline sizzld-btn-sm" onClick={() => setPiece((p) => ({ ...p, x: p.x + 1 }))}>→</button>
        <button className="sizzld-btn sizzld-btn-outline sizzld-btn-sm" onClick={() => setPiece((p) => ({ ...p, p: rot(p.p) }))}>↻</button>
        <button className="sizzld-btn sizzld-btn-outline sizzld-btn-sm" onClick={() => setPiece((p) => ({ ...p, y: p.y + 1 }))}>↓</button>
      </div>
    </div>
  );
}
