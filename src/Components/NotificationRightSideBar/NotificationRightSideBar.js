import React from 'react'
// import './NotificationRightSideBar.css'
import styles_dark from './NotificationRightSideBar_Dark.module.css';
import styles_light from './NotificationRightSideBar_Light.module.css';

function NotificationRightSideBar({ setSideBarActive, sideBarActive, theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light

    return (
        <div className={`${style.sidenav}`} style={{ width: sideBarActive ? '594px' : '0px', padding: sideBarActive ? '20px 10px 0px 50px' : '0px' }}>
            <div>
                <img className={`${style.top_icon}`} src="/notification-panel-icon.png" alt="" />
            </div>
            <div className={`${style.notification_panel}`}>
                <div className={`${style.notification_panel_head}`}>
                    <h3>NOTIFICATION</h3>
                    <div className={`${style.close_nav}`} onClick={() => setSideBarActive(false)}>
                        <img src="/arrow-right.svg" alt="" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-9 mx-auto'>
                        <div className={`${style.notification_nav} mt-3`}>
                            <nav>
                                <div className={`${style.nav_tabs} nav nav-tabs`} id="nav-tab" role="tablist">
                                    <button className={`${style.nav_link} nav-link active`} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">System Notice</button>
                                    <button className={`${style.nav_link} nav-link`} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Reward</button>
                                    <button className={`${style.nav_link} nav-link`} id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Activities</button>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className='col-md-11 mx-auto'>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className={`${style.notification_card} mt-3`}>
                                    <div className={`${style.card_head}`}>
                                        <h5><img src="/baja.svg" alt="" /> WEEKLY UPDATE <img src="/baja.svg" alt="" /></h5>
                                        <p><img src="/photo.png" alt="" /> SIZZLD.GAME OFFICIAL <span>1/9/2023, 8:31:26 PM</span></p>
                                    </div>
                                    <div className={`${style.card_body}`}>
                                        <h5 className='fw-bold'>Hi Danyal Uzma!</h5>
                                        <p className='mb-0'>Brand new week exciting slot releases, bumper events and special giveaways.</p>
                                        <p className='mb-0'><img src="/football.png" alt="" /> Messi Signed Jersey Giveaway!</p>
                                        <p className='mb-0'><img src="/money-bag.png" alt="" /> Cassino Events!</p>
                                        <p className='mb-0'><img src="/bank.png" alt="" /> New Slots!</p>
                                        <h6 className='fw-bold mt-3'>SIZZLD.GAME</h6>
                                        <div className={`${style.card_bottom}`}>
                                            <h6 className='fw-bold'>Click Here</h6>
                                            <p className='mb-0'>Click here to view our weekly update!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.notification_card} mt-3`}>
                                    <div className={`${style.card_head}`}>
                                        <h5><img src="/baja.svg" alt="" /> WEEKLY UPDATE <img src="/baja.svg" alt="" /></h5>
                                        <p><img src="/photo.png" alt="" /> SIZZLD.GAME OFFICIAL <span>1/9/2023, 8:31:26 PM</span></p>
                                    </div>
                                    <div className={`${style.card_body}`}>
                                        <h5 className='fw-bold'>Hi Danyal Uzma!</h5>
                                        <p className='mb-0'>Brand new week exciting slot releases, bumper events and special giveaways.</p>
                                        <p className='mb-0'><img src="/football.png" alt="" /> Messi Signed Jersey Giveaway!</p>
                                        <p className='mb-0'><img src="/money-bag.png" alt="" /> Cassino Events!</p>
                                        <p className='mb-0'><img src="/bank.png" alt="" /> New Slots!</p>
                                        <h6 className='fw-bold mt-3'>SIZZLD.GAME</h6>
                                        <div className={`${style.card_bottom}`}>
                                            <h6 className='fw-bold'>Click Here</h6>
                                            <p className='mb-0'>Click here to view our weekly update!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationRightSideBar