import React from 'react'
import { Link } from "react-router-dom";
import './ResetPassword.css'

function ResetPassword() {
    return (
        <section className='reset_password_page'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6 position-relative'>
                        <div className='reset_password_left_panel'>
                            <img src="logo.svg" className='reset_password_logo' alt="" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='reset_password_right_panel position-relative vh-100'>
                            <div className='reset_password_card'>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title mt-3">Re-Set Password</h5>
                                        <form className='reset_password_form'>
                                            <div>
                                                <input type="email" className="form-control" id="reset_password_email" aria-describedby="emailHelp" placeholder='Enter your Email'/>
                                            </div>
                                            {/* <div className="mb-5 form-check">
                                                <p className='redirect_login'>Login</p>
                                            </div> */}
                                          <Link to={'/verification'}><button type="button" className="btn btn_login mt-4">Next <img src="arrow-right.png" className='float-end' alt="" /></button></Link>
                                        </form>
                                        <h5 className='verification_code_card_bottom'>Check Your Inbox</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResetPassword