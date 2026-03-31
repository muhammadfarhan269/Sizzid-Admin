import React from 'react'
import styles_dark from './Navbar_Dark.module.css';
import styles_light from './NavBar_Light.module.css';

function NavBar({ setIsAuthenticated, setSideBarActive, theme }) {

  const style = theme === 'dark' ? styles_dark : styles_light

  return (
    <nav className={`navbar navbar-expand-lg pt-4 ${style.admin_nav}`}>
      <div className="container-fluid">
        <form className={`${style.navbar_search}`}>
          <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
        </form>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-4">
              <ul className={`nav nav-tabs ${style.toggle_switch} border-bottom-0`} id="myTab" role="tablist">
                <li className={`nav-item ${style.nav_item}`} role="presentation">
                  <button className={`nav-link active ${style.nav_link} rounded-start`} id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Lottery</button>
                </li>
                <li className={`nav-item ${style.nav_item}`} role="presentation">
                  <button className={`nav-link ${style.nav_link} rounded-end`} id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Lucky Spin</button>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-4">
              <div className={`${style.notifications}`} onClick={() => setSideBarActive(true)}>
                {theme == 'dark' ?
                  <img src="/bell.png"  />
                  :
                  <img src="/light-bell.svg" />

                }
              </div>
            </li>
            <li className={`nav-item dropdown ${style.profile_link_nav}`}>
              <a className={`nav-link dropdown-toggle pt-1 ${style.name}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="/photo.png" className='me-3' alt="" />
                Courtney Henry
              </a>
              <ul className={`dropdown-menu ${style.nav_profile}`} aria-labelledby="navbarDropdown">
                <div className='position-relative h-100 w-100'>
                  <div className={`${style.profile_section}`}>
                    <div className={`${style.header} position-relative`}>
                      <img src="/edit-profile.svg" className={`${style.edit_profile_icon}`} alt="" data-bs-toggle="modal" data-bs-target="#editProfile" />
                      <img src="/Photo.svg" alt="" />
                      <h4 className='fw-bold'>Courtney Henry</h4>
                      <p>edward786@gamil.com</p>
                      <div className={`${style.footer}`} onClick={() => { setIsAuthenticated(false); localStorage.clear() }}>
                        <img src="/logout.svg" alt="" /> Logout
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar