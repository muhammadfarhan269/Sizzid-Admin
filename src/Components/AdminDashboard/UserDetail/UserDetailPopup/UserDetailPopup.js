import React from 'react'
import style from './UserDetailPopup.module.css'

function UserDetailPopup() {
    return (
        <div className={`${style.user_detail} modal fade`} id="userDetail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className={`${style.modal_dialog} modal-dialog`}>
                <div className="modal-content">
                    <div className={`${style.modal_header} modal-header`}>
                        <h5 className="modal-title" id="exampleModalLabel">User Name</h5>
                        <button type="button" className='btn' data-bs-dismiss="modal" aria-label="Close"><img src="/close-modal.svg" alt="" /></button>
                    </div>
                    <div className={`${style.modal_body} modal-body`}>
                        <ul className={`${style.user_detail_nav} nav nav-tabs`} id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className={`nav-link active`} id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Activities</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">earnings</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">bets</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="withdraw-tab" data-bs-toggle="tab" data-bs-target="#withdraw" type="button" role="tab" aria-controls="withdraw" aria-selected="false">Withdraw</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className={`${style.activities_table} table-responsive`}>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Session</th>
                                                <th>Time</th>
                                                <th>Data</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Session name</td>
                                                <td>06:08:55 PM</td>
                                                <td>08-09-2023</td>
                                                <hr />
                                            </tr>
                                            <tr>
                                                <td>Session name</td>
                                                <td>06:08:55 PM</td>
                                                <td>08-09-2023</td>
                                                <hr />
                                            </tr>
                                            <tr>
                                                <td>Session name</td>
                                                <td>06:08:55 PM</td>
                                                <td>08-09-2023</td>
                                                <hr />
                                            </tr>
                                            <tr>
                                                <td>Session name</td>
                                                <td>06:08:55 PM</td>
                                                <td>08-09-2023</td>
                                                <hr />
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className={`${style.earnings_table} table-responsive`}>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Game Name</th>
                                                <th>Bet Amount</th>
                                                <th>Earning</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Game name</td>
                                                <td className={`${style.bet_amount}`}>0.66667598645</td>
                                                <td className={`${style.earning}`}>0.66667598645 +</td>
                                                <hr />
                                            </tr>
                                            <tr>
                                                <td>Game name</td>
                                                <td className={`${style.bet_amount}`}>0.66667598645</td>
                                                <td className={`${style.earning}`}>0.66667598645 +</td>
                                                <hr />
                                            </tr>
                                            <tr>
                                                <td>Game name</td>
                                                <td className={`${style.bet_amount}`}>0.66667598645</td>
                                                <td className={`${style.earning}`}>0.66667598645 +</td>
                                                <hr />
                                            </tr>
                                            <tr>
                                                <td>Game name</td>
                                                <td className={`${style.bet_amount}`}>0.66667598645</td>
                                                <td className={`${style.earning}`}>0.66667598645 +</td>
                                                <hr />
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div className={`${style.earnings_table} table-responsive`}>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Game Name</th>
                                                <th>Lose</th>
                                                <th>Win</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Game name</td>
                                                <td className={`${style.bet_amount}`}>0.66667598645</td>
                                                <td className={`${style.earning}`}>0.66667598645 +</td>
                                                <hr />
                                            </tr>
                                            <tr>
                                                <td>Game name</td>
                                                <td className={`${style.bet_amount}`}>0.66667598645</td>
                                                <td className={`${style.earning}`}>0.66667598645 +</td>
                                                <hr />
                                            </tr>
                                            <tr>
                                                <td>Game name</td>
                                                <td className={`${style.bet_amount}`}>0.66667598645</td>
                                                <td className={`${style.earning}`}>0.66667598645 +</td>
                                                <hr />
                                            </tr>
                                            <tr>
                                                <td>Game name</td>
                                                <td className={`${style.bet_amount}`}>0.66667598645</td>
                                                <td className={`${style.earning}`}>0.66667598645 +</td>
                                                <hr />
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="withdraw" role="tabpanel" aria-labelledby="withdraw-tab">
                                <div className={`${style.earnings_table} table-responsive`}>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Game Name</th>
                                                <th>Amount</th>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Statuse</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Game name</td>
                                                <td className={`${style.bet_amount}`}>0.6666759 +</td>
                                                <td>08-02-2023</td>
                                                <td>08:35:2023</td>
                                                <td className={`${style.earning}`}>transfers</td>
                                                <hr />
                                            </tr>
                                            <tr>
                                                <td>Game name</td>
                                                <td className={`${style.bet_amount}`}>0.6666759 +</td>
                                                <td>08-02-2023</td>
                                                <td>08:35:2023</td>
                                                <td className={`${style.earning}`}>transfers</td>
                                                <hr />
                                            </tr>
                                            <tr>
                                                <td>Game name</td>
                                                <td className={`${style.bet_amount}`}>0.6666759 +</td>
                                                <td>08-02-2023</td>
                                                <td>08:35:2023</td>
                                                <td className={`${style.earning}`}>transfers</td>
                                                <hr />
                                            </tr>
                                            <tr>
                                                <td>Game name</td>
                                                <td className={`${style.bet_amount}`}>0.6666759 +</td>
                                                <td>08-02-2023</td>
                                                <td>08:35:2023</td>
                                                <td className={`${style.earning}`}>transfers</td>
                                                <hr />
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetailPopup