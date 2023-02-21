import React from 'react'
// import './SideBar.css'
import { Link, useLocation } from 'react-router-dom'
import styles_dark from './SideBar_dark.module.css';
import styles_light from './SideBar_Light.module.css';

function SideBar({ setIsActive, isActive, setTheme, theme }) {

  let location = useLocation();

  const style = theme === 'dark' ? styles_dark : styles_light

  return (
    <nav className={`sidebar-info ${style.sidebar}`} id="sidebar" style={{ width: isActive ? '80px' : '304px' }}>
      <div className={`${style.sidenav_top_images}`}>
        {theme == 'dark' ?
          <img src="/sidebar-close.png" className={`${style.sidenav_close}`} alt="" onClick={() => setIsActive((isActive) => !isActive)} />
          :
          <img src="/isco.png" className={`${style.sidenav_close}`} style={{ width: '31px' }} alt="" onClick={() => setIsActive((isActive) => !isActive)} />

        }
        {theme == 'dark' ?
          <img src="/sidenav-logo.svg" className={`${style.sidenav_logo} ${isActive ? 'd-none' : ''}`} alt="" />
          :
          <img src="/light-logo.svg" width='157px' height='44px' className={`${style.sidenav_logo} ${isActive ? 'd-none' : ''}`} alt="" />
        }
      </div>
      <div className={`sidebar-offcanvas sidebar-content-wrapper`}>
        <ul className={`${style.nav}`}>
          <li className={`${style.nav_item} nav-item ${location.pathname == '/admin-dashboard/home' ? `${style.active}` : ''}`}>
            <Link className={`nav-link ${style.nav_link}`} to={'home'}>
              <img src="/home.png" alt="" />
              <span className={`menu-title`}>Dashboard</span>
            </Link>
          </li>

          <li className={`${style.nav_item} nav-item ${location.pathname == '/admin-dashboard/promotions' ? `${style.active}` : ''}`}>
            <Link className={`nav-link ${style.nav_link}`} to={'promotions'}>
              <img src="/promotions.png" alt="" />
              <span className={`menu-title`}>Promotions & Reward</span>
            </Link>
          </li>

          <li className={`${style.nav_item} nav-item ${location.pathname == '/admin-dashboard/earn-history' ? `${style.active}` : ''}`}>
            <Link className={`nav-link ${style.nav_link}`} to={'earn-history'}>
              <img src="/earn.png" alt="" />
              <span className={`menu-title`}>Earn History</span>
            </Link>
          </li>

          <li className={`${style.nav_item} nav-item ${location.pathname == '/admin-dashboard/reports' ? `${style.active}` : ''}`}>
            <Link className={`nav-link ${style.nav_link}`} to={'reports'}>
              <img src="/reports.png" alt="" />
              <span className={`menu-title`}>Reports</span>
            </Link>
          </li>

          <li className={`${style.nav_item} nav-item ${location.pathname == '/admin-dashboard/pending-approvals' ? `${style.active}` : ''}`}>
            <Link className={`nav-link ${style.nav_link}`} to={'pending-approvals'}>
              <img src="/pending.png" alt="" />
              <span className={`menu-title`}>Pending Approvals</span>
            </Link>
          </li>

          <li className={`${style.nav_item} nav-item ${location.pathname == '/admin-dashboard/game-rank' ? `${style.active}` : ''}`}>
            <Link className={`nav-link ${style.nav_link}`} to={'game-rank'}>
              <img src="/game.png" alt="" />
              <span className={`menu-title`}>Game Rank</span>
            </Link>
          </li>

          <li className={`${style.nav_item} nav-item ${location.pathname == '/admin-dashboard/available-payment' ? `${style.active}` : ''}`}>
            <Link className={`nav-link ${style.nav_link}`} to={'available-payment'}>
              <img src="/payment.png" alt="" />
              <span className={`menu-title`}>Available Payment</span>
            </Link>
          </li>

          <li className={`${style.nav_item} nav-item ${location.pathname == '/admin-dashboard/available-games' ? `${style.active}` : ''}`}>
            <Link className={`nav-link ${style.nav_link}`} to={'available-games'}>
              <img src="/dices.png" alt="" />
              <span className={`menu-title`}>Available Games</span>
            </Link>
          </li>

          <li className={`${style.nav_item} nav-item ${location.pathname == '/admin-dashboard/hot-games' ? `${style.active}` : ''}`}>
            <Link className={`nav-link ${style.nav_link}`} to={'hot-games'}>
              <img src="/hot.png" alt="" />
              <span className={`menu-title`}>Games Hot List</span>
            </Link>
          </li>

          <li className={`${style.nav_item} nav-item ${location.pathname == '/admin-dashboard/contest-banner' ? `${style.active}` : ''}`}>
            <Link className={`nav-link ${style.nav_link}`} to={'contest-banner'}>
              <img src="/billboard.png" alt="" />
              <span className={`menu-title`}>Banners For Contest</span>
            </Link>
          </li>

          <li className={`${style.nav_item} nav-item ${location.pathname == '/admin-dashboard/bet-winners' ? `${style.active}` : ''}`}>
            <Link className={`nav-link ${style.nav_link}`} to={'bet-winners'}>
              <img src="/trophy.png" alt="" />
              <span className={`menu-title`}>Bets Winners</span>
            </Link>
          </li>

          <li className={`${style.nav_item} nav-item ${location.pathname == '/admin-dashboard/gvip-svip-evip' ? `${style.active}` : ''}`}>
            <Link className={`nav-link ${style.nav_link}`} to={'gvip-svip-evip'}>
              <img src="/crown.png" alt="" />
              <span className={`menu-title`}>VIP/SVIP/EVIP <br /> (Perks & Cautions)</span>
            </Link>
          </li>

          <li className={`${style.nav_item} nav-item ${location.pathname == '/admin-dashboard/user-agreement' ? `${style.active}` : ''}`}>
            <Link className={`nav-link ${style.nav_link}`} to={'user-agreement'}>
              <img src="/handshake.png" alt="" />
              <span className={`menu-title`}>User Agreement & <br /> Privacy Policy</span>
            </Link>
          </li>

          <li className={`${style.nav_item} nav-item ${location.pathname == '/admin-dashboard/support' ? `${style.active}` : ''}`}>
            <Link className={`nav-link ${style.nav_link}`} to={'support'}>
              <img src="/live-chat.png" alt="" />
              <span className={`menu-title`}>Chat & Support</span>
            </Link>
          </li>

          <li className={`${style.nav_item} ${style.language_link} nav-item `} data-bs-toggle="modal" data-bs-target="#exampleModal">
            <a className={`nav-link ${style.nav_link}`}>
              <img src="/languages.png" alt="" />
              <span className={`menu-title`}>Language Options</span>
            </a>
          </li>

          <li className={`${style.nav_item} nav-item ${location.pathname == '/admin-dashboard/affiliate' ? `${style.active}` : ''}`}>
            <Link className={`nav-link ${style.nav_link}`} to={'affiliate'}>
              <img src="/affiliate-marketing.png" alt="" />
              <span className={`menu-title`}>Affiliate <br /> (Rules & Terms)</span>
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