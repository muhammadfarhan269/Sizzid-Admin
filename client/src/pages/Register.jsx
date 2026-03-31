import { useContext, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";

export default function Register() {
  const { register } = useContext(AuthContext);
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const strength = useMemo(() => Math.min(100, password.length * 12), [password]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await register(email, username, password);
      if (referralCode.trim()) await api.post("/affiliates/claim", { referralCode: referralCode.trim() });
      nav("/home");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Register failed");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div className="sizzld-card" style={{ margin: 24, display: "grid", placeItems: "center" }}>
        <div><h1 style={{ color: "var(--accent-primary)" }}>Join SIZZLD</h1><p style={{ color: "var(--text-secondary)" }}>Play and climb the ranks.</p></div>
      </div>
      <div style={{ display: "grid", placeItems: "center", padding: 20 }}>
        <form onSubmit={submit} className="sizzld-card" style={{ width: "100%", maxWidth: 420 }}>
          <h2>Create account</h2>
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginTop: 10 }} />
          <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginTop: 10 }} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginTop: 10 }} />
          <div style={{ height: 8, background: "var(--bg-secondary)", borderRadius: 10, marginTop: 8 }}>
            <div style={{ width: `${strength}%`, height: "100%", background: "var(--accent-green)", borderRadius: 10 }} />
          </div>
          <input placeholder="Have a referral code?" value={referralCode} onChange={(e) => setReferralCode(e.target.value)} style={{ marginTop: 10 }} />
          <button className="sizzld-btn sizzld-btn-primary" style={{ marginTop: 10 }}>Register</button>
          <p style={{ marginTop: 8 }}>Already have an account? <Link to="/login" style={{ color: "var(--accent-secondary)" }}>Login</Link></p>
        </form>
      </div>
    </div>
  );
}
