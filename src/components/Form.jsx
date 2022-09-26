import React, {useState} from "react";

const Form = ({title, handelClick}) => {
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
//    const [emailDirty, setEmailDirty] = useState(false);
//    const [passDirty, setPassDirty] = useState(false);
//    const [emailError, setEmailError] = useState("Email can't be empty")
//    const [passError, setPassError] = useState("Password can't be empty")


    return (
    <div>
        
        <input

            type={"email"}
            value={email}
            onChange ={(e)=>setEmail(e.target.value)}
            placeholder="email"
        />
   
        <input 
        
            type={"password"}
            value={pass}
            onChange ={(e)=>setPass(e.target.value)}
            placeholder="password"
        />

        <button
            onClick={()=>handelClick(email,pass)}
        >
            {title}
        </button>
    </div>
  )
}

export {Form}
