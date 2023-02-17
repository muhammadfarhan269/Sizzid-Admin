import React from 'react'
import style from './PendingApprovalModal.module.css'

function PendingApprovalModal() {

    return (
        <>
            <div className={`${style.pending_approval_modal} modal fade`} id="pendingApprovalModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className={`${style.modal_dialog} modal-dialog`}>
                    <div className="modal-content">
                        <div className={`${style.modal_header} modal-header`}>
                            <h5 className="modal-title" id="exampleModalLabel">Game Name</h5>
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close"><img src="/close-modal.svg" alt="" /></button>
                        </div>
                        <div className={`${style.modal_body} modal-body pb-0`}>
                            <div className={`${style.inner_body}`}>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <p><span className={`${style.label}`}>Request By :</span> Name</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p><span className={`${style.label}`}>Game Name :</span> Name</p>
                                    </div>
                                    <div className='col-md-12'>
                                        <p className={`${style.game_detail} mt-3 mb-2`}>Game Detail</p>
                                        <p className={`${style.game_descriptiom}`}>We are a fair and impartial prediction and guessing platform.
                                            Our goal is to eliminate all unfair factors and make players feel comfortable and have fun.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.modal_footer} modal-footer justify-content-center`}>
                            <button type="button" className="btn" data-bs-dismiss="modal"><img src="/discard.svg" alt="" /></button>
                            <button type="button" className="btn"><img src="/save.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${style.pending_approval_modal} modal fade`} id="pendingApprovalModalPayment" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className={`${style.modal_dialog} modal-dialog`}>
                    <div className="modal-content">
                        <div className={`${style.modal_header} modal-header`}>
                            <h5 className="modal-title" id="exampleModalLabel">Game Name</h5>
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close"><img src="/close-modal.svg" alt="" /></button>
                        </div>
                        <div className={`${style.modal_body} modal-body pb-0`}>
                            <div className={`${style.inner_body}`}>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <p><span className={`${style.label}`}>Payment :</span> Name</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p><span className={`${style.label}`}>Statuse :</span> Done</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p><span className={`${style.label}`}>Time :</span> 05:32:55 PM</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p><span className={`${style.label}`}>Date :</span> 08-25-2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.modal_footer} modal-footer justify-content-center`}>
                            <button type="button" className="btn" data-bs-dismiss="modal"><img src="/discard.svg" alt="" /></button>
                            <button type="button" className="btn"><img src="/save.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${style.pending_approval_modal} modal fade`} id="pendingApprovalModalDocument" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className={`${style.modal_dialog} modal-dialog`}>
                    <div className="modal-content">
                        <div className={`${style.modal_header} modal-header`}>
                            <h5 className="modal-title" id="exampleModalLabel">Game Name</h5>
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close"><img src="/close-modal.svg" alt="" /></button>
                        </div>
                        <div className={`${style.modal_body} modal-body pb-0`}>
                            <div className={`${style.inner_body}`}>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <p><span className={`${style.label}`}>Document Type :</span> Name</p>
                                    </div>
                                    <div className='col-md-12'>
                                        <p className={`${style.game_detail} mt-3 mb-2`}>Game Detail</p>
                                        <p className={`${style.game_descriptiom}`}>We are a fair and impartial prediction and guessing platform.
                                            Our goal is to eliminate all unfair factors and make players feel comfortable and have fun.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.modal_footer} modal-footer justify-content-center`}>
                            <button type="button" className="btn" data-bs-dismiss="modal"><img src="/discard.svg" alt="" /></button>
                            <button type="button" className="btn"><img src="/save.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PendingApprovalModal