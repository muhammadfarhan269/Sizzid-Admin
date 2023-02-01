import './App.css';
import Login from './Components/Login/Login';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import VerificationCode from './Components/VerificationCode/VerificationCode';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import { useState, useRef, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Components/AdminDashboard/Home/Home';
import AvailableGames from './Components/AdminDashboard/AvailableGames/AvailableGames';
import PromotionsRewards from './Components/AdminDashboard/PromotionsRewards/PromotionsRewards';
import UserAgreement from './Components/AdminDashboard/UserAgreement/UserAgreement';
import { useNavigate, Link } from "react-router-dom";
import EarnHistory from './Components/AdminDashboard/EarnHistroy/EarnHistory';
import HotGamesList from './Components/AdminDashboard/HotGamesList/HotGamesList';
import PendingApprovals from './Components/AdminDashboard/PendingApprovals/PendingApprovals';

function App() {
  const [isActive, setIsActive] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [theme, setTheme] = useState('dark')
  const navigate = useNavigate();

  useEffect(() => {
    const getLogin = localStorage.getItem('loginCredentials')
    if (getLogin != null) {
      setIsAuthenticated(true)
      navigate("/admin-dashboard/home");

    }

  }, [])
  return (
    <Routes>
      <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/verification" element={<VerificationCode />} />
      <Route path="/admin-dashboard" element={<AdminDashboard isActive={isActive} setIsActive={setIsActive} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setTheme={setTheme} theme={theme} />} >
        <Route path="Home" element={<Home />} />
        <Route path="available-games" element={<AvailableGames />} />
        <Route path="promotions" element={<PromotionsRewards />} />
        <Route path="user-agreement" element={<UserAgreement />} />
        <Route path="earn-history" element={<EarnHistory />} />
        <Route path="hot-games" element={<HotGamesList />} />
        <Route path="pending-approvals" element={<PendingApprovals />} />
      </Route>
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
