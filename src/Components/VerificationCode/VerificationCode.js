import React from 'react'
import './VerificationCode.css'
import { AutoTabProvider } from 'react-auto-tab'

function VerificationCode() {
    return (
        <section className='verification_code_page'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6 position-relative'>
                        <div className='verification_code_left_panel'>
                            <img src="logo.svg" className='verification_code_logo' alt="" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='verification_code_right_panel position-relative vh-100'>
                            <div className='verification_code_card'>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title mt-3">Type Code</h5>
                                        <form className='verification_code_form'>
                                            <AutoTabProvider>
                                                <input type="password" className='code_input' maxLength={1} tabbable placeholder='*' />
                                                <input type="password" className='code_input' maxLength={1} tabbable placeholder='*'/>
                                                <input type="password" className='code_input' maxLength={1} tabbable placeholder='*'/>
                                                <input type="password" className='code_input' maxLength={1} tabbable placeholder='*'/>
                                            </AutoTabProvider>
                                            <div className="mb-5 form-check">
                                                <p className='redirect_login'>Add verification code</p>
                                            </div>
                                            <button type="submit" className="btn btn_login mt-4">Next <img src="arrow-right.png" className='float-end' alt="" /></button>
                                        </form>
                                        <h5 className='login_card_bottom'>Check Your Inbox</h5>
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

export default VerificationCode