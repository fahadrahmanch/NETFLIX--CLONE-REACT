import Logo from '../../assets/Logo/image.png'
import './Navbar.css'
import React from 'react';
const OnlyForLogin:React.FC=()=>{
    return(
        <nav className="navbar" >
        <div className="navbar_left">
        <div className="navbar_logo">
        <img className='Logo-Netflix'src={Logo} alt="logo"></img>
        </div>
        
        </div>
    </nav>
    )
}
export default OnlyForLogin