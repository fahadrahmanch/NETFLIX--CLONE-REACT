import React from "react";
import LoginForm from "../components/LOGINFORM/LoginForm";
const Login:React.FC=()=>{
    return(
        <div className="Login-background">
        <div className="Login-content">
         <LoginForm/>
        </div>
      </div>
    )
}
export default Login