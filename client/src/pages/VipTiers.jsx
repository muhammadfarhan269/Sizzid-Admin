import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBenefits, getMyTier, getTiers } from "../api/vip";

export default function VipTiers() {
  const [tiers, setTiers] = useState([]);
  const [benefits, setBenefits] = useState({});
  const [my, setMy] = useState(null);
  useEffect(() => {
    getTiers().then((r) => setTiers(r.data.data || []));
    getBenefits().then((r) => setBenefits(r.data.data || {}));
    getMyTier().then((r) => setMy(r.data.data)).catch(() => setMy(null));
  }, []);

  return (
    <div>
      <div className="sizzld-card" style={{ textAlign: "center" }}>
        <h1>SIZZLD VIP Program</h1>
        <p style={{ color: "var(--text-secondary)" }}>Play more. Earn more. Unlock exclusive perks.</p>
      </div>
      {my && (
        <div className="sizzld-card" style={{ marginTop: 12 }}>
          <h3>Current Tier: {my.vipTier}</h3>
          <p>{my.pointsToNextTier == null ? "Max tier reached" : `${my.pointsToNextTier} points to next tier`}</p>
        </div>
      )}
      <div style={{ marginTop: 12, display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}>
        {tiers.map((t) => (
          <div key={t.tier} className="sizzld-card" style={{ borderColor: my?.vipTier === t.tier ? "var(--accent-primary)" : "var(--border-color)", boxShadow: t.tier === "GOLD" || t.tier === "PLATINUM" ? "var(--shadow-glow)" : "none" }}>
            <h3>{t.tier}</h3>
            <p>{t.minPoints} - {t.maxPoints ?? "∞"} points</p>
            <p>Multiplier: {t.multiplier}x</p>
            <ul style={{ marginTop: 8, paddingLeft: 18 }}>
              {(benefits[t.tier] || []).map((b) => <li key={b}><i className="fa fa-check" /> {b}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14 }}>
        <Link className="sizzld-btn sizzld-btn-primary" to="/games">Start earning points</Link>
      </div>
    </div>
  );
}
