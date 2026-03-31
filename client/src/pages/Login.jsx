import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(form.email, form.password);
      toast.success("Welcome back!");
      navigate("/home");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <h1 className="text-2xl font-bold">Login</h1>
        <form className="mt-4 space-y-3" onSubmit={onSubmit}>
          <input className="w-full rounded-lg border-dark-500 bg-dark-800" placeholder="Email" value={form.email} onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))} />
          <div className="relative">
            <input
              className="w-full rounded-lg border-dark-500 bg-dark-800 pr-16"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))}
            />
            <button type="button" className="absolute right-2 top-2 text-xs" onClick={() => setShowPassword((v) => !v)}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <p className="text-xs text-slate-400">Forgot password?</p>
          <Button fullWidth loading={loading}>
            Login
          </Button>
        </form>
        <p className="mt-3 text-sm text-slate-300">
          No account? <Link className="text-brand-primary" to="/register">Register</Link>
        </p>
      </Card>
    </div>
  );
}
