import React, { useState } from 'react'
import './LoginForm.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {auth} from '../../firebase'
const LoginForm:React.FC=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const handleLogin=async(e:React.FormEvent)=>{
        e.preventDefault()
       try{
         await signInWithEmailAndPassword(auth,email,password)
         alert('login success')
         navigate('/')
       }
       catch(error){
        alert(error)
       }
    }
    return(
 <div className='Login'>
<form className='form'>
    <h1 className='Sign-In-h1'>Sign In</h1>
    <input placeholder='Email ' onChange={(e)=>setEmail(e.target.value)}></input><br/>
    <input placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input><br/>
    <button onClick={handleLogin}>Sign In</button>
</form>
<div >
<div className='left'>
<input type='checkbox'></input>
<p>Remember Me</p>
</div>
<div className='right'>
<p>Need help?</p>
</div>
</div>
    <p>Don't Have an account? <span><Link to ='/signup'>SignUp</Link></span></p>
 </div>
    )
}
export default LoginForm