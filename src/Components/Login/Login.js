import React from 'react'
import './Login.css'

function Login() {
    return (
        <section className='login_page'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6 position-relative'>
                        <div className='login_left_panel'>
                            <img src="logo.svg" className='login_logo' alt="" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='login_right_panel position-relative vh-100'>
                            <div className='login_card'>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title mt-3">LogIn</h5>
                                        <form className='login_form'>
                                            <div className="mb-4">
                                                <input type="email" className="form-control" id="login_email" aria-describedby="emailHelp" placeholder='UserName/E-Mail'/>
                                            </div>
                                            <div className="position-relative">
                                                <input type="password" className="form-control" id="login_password" placeholder='Password'/>
                                                <img src="view-password.png" className='view_password' alt="" />
                                            </div>
                                            <div className="mb-3 form-check">
                                                <p className='forgot_password'>Forgot Password?</p>
                                            </div>
                                            <button type="submit" className="btn btn_login mt-4">LogIn <img src="arrow-right.png" className='float-end' alt="" /></button>
                                        </form>
                                        <h5 className='login_card_bottom'>Better Controls for better Product.</h5>
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

export default Login