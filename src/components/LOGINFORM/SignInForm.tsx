
import './LoginForm.css'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
const SignInForm:React.FC=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const handleLogin=async(e:React.FormEvent)=>{
        e.preventDefault()
        try{
            console.log("heelo")
          await createUserWithEmailAndPassword(auth,email,password)
          alert('success')
          navigate('/login')
        }
        catch(error:any){
            console.log('helo')
            alert(error.message)
        }
    }
    return(
 <div className='Login'>
<form className='form'>
    <h1 className='Sign-In-h1'>Sign Up</h1>
    <input placeholder='Email or mobile number' onChange={(e)=>setEmail(e.target.value)}></input><br/>
    <input placeholder='Password'onChange={(e)=>setPassword(e.target.value)}></input><br/>
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

    <p>Already have an Account? <span><Link to ='/login'>Sign In Now</Link></span></p>
   
 </div>
    )
}
export default SignInForm