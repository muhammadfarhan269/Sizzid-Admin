import React, { useState } from 'react'
import './Login.css'
import { Signin } from '../../APIS/API'
import { useNavigate, Link } from "react-router-dom";


function Login({ isAuthenticated, setIsAuthenticated }) {

  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  })
  const [isShown, setIsSHown] = useState(false);
  const [isError, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setError(false)
    setLoginCredentials({ ...loginCredentials, [e.target.name]: e.target.value })
  }

  const LoginApi = async (event) => {

    event.preventDefault()
    // if (loginCredentials.email == 'admin@sizzld.com' && loginCredentials.password == 'password') {
    //   setIsAuthenticated(true)
    //   localStorage.setItem('loginCredentials', JSON.stringify(loginCredentials))
      navigate("/admin-dashboard/home");
    // } else {
    //   setError(true)

    // }
    // let { data } = await Signin(loginCredentials)
    //    document.cookie = `token = ${data.token}`;
    //    var value = document.cookie;
    //    console.log(value)

  }

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
                    <form className='login_form' onSubmit={LoginApi}>
                      <div className="mb-4">
                        <input type="email" className="form-control" name='email' id="login_email" aria-describedby="emailHelp" placeholder='UserName/E-Mail' onChange={(e) => handleChange(e)} />
                      </div>
                      <div className="position-relative">
                        <input type={isShown ? "text" : "password"} name='password' className="form-control" id="login_password" placeholder='Password' onChange={(e) => handleChange(e)} />
                        <img src="view-password.png" className='view_password' alt="" onClick={() => setIsSHown((isShown) => !isShown)} />
                      </div>
                      <div className="mb-3 form-check">
                        <p className='forgot_password'><Link to={'/reset-password'}>Forgot Password?</Link></p>
                      </div>
                      {isError && <span style={{ color: 'red', float: 'left' }}>Invalid Credentials, Please Try again!</span>}
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