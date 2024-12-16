import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/frontend_assets/assets'
const LoginPopUp = ({setShowLogin}) => {
  const [CurrentState,SetCurrState]= useState("LOGIN")
  return (
    <div className='Login-Popup'>
      <form className="Login-Popup-Container">
        <div className="Login-Popup-Title">
          <h2>{CurrentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="Login-Popup-inputs">{CurrentState==="LOGIN"?<></>:<input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{CurrentState==="Sign-Up"?"Create account":"Login"}</button>
        <div className="Login_Popup-Condition">
          <input type="checkbox" required /><p>By Continuing,i agree the terms and conditions & Privacy policy.</p></div>{CurrentState==="LOGIN"
          ?<p className='signin_color'>Create a new account?<span onClick={()=>SetCurrState("Sign-Up")}>Click Here</span></p>
          :<p className='signin_color'>Already have a account?<span onClick={()=>SetCurrState("LOGIN")}>Login Here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopUp
