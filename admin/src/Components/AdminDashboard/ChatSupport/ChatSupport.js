import React, { useState } from 'react'
import styles_dark from './ChatSupport_Dark.module.css'
import styles_light from './ChatSupport_Light.module.css'

function ChatSupport({ theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light
    const [chat, setChat] = useState(false)

    return (
        <div className='row'>
            <div className='col-md-8 my-3'>
                <h3 className={`${style.page_title}`}>Chat and support {chat && <img src="/mk.svg" />}</h3>
            </div>
            <div className='col-md-4 ms-auto my-3'>
                {!chat ?
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className="input-group mb-3">
                                <input type="search" placeholder='Search...' className={`form-control ${style.chat_search}`} id="exampleInputPassword1" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <button className={`btn ${style.btn_filter}`}>Filter <img src="/three-lines.svg" alt="" /></button>
                        </div>
                    </div>
                    :
                    <div className='row'>
                        <div className='col-md-8'>
                            <img src="/urgent-dropdown.svg" className={`float-end ${style.urgent_dropdown}`} alt="" />
                        </div>
                        <div className='col-md-4'>
                            <img src="/open-dropdown.svg" className={`${style.open_dropdown}`} alt="" />
                        </div>
                    </div>
                }
            </div>
            <div className='col-md-12'>
                <div className={`${style.chat_cards}`}>
                    {!chat ?
                        <div className='row'>
                            <div className='col-md-12'>
                                <ul className={`nav nav-tabs ${style.chat_nav}`} id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className={`${style.nav_link} nav-link active`} id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Unassigned</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={`${style.nav_link} nav-link`} id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Assigned to me</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={`${style.nav_link} nav-link`} id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">All Tickets</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={`${style.nav_link} nav-link`} id="archive-tab" data-bs-toggle="tab" data-bs-target="#archive" type="button" role="tab" aria-controls="archive" aria-selected="false">Archive</button>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-12'>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className={`${style.chat_card}`} onClick={() => setChat(true)}>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <h4 className={`${style.title}`}>Cannot Access the files</h4>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <p className={`${style.time_stamp}`}>3hr Ago</p>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <p className={`${style.description}`}>Life seasons open have. Air have of life , The the files has been deleted unassigned  to me assigned to you. All need a tickets  game hot listen access needs power.</p>
                                                        </div>
                                                        <div className='col-md-12 mt-4'>
                                                            <button className={`btn ${style.btn_alarm}`}>Urgent <img src="/alarm.svg" alt="" /></button>
                                                            <button className={`btn ${style.btn_mk}`}>#MK34 <img src="/arrow-right-green.svg" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className={`${style.chat_card}`} onClick={() => setChat(true)}>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <h4 className={`${style.title}`}>Cannot Access the files</h4>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <p className={`${style.time_stamp}`}>3hr Ago</p>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <p className={`${style.description}`}>Life seasons open have. Air have of life , The the files has been deleted unassigned  to me assigned to you. All need a tickets  game hot listen access needs power.</p>
                                                        </div>
                                                        <div className='col-md-12 mt-4'>
                                                            <button className={`btn ${style.btn_alarm}`}>Urgent <img src="/alarm.svg" alt="" /></button>
                                                            <button className={`btn ${style.btn_mk}`}>#MK34 <img src="/arrow-right-green.svg" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className={`${style.chat_card}`} onClick={() => setChat(true)}>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <h4 className={`${style.title}`}>Cannot Access the files</h4>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <p className={`${style.time_stamp}`}>3hr Ago</p>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <p className={`${style.description}`}>Life seasons open have. Air have of life , The the files has been deleted unassigned  to me assigned to you. All need a tickets  game hot listen access needs power.</p>
                                                        </div>
                                                        <div className='col-md-12 mt-4'>
                                                            <button className={`btn ${style.btn_alarm}`}>Urgent <img src="/alarm.svg" alt="" /></button>
                                                            <button className={`btn ${style.btn_mk}`}>#MK34 <img src="/arrow-right-green.svg" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className={`${style.chat_card}`} onClick={() => setChat(true)}>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <h4 className={`${style.title}`}>Cannot Access the files</h4>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <p className={`${style.time_stamp}`}>3hr Ago</p>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <p className={`${style.description}`}>Life seasons open have. Air have of life , The the files has been deleted unassigned  to me assigned to you. All need a tickets  game hot listen access needs power.</p>
                                                        </div>
                                                        <div className='col-md-12 mt-4'>
                                                            <button className={`btn ${style.btn_alarm}`}>Urgent <img src="/alarm.svg" alt="" /></button>
                                                            <button className={`btn ${style.btn_mk}`}>#MK34 <img src="/arrow-right-green.svg" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className={`${style.chat_card}`} onClick={() => setChat(true)}>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <h4 className={`${style.title}`}>Cannot Access the files</h4>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <p className={`${style.time_stamp}`}>3hr Ago</p>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <p className={`${style.description}`}>Life seasons open have. Air have of life , The the files has been deleted unassigned  to me assigned to you. All need a tickets  game hot listen access needs power.</p>
                                                        </div>
                                                        <div className='col-md-12 mt-4'>
                                                            <button className={`btn ${style.btn_alarm}`}>Urgent <img src="/alarm.svg" alt="" /></button>
                                                            <button className={`btn ${style.btn_mk}`}>#MK34 <img src="/arrow-right-green.svg" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className={`${style.chat_card}`} onClick={() => setChat(true)}>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <h4 className={`${style.title}`}>Cannot Access the files</h4>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <p className={`${style.time_stamp}`}>3hr Ago</p>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <p className={`${style.description}`}>Life seasons open have. Air have of life , The the files has been deleted unassigned  to me assigned to you. All need a tickets  game hot listen access needs power.</p>
                                                        </div>
                                                        <div className='col-md-12 mt-4'>
                                                            <button className={`btn ${style.btn_alarm}`}>Urgent <img src="/alarm.svg" alt="" /></button>
                                                            <button className={`btn ${style.btn_mk}`}>#MK34 <img src="/arrow-right-green.svg" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                                    <div class="tab-pane fade" id="archive" role="tabpanel" aria-labelledby="archive-tab">...</div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='row chat'>
                            <div className='col-md-12'>
                                <h5 className={`${style.title}`}>Cannot Access the files</h5>
                            </div>
                            <div className='col-md-6'>
                                <div className={`${style.chat_card}`}>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <h4 className={`${style.title}`}>Cannot Access the files</h4>
                                        </div>
                                        <div className='col-md-6'>
                                            <p className={`${style.time_stamp}`}>3hr Ago</p>
                                        </div>
                                        <div className='col-md-12'>
                                            <p className={`${style.description}`}>Life seasons open have. Air have of life , The the files has been deleted unassigned  to me assigned to you. All need a tickets  game hot listen access needs power.</p>
                                        </div>
                                        <div className='col-md-12 mt-4'>
                                            <button className={`btn ${style.btn_alarm}`}>Urgent <img src="/alarm.svg" alt="" /></button>
                                            <button className={`btn ${style.btn_mk}`}>#MK34 <img src="/arrow-right-green.svg" alt="" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className={`${style.chat_box} position-relative`}>
                                    {theme === 'dark' ? <img src="/chat.svg" className='w-100' alt="" /> : <img src="/chat-light.svg" className='w-100' alt="" />}
                                    <div className={`${style.chat_input}`}>
                                        <div className="input-group">
                                            <span className={`${style.input_group_text} input-group-text`}> {theme === 'dark' ? <img src="/smile.svg" alt="" /> : <img src="/smile-light.svg" alt="" />} </span>
                                            <input type="text" className="form-control" placeholder='Write your response to kathryn' aria-label="Amount (to the nearest dollar)" />
                                            <span className={`${style.input_group_text} input-group-text`}><img src="/send.svg" alt="" /></span>
                                        </div>
                                        <div className='row mt-2'>
                                            <div className='col-md-6'>
                                                {theme === 'dark' ? <img src="/intern.svg" alt="" /> : <img src="/intern-light.svg" alt="" />}
                                            </div>
                                            <div className='col-md-6'>
                                                {theme === 'dark' ? <img src="/attach.svg" className='float-end' alt="" /> : <img src="/attach-light.svg" className='float-end' alt="" />}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ChatSupport