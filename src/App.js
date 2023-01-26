import './App.css';
import Login from './Components/Login/Login';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import VerificationCode from './Components/VerificationCode/VerificationCode';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import { useState, useRef } from 'react'
import { Route, Routes } from "react-router-dom";

function App() {
  const [isActive, setIsActive] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <Routes>
      <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/verification" element={<VerificationCode />} />
      <Route path="/admin-dashboard" element={<AdminDashboard isActive={isActive} setIsActive={setIsActive} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
