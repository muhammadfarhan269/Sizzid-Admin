import React from 'react'
import styles_dark from './PendingApproval_Dark.module.css';
import styles_light from './PendingApproval_Light.module.css';

function PendingApprovals({ theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light

    return (
        <div className='row'>
            <div className='col-md-5 mt-4 d-flex'>
                <h3 className={`${style.page_title}`}>pending approvals</h3>
                <button className={`btn ${style.btn_upload_games}`}>Upload Game <img src="/plus.png" alt="" /></button>
            </div>
            <div className='col-md-7 mt-4'>
                <div className={`${style.pending_approval_nav_button}`}>
                    <ul>
                        <li className={`${style.active}`}>Classic Dice</li>
                        <li>Mines</li>
                        <li>Ultimate Dice</li>
                        <li>Beauties</li>
                        <li>Plinko</li>
                        <li>Cave</li>
                    </ul>
                </div>
            </div>
            <div className='col-md-12'>
                <table class={`table ${style.pending_approval_table} mt-4`}>
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
                            <td className={`${style.game_name}`}>Name 1</td>
                            <td className={`${style.approval_type}`}><div className={`${style.game_upload}`}>Game Upload</div></td>
                            <td className={`${style.total_wining}`}>0.66667598645 +</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}>Name 1</td>
                            <td className={`${style.approval_type}`}><div className={`${style.game_upload}`}>Game Upload</div></td>
                            <td className={`${style.total_wining}`}>0.66667598645 +</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}>Name 1</td>
                            <td className={`${style.approval_type}`}><div className={`${style.payment}`}>Payment</div></td>
                            <td className={`${style.total_wining}`}>0.66667598645 +</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}>Name 1</td>
                            <td className={`${style.approval_type}`}><div className={`${style.payment}`}>Payment</div></td>
                            <td className={`${style.total_wining}`}>0.66667598645 +</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}>Name 1</td>
                            <td className={`${style.approval_type}`}><div className={`${style.document}`}>Document</div></td>
                            <td className={`${style.total_wining}`}>0.66667598645 +</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}>Name 1</td>
                            <td className={`${style.approval_type}`}><div className={`${style.game_upload}`}>Game Upload</div></td>
                            <td className={`${style.total_wining}`}>0.66667598645 +</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}>Name 1</td>
                            <td className={`${style.approval_type}`}><div className={`${style.game_upload}`}>Game Upload</div></td>
                            <td className={`${style.total_wining}`}>0.66667598645 +</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}>Name 1</td>
                            <td className={`${style.approval_type}`}><div className={`${style.document}`}>Document</div></td>
                            <td className={`${style.total_wining}`}>0.66667598645 +</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}>Name 1</td>
                            <td className={`${style.approval_type}`}><div className={`${style.game_upload}`}>Game Upload</div></td>
                            <td className={`${style.total_wining}`}>0.66667598645 +</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}>Name 1</td>
                            <td className={`${style.approval_type}`}><div className={`${style.document}`}>Document</div></td>
                            <td className={`${style.total_wining}`}>0.66667598645 +</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}>Name 1</td>
                            <td className={`${style.approval_type}`}><div className={`${style.payment}`}>Payment</div></td>
                            <td className={`${style.total_wining}`}>0.66667598645 +</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}>Name 1</td>
                            <td className={`${style.approval_type}`}><div className={`${style.game_upload}`}>Game Upload</div></td>
                            <td className={`${style.total_wining}`}>0.66667598645 +</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#pendingApprovalModal"><span>View All</span></td>
                            <hr />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PendingApprovals