import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { claimReferralApi } from "../api/user";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useAuth } from "../hooks/useAuth";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({ email: "", username: "", password: "", referralCode: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(form.email, form.username, form.password);
      if (form.referralCode.trim()) {
        try {
          await claimReferralApi(form.referralCode.trim());
        } catch {
          // noop
        }
      }
      toast.success("Account created");
      navigate("/home");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <h1 className="text-2xl font-bold">Register</h1>
        <form className="mt-4 space-y-3" onSubmit={onSubmit}>
          <input className="w-full rounded-lg border-dark-500 bg-dark-800" placeholder="Email" value={form.email} onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))} />
          <input className="w-full rounded-lg border-dark-500 bg-dark-800" placeholder="Username" value={form.username} onChange={(e) => setForm((s) => ({ ...s, username: e.target.value }))} />
          <input className="w-full rounded-lg border-dark-500 bg-dark-800" type="password" placeholder="Password" value={form.password} onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))} />
          <input className="w-full rounded-lg border-dark-500 bg-dark-800" placeholder="Referral code (optional)" value={form.referralCode} onChange={(e) => setForm((s) => ({ ...s, referralCode: e.target.value }))} />
          <Button fullWidth loading={loading}>
            Create account
          </Button>
        </form>
        <p className="mt-3 text-sm text-slate-300">
          Already registered? <Link className="text-brand-primary" to="/login">Login</Link>
        </p>
      </Card>
    </div>
  );
}
