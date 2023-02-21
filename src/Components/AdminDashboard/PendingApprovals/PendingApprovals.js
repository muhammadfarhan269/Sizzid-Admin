import React from 'react'
import './PendingApprovals.css'

function PendingApprovals() {
    return (
        <div className='row'>
            <div className='col-md-5 mt-4 d-flex'>
                <h3 className='page_title'>pending approvals</h3>
                <button className='btn btn_upload_games'>Upload Game <img src="/plus.png" alt="" /></button>
            </div>
            <div className='col-md-7 mt-4'>
                <div className='pending_approval_nav_button'>
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
                <table class="table pending_approval_table mt-4">
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
                            <td className='approval_type'><div className='game_upload'>Game Upload</div></td>
                            <td className='total_wining'>0.66667598645 +</td>
                            <td className='view_all' data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='game_name'>Name 1</td>
                            <td className='approval_type'><div className='game_upload'>Game Upload</div></td>
                            <td className='total_wining'>0.66667598645 +</td>
                            <td className='view_all' data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='game_name'>Name 1</td>
                            <td className='approval_type'><div className='payment'>Payment</div></td>
                            <td className='total_wining'>0.66667598645 +</td>
                            <td className='view_all' data-bs-toggle="modal" data-bs-target="#pendingApprovalModalPayment"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='game_name'>Name 1</td>
                            <td className='approval_type'><div className='payment'>Payment</div></td>
                            <td className='total_wining'>0.66667598645 +</td>
                            <td className='view_all' data-bs-toggle="modal" data-bs-target="#pendingApprovalModalPayment"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='game_name'>Name 1</td>
                            <td className='approval_type'><div className='document'>Document</div></td>
                            <td className='total_wining'>0.66667598645 +</td>
                            <td className='view_all' data-bs-toggle="modal" data-bs-target="#pendingApprovalModalDocument"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='game_name'>Name 1</td>
                            <td className='approval_type'><div className='game_upload'>Game Upload</div></td>
                            <td className='total_wining'>0.66667598645 +</td>
                            <td className='view_all' data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='game_name'>Name 1</td>
                            <td className='approval_type'><div className='game_upload'>Game Upload</div></td>
                            <td className='total_wining'>0.66667598645 +</td>
                            <td className='view_all' data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='game_name'>Name 1</td>
                            <td className='approval_type'><div className='document'>Document</div></td>
                            <td className='total_wining'>0.66667598645 +</td>
                            <td className='view_all' data-bs-toggle="modal" data-bs-target="#pendingApprovalModalDocument"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='game_name'>Name 1</td>
                            <td className='approval_type'><div className='game_upload'>Game Upload</div></td>
                            <td className='total_wining'>0.66667598645 +</td>
                            <td className='view_all' data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='game_name'>Name 1</td>
                            <td className='approval_type'><div className='document'>Document</div></td>
                            <td className='total_wining'>0.66667598645 +</td>
                            <td className='view_all' data-bs-toggle="modal" data-bs-target="#pendingApprovalModalDocument"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='game_name'>Name 1</td>
                            <td className='approval_type'><div className='payment'>Payment</div></td>
                            <td className='total_wining'>0.66667598645 +</td>
                            <td className='view_all' data-bs-toggle="modal" data-bs-target="#pendingApprovalModalPayment"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='game_name'>Name 1</td>
                            <td className='approval_type'><div className='game_upload'>Game Upload</div></td>
                            <td className='total_wining'>0.66667598645 +</td>
                            <td className='view_all' data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PendingApprovals