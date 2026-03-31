import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { changePassword, getProfile, getStats, updateProfile } from "../api/user";
import { getMyTier } from "../api/vip";

const badge = (tier) => `sizzld-badge badge-${String(tier || "bronze").toLowerCase()}`;

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState(null);
  const [tier, setTier] = useState(null);
  const [tab, setTab] = useState("edit");
  const [form, setForm] = useState({ username: "", avatarUrl: "" });
  const [pwd, setPwd] = useState({ current: "", next: "", confirm: "" });

  const load = () => {
    getProfile().then((r) => { setProfile(r.data.data); setForm({ username: r.data.data.username || "", avatarUrl: r.data.data.avatarUrl || "" }); });
    getStats().then((r) => setStats(r.data.data));
    getMyTier().then((r) => setTier(r.data.data));
  };
  useEffect(load, []);

  const initials = (profile?.username || "U").slice(0, 2).toUpperCase();
  const saveProfile = async () => {
    try { await updateProfile(form); toast.success("Profile updated"); load(); } catch (e) { toast.error(e?.response?.data?.message || "Failed"); }
  };
  const savePwd = async () => {
    if (pwd.next !== pwd.confirm) return toast.error("Passwords do not match");
    try { await changePassword(pwd.current, pwd.next); toast.success("Password changed"); } catch (e) { toast.error(e?.response?.data?.message || "Failed"); }
  };

  return (
    <div>
      <h1>Profile</h1>
      <div className="sizzld-card" style={{ marginTop: 12, display: "flex", gap: 14, alignItems: "center" }}>
        <div style={{ width: 74, height: 74, borderRadius: 37, background: "var(--accent-primary)", display: "grid", placeItems: "center", fontSize: 26 }}>{initials}</div>
        <div><h3>{profile?.username}</h3><p>{profile?.email}</p><span className={badge(profile?.vipTier)}>{profile?.vipTier}</span><p style={{ color: "var(--text-secondary)" }}>Member since {profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString() : "-"}</p></div>
      </div>
      <div className="stats-grid" style={{ marginTop: 14 }}>
        <Mini title="Games played" v={stats?.totalGamesPlayed ?? 0} />
        <Mini title="Best rank" v={stats?.bestTournamentRank ?? "-"} />
        <Mini title="Total points earned" v={stats?.totalPointsEarnedAllTime ?? 0} />
        <Mini title="Current balance" v={stats?.currentPointsBalance ?? 0} />
      </div>
      <div className="sizzld-card">
        <h3>VIP Progress</h3>
        <p>{tier?.vipTier} • {tier?.pointsToNextTier == null ? "Max tier" : `${tier.pointsToNextTier} points to next tier`}</p>
        <div style={{ height: 8, background: "var(--bg-secondary)", borderRadius: 10 }}><div style={{ width: `${tier?.pointsToNextTier == null ? 100 : Math.max(5, 100 - Math.min(100, tier.pointsToNextTier / 100))}%`, height: "100%", borderRadius: 10, background: "var(--accent-gold)" }} /></div>
      </div>
      <div className="sizzld-card" style={{ marginTop: 12 }}>
        <h3>Referral</h3>
        <p>Your code</p>
        <div style={{ display: "flex", gap: 8 }}><input value={profile?.referralCode || ""} readOnly /><button className="sizzld-btn sizzld-btn-outline" onClick={() => navigator.clipboard.writeText(profile?.referralCode || "")}>Copy</button></div>
      </div>
      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
        <button className={`sizzld-btn ${tab === "edit" ? "sizzld-btn-primary" : "sizzld-btn-outline"}`} onClick={() => setTab("edit")}>Edit Profile</button>
        <button className={`sizzld-btn ${tab === "password" ? "sizzld-btn-primary" : "sizzld-btn-outline"}`} onClick={() => setTab("password")}>Change Password</button>
      </div>
      {tab === "edit" ? (
        <div className="sizzld-card" style={{ marginTop: 12 }}>
          <input value={form.username} onChange={(e) => setForm((s) => ({ ...s, username: e.target.value }))} placeholder="Username" />
          <input value={form.avatarUrl} onChange={(e) => setForm((s) => ({ ...s, avatarUrl: e.target.value }))} placeholder="Avatar URL" style={{ marginTop: 8 }} />
          <button className="sizzld-btn sizzld-btn-primary" style={{ marginTop: 8 }} onClick={saveProfile}>Save</button>
        </div>
      ) : (
        <div className="sizzld-card" style={{ marginTop: 12 }}>
          <input type="password" placeholder="Current password" value={pwd.current} onChange={(e) => setPwd((s) => ({ ...s, current: e.target.value }))} />
          <input type="password" placeholder="New password" value={pwd.next} onChange={(e) => setPwd((s) => ({ ...s, next: e.target.value }))} style={{ marginTop: 8 }} />
          <input type="password" placeholder="Confirm password" value={pwd.confirm} onChange={(e) => setPwd((s) => ({ ...s, confirm: e.target.value }))} style={{ marginTop: 8 }} />
          <button className="sizzld-btn sizzld-btn-primary" style={{ marginTop: 8 }} onClick={savePwd}>Update password</button>
        </div>
      )}
    </div>
  );
}

function Mini({ title, v }) {
  return <div className="sizzld-card"><div style={{ color: "var(--text-secondary)" }}>{title}</div><div style={{ fontSize: 24, fontWeight: 700 }}>{v}</div></div>;
}
