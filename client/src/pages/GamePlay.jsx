import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getGame, submitSession } from "../api/games";
import Modal from "../components/ui/Modal";
import SnakeGame from "../components/games/SnakeGame";
import TetrisGame from "../components/games/TetrisGame";
import WhackAMole from "../components/games/WhackAMole";
import MemoryMatch from "../components/games/MemoryMatch";

const builtins = {
  snake: SnakeGame,
  tetris: TetrisGame,
  "whack-a-mole": WhackAMole,
  "memory-match": MemoryMatch,
};

export default function GamePlay() {
  const { id } = useParams();
  const nav = useNavigate();
  const [game, setGame] = useState(null);
  const [summary, setSummary] = useState(null);
  const Builtin = useMemo(() => builtins[id], [id]);

  useEffect(() => {
    if (Builtin) {
      setGame({ id, title: id, gameUrl: null });
      return;
    }
    getGame(id).then((r) => setGame(r.data.data)).catch(() => setGame(null));
  }, [id, Builtin]);

  const onGameEnd = async (score, duration) => {
    setSummary({ score, duration });
    try {
      await submitSession(id, score, duration);
      toast.success("Score submitted");
    } catch {
      toast.error("Could not submit score");
    }
  };

  return (
    <div>
      <h1>Now Playing: {game?.title || id}</h1>
      <p style={{ color: "var(--text-secondary)" }}>Score and timer are shown in game UI</p>
      <div style={{ marginTop: 12 }}>
        {Builtin ? <Builtin onGameEnd={onGameEnd} /> : game?.gameUrl ? (
          <iframe title={game.title} src={game.gameUrl} style={{ width: "100%", minHeight: 600, border: "1px solid var(--border-color)", borderRadius: 12 }} />
        ) : <p>Loading game...</p>}
      </div>
      <Modal open={!!summary} title="Score Summary" onClose={() => setSummary(null)}>
        <p>Score: {summary?.score}</p>
        <p>Duration: {summary?.duration}s</p>
        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
          <button className="sizzld-btn sizzld-btn-primary" onClick={() => window.location.reload()}>Play Again</button>
          <button className="sizzld-btn sizzld-btn-outline" onClick={() => nav("/games")}>Back to Games</button>
        </div>
      </Modal>
    </div>
  );
}
