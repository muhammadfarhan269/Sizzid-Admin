import { useEffect, useMemo, useRef, useState } from "react";

const GRID = 20;

export default function SnakeGame({ onGameEnd }) {
  const canvasRef = useRef(null);
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [dir, setDir] = useState({ x: 1, y: 0 });
  const [snake, setSnake] = useState([{ x: 5, y: 5 }]);
  const [food, setFood] = useState({ x: 10, y: 10 });
  const [startTs, setStartTs] = useState(null);

  const speed = useMemo(() => Math.max(70, 160 - Math.floor(score / 5) * 10), [score]);

  const reset = () => {
    setSnake([{ x: 5, y: 5 }]);
    setFood({ x: 10, y: 10 });
    setScore(0);
    setDir({ x: 1, y: 0 });
    setGameOver(false);
  };

  useEffect(() => {
    const key = (e) => {
      if (!running && (e.code === "Space" || e.key === " ")) {
        reset();
        setRunning(true);
        setStartTs(Date.now());
        return;
      }
      const map = {
        ArrowUp: { x: 0, y: -1 }, w: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 }, s: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 }, a: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 }, d: { x: 1, y: 0 },
      };
      if (map[e.key]) setDir(map[e.key]);
      if (map[e.code]) setDir(map[e.code]);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [running]);

  useEffect(() => {
    if (!running || gameOver) return;
    const id = setInterval(() => {
      setSnake((prev) => {
        const head = { x: prev[0].x + dir.x, y: prev[0].y + dir.y };
        if (head.x < 0 || head.y < 0 || head.x >= 30 || head.y >= 20 || prev.some((p) => p.x === head.x && p.y === head.y)) {
          setRunning(false);
          setGameOver(true);
          onGameEnd?.(score, Math.floor((Date.now() - (startTs || Date.now())) / 1000));
          return prev;
        }
        const next = [head, ...prev];
        if (head.x === food.x && head.y === food.y) {
          setScore((s) => s + 10);
          setFood({ x: Math.floor(Math.random() * 30), y: Math.floor(Math.random() * 20) });
          return next;
        }
        next.pop();
        return next;
      });
    }, speed);
    return () => clearInterval(id);
  }, [running, gameOver, dir, food, speed, score, onGameEnd, startTs]);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#0f0f1a";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.strokeStyle = "rgba(124,58,237,0.1)";
    for (let x = 0; x < c.width; x += GRID) ctx.strokeRect(x, 0, GRID, c.height);
    for (let y = 0; y < c.height; y += GRID) ctx.strokeRect(0, y, c.width, GRID);
    ctx.fillStyle = "#f59e0b";
    ctx.beginPath();
    ctx.arc(food.x * GRID + 10, food.y * GRID + 10, 8, 0, Math.PI * 2);
    ctx.fill();
    snake.forEach((p, i) => {
      ctx.fillStyle = i === 0 ? "#a855f7" : "#7c3aed";
      ctx.fillRect(p.x * GRID + 2, p.y * GRID + 2, GRID - 4, GRID - 4);
    });
  }, [snake, food]);

  return (
    <div className="sizzld-card">
      <h3>Score: {score}</h3>
      <canvas ref={canvasRef} width={600} height={400} style={{ width: "100%", maxWidth: 600, borderRadius: 12 }} onClick={() => { if (!running) { reset(); setRunning(true); setStartTs(Date.now()); } }} />
      {!running && !gameOver && <p style={{ marginTop: 10 }}>Press Space or tap to start</p>}
      {gameOver && <p style={{ marginTop: 10, color: "#ef4444" }}>Game Over! Score {score}</p>}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,50px)", gap: 6, marginTop: 10 }}>
        <button className="sizzld-btn sizzld-btn-outline sizzld-btn-sm" onClick={() => setDir({ x: 0, y: -1 })}>↑</button>
        <span />
        <button className="sizzld-btn sizzld-btn-outline sizzld-btn-sm" onClick={() => setDir({ x: 0, y: 1 })}>↓</button>
        <button className="sizzld-btn sizzld-btn-outline sizzld-btn-sm" onClick={() => setDir({ x: -1, y: 0 })}>←</button>
        <span />
        <button className="sizzld-btn sizzld-btn-outline sizzld-btn-sm" onClick={() => setDir({ x: 1, y: 0 })}>→</button>
      </div>
    </div>
  );
}
