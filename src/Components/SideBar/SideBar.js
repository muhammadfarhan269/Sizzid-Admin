import React from 'react'
import './SideBar.css'

function SideBar({ setIsActive, isActive }) {

    return (
        <nav className="sidebar sidebar-info" id="sidebar" style={{ width: isActive ? '80px' : '304px' }}>
            <div className='sidenav_top_images'>
                <img src="sidebar-close.png" className='sidenav_close' alt="" onClick={() => setIsActive((isActive) => !isActive)} />
                <img src="sidenav-logo.svg" className={`sidenav_logo ${isActive ? 'd-none' : ''}`} alt="" />
            </div>
            <div className="sidebar-content-wrapper sidebar-offcanvas">
                <ul className="nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="dashboard.html">
                            <img src="home.png" alt="" />
                            <span className="menu-title">Home</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                            <img src="dashboard.png" alt="" />
                            <span className="menu-title">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                            <img src="promotions.png" alt="" />
                            <span className="menu-title">Promotions & Reward</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                            <img src="earn.png" alt="" />
                            <span className="menu-title">Earn History</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                            <img src="reports.png" alt="" />
                            <span className="menu-title">Reports</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                            <img src="reports.png" alt="" />
                            <span className="menu-title">Reports</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                            <img src="pending.png" alt="" />
                            <span className="menu-title">Pending Approvals</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                            <img src="game.png" alt="" />
                            <span className="menu-title">Game Rank</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                            <img src="payment.png" alt="" />
                            <span className="menu-title">Available Payment</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                            <img src="dices.png" alt="" />
                            <span className="menu-title">Available Games</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                            <img src="hot.png" alt="" />
                            <span className="menu-title">Games Hot List</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                            <img src="billboard.png" alt="" />
                            <span className="menu-title">Banners For Contest</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                            <img src="trophy.png" alt="" />
                            <span className="menu-title">Bets Winners</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                            <img src="crown.png" alt="" />
                            <span className="menu-title">VIP/SVIP/EVIP <br /> (Perks & Cautions)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                            <img src="handshake.png" alt="" />
                            <span className="menu-title">User Agreement & <br /> Privacy Policy</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                            <img src="live-chat.png" alt="" />
                            <span className="menu-title">Chat & Support</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                            <img src="languages.png" alt="" />
                            <span className="menu-title">Language Options</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="dashboard.html">
                            <img src="affiliate-marketing.png" alt="" />
                            <span className="menu-title">Affiliate <br /> (Rules & Terms)</span>
                        </a>
                    </li>
                </ul>
                <ul className="nav nav-tabs toggle_switch border-bottom-0 theme_conversion_buttons ms-3" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><img className='me-1 pt-1' src="dark.png" alt="" /> Dark</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img className='me-1' src="light.png" alt="" /> LIGHT</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default SideBar