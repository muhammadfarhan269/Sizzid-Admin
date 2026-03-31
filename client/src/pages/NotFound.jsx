import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div className="sizzld-card" style={{ textAlign: "center" }}>
        <h1>404</h1>
        <p style={{ color: "var(--text-secondary)" }}>Page not found.</p>
        <Link className="sizzld-btn sizzld-btn-primary" to="/home">Go Home</Link>
      </div>
    </div>
  );
}
