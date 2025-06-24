// import React from 'react'
import { Navigate } from 'react-router-dom'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth' 

const ProtecteRouted=({children}:{children:any})=>{
    console.log("childern",children)
    const[user,loading]=useAuthState(auth)

    // console.log("user ",user)
    if(loading){
         return <p>Loading...</p>
    }
    
     return user!=null?children:<Navigate to='/login' replace/>
}
export default ProtecteRouted