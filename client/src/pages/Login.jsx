import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import Modal from "../components/ui/Modal";
import * as authApi from "../api/auth";

export default function Login() {
  const { login } = useContext(AuthContext);
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [step, setStep] = useState("email");
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      nav("/home");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login failed");
    }
  };

  const forgotFlow = async () => {
    try {
      if (step === "email") {
        await authApi.forgotPassword(email);
        setStep("otp");
      } else if (step === "otp") {
        await authApi.verifyOtp(email, otp);
        setStep("reset");
      } else {
        await authApi.resetPassword(email, otp, newPassword);
        setOpen(false);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div className="sizzld-card" style={{ margin: 24, display: "grid", placeItems: "center" }}>
        <div>
          <h1 style={{ color: "var(--accent-primary)" }}>SIZZLD</h1>
          <p style={{ color: "var(--text-secondary)" }}>Compete. Win. Rise.</p>
          <div style={{ marginTop: 20, display: "flex", gap: 12 }}><i className="fa fa-gamepad" /><i className="fa fa-trophy" /><i className="fa fa-gift" /></div>
        </div>
      </div>
      <div style={{ display: "grid", placeItems: "center", padding: 20 }}>
        <form onSubmit={submit} className="sizzld-card" style={{ width: "100%", maxWidth: 420 }}>
          <h2>Login</h2>
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginTop: 12 }} />
          <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
            <input type={show ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="button" className="sizzld-btn sizzld-btn-outline sizzld-btn-sm" onClick={() => setShow((s) => !s)}>{show ? "Hide" : "Show"}</button>
          </div>
          <button type="button" className="sizzld-btn sizzld-btn-outline sizzld-btn-sm" style={{ marginTop: 10 }} onClick={() => setOpen(true)}>Forgot password?</button>
          <button className="sizzld-btn sizzld-btn-primary" style={{ marginTop: 10 }}>Login</button>
          <p style={{ marginTop: 8 }}>No account? <Link to="/register" style={{ color: "var(--accent-secondary)" }}>Register</Link></p>
        </form>
      </div>
      <Modal open={open} title="Reset password" onClose={() => setOpen(false)}>
        {step === "email" && <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />}
        {step === "otp" && <input placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />}
        {step === "reset" && <input placeholder="New password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />}
        <button className="sizzld-btn sizzld-btn-primary" style={{ marginTop: 10 }} onClick={forgotFlow}>Continue</button>
      </Modal>
    </div>
  );
}
