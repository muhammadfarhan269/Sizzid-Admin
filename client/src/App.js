import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Games from "./pages/Games";
import GamePlay from "./pages/GamePlay";
import Leaderboard from "./pages/Leaderboard";
import Rewards from "./pages/Rewards";
import Profile from "./pages/Profile";
import VipTiers from "./pages/VipTiers";
import Notifications from "./pages/Notifications";
import Support from "./pages/Support";
import Tournaments from "./pages/Tournaments";
import DailyChallenges from "./pages/DailyChallenges";
import NotFound from "./pages/NotFound";

function Protected({ children }) {
  const { isAuthenticated, isLoading } = useContext(AuthContext);
  if (isLoading) return <LoadingSpinner />;
  return isAuthenticated ? <Layout>{children}</Layout> : <Navigate to="/login" replace />;
}

function PublicWithLayout({ children }) {
  return <Layout>{children}</Layout>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/leaderboard" element={<PublicWithLayout><Leaderboard /></PublicWithLayout>} />
      <Route path="/games" element={<PublicWithLayout><Games /></PublicWithLayout>} />
      <Route path="/vip" element={<PublicWithLayout><VipTiers /></PublicWithLayout>} />

      <Route path="/home" element={<Protected><Home /></Protected>} />
      <Route path="/games/:id" element={<Protected><GamePlay /></Protected>} />
      <Route path="/rewards" element={<Protected><Rewards /></Protected>} />
      <Route path="/profile" element={<Protected><Profile /></Protected>} />
      <Route path="/notifications" element={<Protected><Notifications /></Protected>} />
      <Route path="/support" element={<Protected><Support /></Protected>} />
      <Route path="/tournaments" element={<Protected><Tournaments /></Protected>} />
      <Route path="/daily" element={<Protected><DailyChallenges /></Protected>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <AppRoutes />
    </AuthProvider>
  );
}
