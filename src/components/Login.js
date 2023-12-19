import React from 'react'
import "../styles/Login.css"
import { Button } from '@mui/material'
import { useStateValue } from './StateProvider'
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import {actionTypes} from "./reducer.js"
function Login() {
  const [state,dispatch] =useStateValue();
  const signIn =() =>{
    provider.setCustomParameters({prompt:"select_account"});
    signInWithPopup(auth,provider)
       .then((result)=>{
        dispatch({
            type:actionTypes.SET_USER,
            user:result.user
        })
      })
      .catch((error)=>alert(error.message))
  }
  return (
    
          <div className='login' >
      <div className="login__logo">
        <img src="https://images.hindustantimes.com/tech/img/2023/09/21/1600x900/fb_1695273515215_1695273522698.jpg" alt="" />
           <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-768x432.png" alt="" />
      </div>
      <Button className='btn'  type='submit' variant="contained" onClick={signIn}>
        Sign in
      </Button>
    </div>

  )
}

export default Login
