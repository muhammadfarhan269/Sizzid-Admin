import React from 'react'
import SideBar from '../SideBar/SideBar'
import NavBar from '../NavBar/NavBar'
import './AdminDashboard.css'
import { Navigate } from "react-router-dom";
import Home from './Home/Home';

function AdminDashboard({ setIsActive, isActive, isAuthenticated, setIsAuthenticated }) {
    console.log(isAuthenticated)
    // if (isAuthenticated !==  true) {
    //     return <Navigate replace to="/" />;
    // } else {
        return (
            <div className='container-scroller'>
                <SideBar isActive={isActive} setIsActive={setIsActive} />
                <div className='container-fluid page-body-wrapper px-5'>
                    <NavBar setIsAuthenticated={setIsAuthenticated}/>
                    <div className='main_panel'>
                        <Home />
                    </div>
                </div>
            </div>
        )
    // }
}

export default AdminDashboard