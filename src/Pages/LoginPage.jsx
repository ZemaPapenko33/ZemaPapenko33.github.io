import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from 'components/Login'
import '../Style/LoginStyle.css';

const LoginPage = () => {
  return (
    <div className='loginWindows'>
        <h1>Login</h1>
        <Login />   
        <p>
            or <Link to={"/register"} className='Link'> register</Link>
        </p>
    </div>
  )
}

export default LoginPage