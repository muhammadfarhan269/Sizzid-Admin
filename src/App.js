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
import BannerOfContest from './Components/AdminDashboard/BannerOfContest/BannerOfContest';
import GVIP from './Components/AdminDashboard/GVIP/GVIP';
import Reports from './Components/AdminDashboard/Reports/Reports';
import Affiliate from './Components/AdminDashboard/Affiliate/Affiliate';
import BetWinners from './Components/AdminDashboard/BetWinners/BetWinners';
import GameRank from './Components/AdminDashboard/GameRank/GameRank';
import AvailablePayment from './Components/AdminDashboard/AvailablePayment/AvailablePayment';
import LanguageModal from './Components/AdminDashboard/LanguageModal/LanguageModal';
import ChatSupport from './Components/AdminDashboard/ChatSupport/ChatSupport';
import EditProfile from './Components/EditProfileModal/EditProfile';

function App() {
  const [isActive, setIsActive] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [sideBarActive, setSideBarActive] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const getLogin = localStorage.getItem('loginCredentials')
    if (getLogin != null) {
      setIsAuthenticated(true)
      navigate("/admin-dashboard/home");

    }

  }, [])
  return (
    <>
      <LanguageModal />
      <EditProfile />
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/verification" element={<VerificationCode />} />
        <Route path="/admin-dashboard" element={<AdminDashboard sideBarActive={sideBarActive} setSideBarActive={setSideBarActive} isActive={isActive} setIsActive={setIsActive} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setTheme={setTheme} theme={theme} />} >
          <Route path="Home" element={<Home />} />
          <Route path="available-games" element={<AvailableGames />} />
          <Route path="promotions" element={<PromotionsRewards />} />
          <Route path="user-agreement" element={<UserAgreement />} />
          <Route path="earn-history" element={<EarnHistory />} />
          <Route path="hot-games" element={<HotGamesList />} />
          <Route path="pending-approvals" element={<PendingApprovals />} />
          <Route path="contest-banner" element={<BannerOfContest />} />
          <Route path="gvip-svip-evip" element={<GVIP />} />
          <Route path="reports" element={<Reports />} />
          <Route path="affiliate" element={<Affiliate />} />
          <Route path="bet-winners" element={<BetWinners />} />
          <Route path="game-rank" element={<GameRank />} />
          <Route path="available-payment" element={<AvailablePayment />} />
          <Route path="support" element={<ChatSupport />} />
        </Route>
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>

  );
}

export default App;
