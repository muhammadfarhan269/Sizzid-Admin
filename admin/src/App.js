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
import UserDetail from './Components/AdminDashboard/UserDetail/UserDetail';
import UserDetailPopup from './Components/AdminDashboard/UserDetail/UserDetailPopup/UserDetailPopup';
import PendingApprovalModal from './Components/AdminDashboard/PendingApprovals/PendingApprovalModal/PendingApprovalModal';

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
      <LanguageModal theme={theme} />
      <EditProfile theme={theme} />
      <UserDetailPopup theme={theme} />
      <PendingApprovalModal theme={theme} />
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/verification" element={<VerificationCode />} />
        <Route path="/admin-dashboard" element={<AdminDashboard sideBarActive={sideBarActive} setSideBarActive={setSideBarActive} isActive={isActive} setIsActive={setIsActive} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setTheme={setTheme} theme={theme} />} >
          <Route path="Home" element={<Home theme={theme} />} />
          <Route path="available-games" element={<AvailableGames theme={theme} />} />
          <Route path="promotions" element={<PromotionsRewards theme={theme} />} />
          <Route path="user-agreement" element={<UserAgreement theme={theme} />} />
          <Route path="earn-history" element={<EarnHistory theme={theme} />} />
          <Route path="hot-games" element={<HotGamesList theme={theme} />} />
          <Route path="pending-approvals" element={<PendingApprovals theme={theme} />} />
          <Route path="contest-banner" element={<BannerOfContest theme={theme} />} />
          <Route path="gvip-svip-evip" element={<GVIP theme={theme} />} />
          <Route path="reports" element={<Reports theme={theme} />} />
          <Route path="affiliate" element={<Affiliate theme={theme} />} />
          <Route path="bet-winners" element={<BetWinners theme={theme} />} />
          <Route path="game-rank" element={<GameRank theme={theme} />} />
          <Route path="available-payment" element={<AvailablePayment theme={theme} />} />
          <Route path="support" element={<ChatSupport theme={theme} />} />
          <Route path="user-detail" element={<UserDetail theme={theme} />} />
        </Route>
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>

  );
}

export default App;
