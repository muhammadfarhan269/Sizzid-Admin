import React from 'react'
import './PendingApprovals.css'

function PendingApprovals() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-4 mt-4 d-flex'>
                    <h3 className='page_title'>pending approvals</h3>
                    <button className='btn btn_upload_games'>Upload Game <img src="/plus.png" alt="" /></button>
                </div>
                <div className='col-md-7 mt-4'>
                    <div className='promotions_rewards_nav_button'>
                        <ul>
                            <li className='active'>Classic Dice</li>
                            <li>Mines</li>
                            <li>Ultimate Dice</li>
                            <li>Beauties</li>
                            <li>Plinko</li>
                            <li>Cave</li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-12'>
                    <table class="table earn_history_table mt-4">
                        <thead>
                            <tr>
                                <th >Game Name</th>
                                <th >Approval Type</th>
                                <th >Total Wining</th>
                                <th >Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='game_name'>Name 1</td>
                                <td className='bet_amount'><button className='btn btn_game_upload'>Game Upload</button></td>
                                <td className='total_wining'>0.66667598645 +</td>
                                <td className='view_all'>View All</td>
                                <hr />
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PendingApprovals