import React from 'react'
import "./NavBar.css"

function NavBar({setIsAuthenticated}) {
    return (
        <nav className="navbar navbar-expand-lg pt-4">
            <div className="container-fluid">
                <form className='navbar_search'>
                    <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                </form>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-4">
                            <ul className="nav nav-tabs toggle_switch border-bottom-0" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Lottery</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Lucky Spin</button>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item mx-4">
                            <div className='notifications'>
                                <img src="bell.png" alt="" />
                            </div>
                        </li>
                        <li className="nav-item ms-4 me-2">
                            <img src="photo.png" alt="" />
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Courtney Henry
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li onClick={()=> setIsAuthenticated(false)}>Logout</li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar