import React from 'react'
import { useHistory } from 'react-router-dom';
import { Form } from './Form'
import { useDispatch } from 'react-redux'
import {setUser} from "store/slices/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {
    const dispatch = useDispatch();
    const {push} = useHistory();
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email,password)
            .then(({user})=>{
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/');
            })
            .catch(console.error)

    }
  return (
    <Form 
        title={"register"}
        handelClick={handleRegister}
    />
  )
}

export  {SignUp}