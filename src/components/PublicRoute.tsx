import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
 
const PublicRoute=({children}:{children:any})=>{
  const [user,Loading]=useAuthState(auth)
  if(Loading){
    return <p>Loading</p>
  }
  if(user){
    return <Navigate to='/' replace/>
  }
  return children
}
export default PublicRoute