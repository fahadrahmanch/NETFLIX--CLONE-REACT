import React, { useState } from 'react'
import './LoginForm.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';     
import {auth} from '../../firebase'
const LoginForm:React.FC=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const handleLogin=async(e:React.FormEvent)=>{
        e.preventDefault()
       try{
         await signInWithEmailAndPassword(auth,email,password)
         toast.success("Login successful! Welcome back", {
            onClose: () => navigate('/')
          });               
        //  navigate('/')
       }
       catch(error){
        // toast.error((error as Error).message);
        toast.error('Login failed');
       }
    }
    return(
 <div className='Login'>
<form className='form' onSubmit={handleLogin}>
     {/* <ToastContainer position="top-right" autoClose={3000} /> */}
    <h1 className='Sign-In-h1'>Sign In</h1>
    <input placeholder='Email ' onChange={(e)=>setEmail(e.target.value)}></input><br/>
    <input placeholder='Password' type='password' onChange={(e)=>setPassword(e.target.value)}></input><br/>
    <button type='submit'>Sign In</button>
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