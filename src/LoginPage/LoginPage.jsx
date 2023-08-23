import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const[password,setPassword] = useState("");

const emailOnChange = (event) => {
  setEmail(event.target.value)
}

const handlePassword = (event) =>{
  setPassword(event.target.value)
}
  const loginbtn = () =>{
navigate("/HomePage")
  }
  return (
    <div className="MainContainer">
      <div className="FormContainer">
        <div className="FormHeader">Login Page</div>
        <div className="FormInputs">
          
          <label className="InputLabel">Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={emailOnChange}
          />
          <label className="InputLabel">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <button onClick={loginbtn} style={{display:"flex",marginTop:"15px"}}>Login</button>
      </div>
      
    </div>
  )
}

export default LoginPage