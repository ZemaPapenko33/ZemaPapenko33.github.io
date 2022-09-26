import React from 'react'
import { Link } from 'react-router-dom'
import { SignUp } from 'components/SignUp'
import '../Style/RegisterStyle.css';
import '../Style/LoginStyle.css'

const RegisterPage = () => {
  return (
    <div className='registerWindows'>
        <h1>Registration</h1>
        <SignUp />
        <p>
            or you have <Link to={"/login"} className='Link'>account</Link> 
        </p>
    </div>
  )
}

export default RegisterPage