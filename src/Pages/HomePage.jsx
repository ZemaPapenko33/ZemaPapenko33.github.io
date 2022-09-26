import React from 'react'
import {Redirect} from "react-router-dom";
import { useAuth } from 'hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from 'store/slices/userSlice';
import '../Style/HomeStyle.css';

const HomePage = () => {
    const {isAuth, email} = useAuth();
    const dispatch = useDispatch();

  return isAuth ? (
    <div className='mainWindows'>
        <h1>Welcome</h1>

        <button
            onClick={()=>dispatch(removeUser())}
        >
            Log out from {email}
        </button>
    </div>
  ):(
   <Redirect to={"/login"}/>
  )
}

export default HomePage