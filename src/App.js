import './App.css';
import Login from './Components/Login/Login';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import VerificationCode from './Components/VerificationCode/VerificationCode';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import { useState, useRef } from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Components/AdminDashboard/Home/Home';
import AvailableGames from './Components/AdminDashboard/AvailableGames/AvailableGames';
import PromotionsRewards from './Components/AdminDashboard/PromotionsRewards/PromotionsRewards';
import UserAgreement from './Components/AdminDashboard/UserAgreement/UserAgreement';

function App() {
  const [isActive, setIsActive] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [theme, setTheme] = useState('dark')
  return (
    <Routes>
      <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/verification" element={<VerificationCode />} />
      <Route path="/admin-dashboard" element={<AdminDashboard isActive={isActive} setIsActive={setIsActive} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setTheme={setTheme} theme={theme}/>} >
        <Route path="Home" element={<Home />} />
        <Route path="available-games" element={<AvailableGames />} />
        <Route path="promotions" element={<PromotionsRewards />} />
        <Route path="user-agreement" element={<UserAgreement />} />
      </Route>
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
