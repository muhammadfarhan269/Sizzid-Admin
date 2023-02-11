import React, { useState } from 'react'
import './ChatSupport.css'

function ChatSupport() {

    const [chat, setChat] = useState(false)

    return (
        <div className='row'>
            <div className='col-md-8 my-3'>
                <h3 className='page_title'>Chat and support {chat && <img src="/mk.svg" />}</h3>
            </div>
            <div className='col-md-4 ms-auto my-3'>
                {!chat ?
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className="input-group mb-3">
                                <input type="search" placeholder='Search...' className="form-control chat_search" id="exampleInputPassword1" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <button className='btn btn_filter'>Filter <img src="/three-lines.svg" alt="" /></button>
                        </div>
                    </div>
                    :
                    <div className='row'>
                        <div className='col-md-8'>
                            <img src="/urgent-dropdown.svg" className='float-end urgent_dropdown' alt="" />
                        </div>
                        <div className='col-md-4'>
                            <img src="/open-dropdown.svg" className='open_dropdown' alt="" />
                        </div>
                    </div>
                }
            </div>
            <div className='col-md-12'>
                <div className='games_card'>
                    {!chat ?
                        <div className='row'>
                            <div className='col-md-12'>
                                <ul className="nav nav-tabs chat_nav" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Unassigned</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Assigned to me</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">All Tickets</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="archive-tab" data-bs-toggle="tab" data-bs-target="#archive" type="button" role="tab" aria-controls="archive" aria-selected="false">Archive</button>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-12'>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='chat_card' onClick={() => setChat(true)}>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <h4 className='title'>Cannot Access the files</h4>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <p className='time_stamp'>3hr Ago</p>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <p className='description'>Life seasons open have. Air have of life , The the files has been deleted unassigned  to me assigned to you. All need a tickets  game hot listen access needs power.</p>
                                                        </div>
                                                        <div className='col-md-12 mt-4'>
                                                            <button className='btn btn_alarm'>Urgent <img src="/alarm.svg" alt="" /></button>
                                                            <button className='btn btn_mk'>#MK34 <img src="/arrow-right-green.svg" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='chat_card' onClick={() => setChat(true)}>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <h4 className='title'>Cannot Access the files</h4>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <p className='time_stamp'>3hr Ago</p>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <p className='description'>Life seasons open have. Air have of life , The the files has been deleted unassigned  to me assigned to you. All need a tickets  game hot listen access needs power.</p>
                                                        </div>
                                                        <div className='col-md-12 mt-4'>
                                                            <button className='btn btn_alarm'>Urgent <img src="/alarm.svg" alt="" /></button>
                                                            <button className='btn btn_mk'>#MK34 <img src="/arrow-right-green.svg" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='chat_card' onClick={() => setChat(true)}>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <h4 className='title'>Cannot Access the files</h4>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <p className='time_stamp'>3hr Ago</p>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <p className='description'>Life seasons open have. Air have of life , The the files has been deleted unassigned  to me assigned to you. All need a tickets  game hot listen access needs power.</p>
                                                        </div>
                                                        <div className='col-md-12 mt-4'>
                                                            <button className='btn btn_alarm'>Urgent <img src="/alarm.svg" alt="" /></button>
                                                            <button className='btn btn_mk'>#MK34 <img src="/arrow-right-green.svg" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='chat_card' onClick={() => setChat(true)}>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <h4 className='title'>Cannot Access the files</h4>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <p className='time_stamp'>3hr Ago</p>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <p className='description'>Life seasons open have. Air have of life , The the files has been deleted unassigned  to me assigned to you. All need a tickets  game hot listen access needs power.</p>
                                                        </div>
                                                        <div className='col-md-12 mt-4'>
                                                            <button className='btn btn_alarm'>Urgent <img src="/alarm.svg" alt="" /></button>
                                                            <button className='btn btn_mk'>#MK34 <img src="/arrow-right-green.svg" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='chat_card' onClick={() => setChat(true)}>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <h4 className='title'>Cannot Access the files</h4>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <p className='time_stamp'>3hr Ago</p>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <p className='description'>Life seasons open have. Air have of life , The the files has been deleted unassigned  to me assigned to you. All need a tickets  game hot listen access needs power.</p>
                                                        </div>
                                                        <div className='col-md-12 mt-4'>
                                                            <button className='btn btn_alarm'>Urgent <img src="/alarm.svg" alt="" /></button>
                                                            <button className='btn btn_mk'>#MK34 <img src="/arrow-right-green.svg" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='chat_card' onClick={() => setChat(true)}>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <h4 className='title'>Cannot Access the files</h4>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <p className='time_stamp'>3hr Ago</p>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <p className='description'>Life seasons open have. Air have of life , The the files has been deleted unassigned  to me assigned to you. All need a tickets  game hot listen access needs power.</p>
                                                        </div>
                                                        <div className='col-md-12 mt-4'>
                                                            <button className='btn btn_alarm'>Urgent <img src="/alarm.svg" alt="" /></button>
                                                            <button className='btn btn_mk'>#MK34 <img src="/arrow-right-green.svg" alt="" /></button>
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
                                <h5 className='title'>Cannot Access the files</h5>
                            </div>
                            <div className='col-md-6'>
                                <div className='chat_card'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <h4 className='title'>Cannot Access the files</h4>
                                        </div>
                                        <div className='col-md-6'>
                                            <p className='time_stamp'>3hr Ago</p>
                                        </div>
                                        <div className='col-md-12'>
                                            <p className='description'>Life seasons open have. Air have of life , The the files has been deleted unassigned  to me assigned to you. All need a tickets  game hot listen access needs power.</p>
                                        </div>
                                        <div className='col-md-12 mt-4'>
                                            <button className='btn btn_alarm'>Urgent <img src="/alarm.svg" alt="" /></button>
                                            <button className='btn btn_mk'>#MK34 <img src="/arrow-right-green.svg" alt="" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chat_box position-relative'>
                                    <img src="/chat.svg" className='w-100' alt="" />
                                    <div className='chat_input'>
                                        <div className="input-group">
                                            <span className="input-group-text"><img src="/smile.svg" alt="" /></span>
                                            <input type="text" className="form-control" placeholder='Write your response to kathryn' aria-label="Amount (to the nearest dollar)" />
                                                <span className="input-group-text"><img src="/send.svg" alt="" /></span>
                                        </div>
                                        <div className='row mt-2'>
                                            <div className='col-md-6'>
                                                <img src="/intern.svg" alt="" />
                                            </div>
                                            <div className='col-md-6'>
                                                <img src="/attach.svg" className='float-end' alt="" />
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