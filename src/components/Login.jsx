import React from 'react'
import { Form } from './Form'
import { useDispatch } from 'react-redux'
import {setUser} from "store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const {push} = useHistory();
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email,password)
            .then(({user})=>{
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/');
            })
            .catch(()=>alert('Invalid User'))

    }


  return (
    <Form
        title={"sign in"}
        handelClick={handleLogin}
    />
  )
}

export  {Login}