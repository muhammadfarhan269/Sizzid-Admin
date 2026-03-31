import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getMyPoints } from "../api/points";
import { getMyRedemptions, getRewards, redeemReward } from "../api/rewards";
import Modal from "../components/ui/Modal";

export default function Rewards() {
  const [tab, setTab] = useState("store");
  const [points, setPoints] = useState(0);
  const [rewards, setRewardsList] = useState([]);
  const [redemptions, setRedemptions] = useState([]);
  const [pick, setPick] = useState(null);

  const load = () => {
    getMyPoints().then((r) => setPoints(r.data.data.totalPoints || 0)).catch(() => setPoints(0));
    getRewards().then((r) => setRewardsList(r.data.data || [])).catch(() => setRewardsList([]));
    getMyRedemptions().then((r) => setRedemptions(r.data.data || [])).catch(() => setRedemptions([]));
  };
  useEffect(load, []);

  const onRedeem = async () => {
    try {
      await redeemReward(pick.id);
      toast.success("Redeemed successfully");
      setPick(null);
      load();
    } catch (e) {
      toast.error(e?.response?.data?.message || "Redeem failed");
    }
  };

  return (
    <div>
      <h1>Rewards Store</h1>
      <div className="sizzld-card" style={{ marginTop: 12 }}>
        <div style={{ fontSize: 28, fontWeight: 700 }}>{points}</div>
        <div style={{ color: "var(--text-secondary)" }}>SIZZL Points</div>
      </div>
      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
        <button className={`sizzld-btn ${tab === "store" ? "sizzld-btn-primary" : "sizzld-btn-outline"}`} onClick={() => setTab("store")}>Store</button>
        <button className={`sizzld-btn ${tab === "mine" ? "sizzld-btn-primary" : "sizzld-btn-outline"}`} onClick={() => setTab("mine")}>My Redemptions</button>
      </div>
      {tab === "store" ? (
        <div style={{ marginTop: 12, display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))" }}>
          {rewards.map((r, i) => (
            <div key={r.id} className="sizzld-card">
              <h4><i className={`fa ${["fa-gift", "fa-ticket", "fa-diamond", "fa-star"][i % 4]}`} /> {r.title}</h4>
              <p style={{ color: "var(--gold)" }}>{r.pointsCost} pts</p>
              <p style={{ color: "var(--text-secondary)" }}>Stock: {r.stockInfo ?? r.stock}</p>
              <button disabled={points < r.pointsCost} className={`sizzld-btn ${points < r.pointsCost ? "sizzld-btn-outline" : "sizzld-btn-gold"} sizzld-btn-sm`} onClick={() => setPick(r)}>
                Redeem
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="sizzld-card" style={{ marginTop: 12 }}>
          {redemptions.map((r) => <div key={r.id} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-color)", padding: "10px 0" }}><span>{r.reward?.title || r.rewardId}</span><span className="sizzld-badge badge-purple">{r.status}</span></div>)}
        </div>
      )}
      <Modal open={!!pick} title="Confirm redemption" onClose={() => setPick(null)}>
        <p>{pick?.title} for {pick?.pointsCost} points?</p>
        <p style={{ color: "var(--text-secondary)" }}>Remaining balance: {(points - (pick?.pointsCost || 0))}</p>
        <button className="sizzld-btn sizzld-btn-gold" style={{ marginTop: 8 }} onClick={onRedeem}>Confirm</button>
      </Modal>
    </div>
  );
}
