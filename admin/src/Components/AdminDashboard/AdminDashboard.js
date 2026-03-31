import React from 'react'
import SideBar from '../SideBar/SideBar'
import NavBar from '../NavBar/NavBar'
import './AdminDashboard.css'
import { Navigate, Outlet } from "react-router-dom";
import NotificationRightSideBar from '../NotificationRightSideBar/NotificationRightSideBar';

function AdminDashboard({ setIsActive, isActive, isAuthenticated, setIsAuthenticated, setTheme, theme, setSideBarActive, sideBarActive }) {
    if (isAuthenticated !==  true) {
        return <Navigate replace to="/" />;
    } else {
    return (
        <div className='container-scroller'>
            <SideBar isActive={isActive} setIsActive={setIsActive} setTheme={setTheme} theme={theme} />
            <div className='container-fluid page-body-wrapper px-5' style={{background: theme == 'light' ? '#f5f5f5' : '#01022F', minHeight: '100vh'}}>
                <NavBar setIsAuthenticated={setIsAuthenticated} setSideBarActive={setSideBarActive} theme={theme} />
                <NotificationRightSideBar setSideBarActive={setSideBarActive} sideBarActive={sideBarActive} theme={theme} />
                <div className='main_panel'>
                    <div className='container-fluid'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default AdminDashboard