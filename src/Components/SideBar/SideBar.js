import React from 'react'
import './SideBar.css'
import { Link, useLocation } from 'react-router-dom'
function SideBar({ setIsActive, isActive, setTheme, theme }) {

  let location = useLocation();

  return (
    <nav className="sidebar sidebar-info" id="sidebar" style={{ width: isActive ? '80px' : '304px', background: theme == 'light' ? '#fff' : '#202447' }}>
      <div className='sidenav_top_images'>
        {theme == 'dark' ?
          <img src="/sidebar-close.png" className='sidenav_close' alt="" onClick={() => setIsActive((isActive) => !isActive)} />
          :
          <img src="/isco.png" className='sidenav_close' style={{ width: '31px' }} alt="" onClick={() => setIsActive((isActive) => !isActive)} />

        }
        {theme == 'dark' ?
          <img src="/sidenav-logo.svg" className={`sidenav_logo ${isActive ? 'd-none' : ''}`} alt="" />
          :
          <img src="/light-logo.svg" width='157px' height='44px' className={`sidenav_logo ${isActive ? 'd-none' : ''}`} alt="" />
        }
      </div>
      <div className="sidebar-content-wrapper sidebar-offcanvas">
        <ul className="nav">
          <li className={`nav-item ${location.pathname == '/admin-dashboard/home' ? 'active' : ''}`}>
            <Link className="nav-link" to={'home'} style={{ color: theme == 'light' ? '#000' : '#fff' }}>
              <img src="/home.png" alt="" />
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className={`nav-item ${location.pathname == '/admin-dashboard/promotions' ? 'active' : ''}`}>
            <Link className="nav-link" to={'promotions'} style={{ color: theme == 'light' ? '#000' : '#fff' }}>
              <img src="/promotions.png" alt="" />
              <span className="menu-title">Promotions & Reward</span>
            </Link>
          </li>
          <li className={`nav-item ${location.pathname == '/admin-dashboard/earn-history' ? 'active' : ''}`}>
            <Link className="nav-link" to={'earn-history'} style={{ color: theme == 'light' ? '#000' : '#fff' }}>
              <img src="/earn.png" alt="" />
              <span className="menu-title">Earn History</span>
            </Link>
          </li>
          <li className={`nav-item ${location.pathname == '/admin-dashboard/reports' ? 'active' : ''}`}>
            <Link className="nav-link" to={'reports'} style={{ color: theme == 'light' ? '#000' : '#fff' }}>
              <img src="/reports.png" alt="" />
              <span className="menu-title">Reports</span>
            </Link>
          </li>

          <li className={`nav-item ${location.pathname == '/admin-dashboard/pending-approvals' ? 'active' : ''}`}>
            <Link className="nav-link" to={'pending-approvals'} style={{ color: theme == 'light' ? '#000' : '#fff' }}>
              <img src="/pending.png" alt="" />
              <span className="menu-title">Pending Approvals</span>
            </Link>
          </li>

          <li className={`nav-item ${location.pathname == '/admin-dashboard/user-detail' ? 'active' : ''}`}>
            <Link className="nav-link" to={'user-detail'} style={{ color: theme == 'light' ? '#000' : '#fff' }}>
              <img src="/man.svg" alt="" />
              <span className="menu-title">User Detail</span>
            </Link>
          </li>

          <li className={`nav-item ${location.pathname == '/admin-dashboard/game-rank' ? 'active' : ''}`}>
            <Link className="nav-link" to={'game-rank'} style={{ color: theme == 'light' ? '#000' : '#fff' }}>
              <img src="/game.png" alt="" />
              <span className="menu-title">Game Rank</span>
            </Link>
          </li>
          <li className={`nav-item ${location.pathname == '/admin-dashboard/available-payment' ? 'active' : ''}`}>
            <Link className="nav-link" to={'available-payment'} style={{ color: theme == 'light' ? '#000' : '#fff' }}>
              <img src="/payment.png" alt="" />
              <span className="menu-title">Available Payment</span>
            </Link>
          </li>
          <li className={`nav-item ${location.pathname == '/admin-dashboard/available-games' ? 'active' : ''}`}>
            <Link className="nav-link" to={'available-games'} style={{ color: theme == 'light' ? '#000' : '#fff' }}>
              <img src="/dices.png" alt="" />
              <span className="menu-title">Available Games</span>
            </Link>
          </li>
          <li className={`nav-item ${location.pathname == '/admin-dashboard/hot-games' ? 'active' : ''}`}>
            <Link className="nav-link" to={'hot-games'} style={{ color: theme == 'light' ? '#000' : '#fff' }}>
              <img src="/hot.png" alt="" />
              <span className="menu-title">Games Hot List</span>
            </Link>
          </li>
          <li className={`nav-item ${location.pathname == '/admin-dashboard/contest-banner' ? 'active' : ''}`}>
            <Link className="nav-link" to={'contest-banner'} style={{ color: theme == 'light' ? '#000' : '#fff' }}>
              <img src="/billboard.png" alt="" />
              <span className="menu-title">Banners For Contest</span>
            </Link>
          </li>
          <li className={`nav-item ${location.pathname == '/admin-dashboard/bet-winners' ? 'active' : ''}`}>
            <Link className="nav-link" to={'bet-winners'} style={{ color: theme == 'light' ? '#000' : '#fff' }}>
              <img src="/trophy.png" alt="" />
              <span className="menu-title">Bets Winners</span>
            </Link>
          </li>
          <li className={`nav-item ${location.pathname == '/admin-dashboard/gvip-svip-evip' ? 'active' : ''}`}>
            <Link className="nav-link" to={'gvip-svip-evip'} style={{ color: theme == 'light' ? '#000' : '#fff' }}>
              <img src="/crown.png" alt="" />
              <span className="menu-title">VIP/SVIP/EVIP <br /> (Perks & Cautions)</span>
            </Link>
          </li>
          <li className={`nav-item ${location.pathname == '/admin-dashboard/user-agreement' ? 'active' : ''}`}>
            <Link className="nav-link" to={'user-agreement'} style={{ color: theme == 'light' ? '#000' : '#fff' }}>
              <img src="/handshake.png" alt="" />
              <span className="menu-title">User Agreement & <br /> Privacy Policy</span>
            </Link>
          </li>
          <li className={`nav-item ${location.pathname == '/admin-dashboard/support' ? 'active' : ''}`}>
            <Link className="nav-link" to={'support'} style={{ color: theme == 'light' ? '#000' : '#fff' }}>
              <img src="/live-chat.png" alt="" />
              <span className="menu-title">Chat & Support</span>
            </Link>
          </li>
          <li className="nav-item language-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <a className="nav-link" style={{ color: theme == 'light' ? '#000' : '#fff' }}>
              <img src="/languages.png" alt="" />
              <span className="menu-title">Language Options</span>
            </a>
          </li>
          <li className={`nav-item ${location.pathname == '/admin-dashboard/affiliate' ? 'active' : ''}`}>
            <Link className="nav-link" to={'affiliate'} style={{ color: theme == 'light' ? '#000' : '#fff' }}>
              <img src="/affiliate-marketing.png" alt="" />
              <span className="menu-title">Affiliate <br /> (Rules & Terms)</span>
            </Link>
          </li>
        </ul>
        <ul className="nav nav-tabs toggle_switch border-bottom-0 theme_conversion_buttons ms-3" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" onClick={() => setTheme('dark')} style={{ borderTopRightRadius: theme == 'dark' ? '0px' : '0px', borderBottomRightRadius: theme == 'dark' ? '0px' : '0px' }}><img className='me-1 pt-1' src="/dark.png" alt="" /> Dark</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" onClick={() => setTheme('light')} style={{ borderTopLeftRadius: theme == 'light' ? '0px' : '0px', borderBottomLeftRadius: theme == 'light' ? '0px' : '0px' }}><img className='me-1' src="/light.png" alt="" /> LIGHT</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default SideBar