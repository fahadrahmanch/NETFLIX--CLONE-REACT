import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { FiSearch, FiBell,FiMenu } from "react-icons/fi";
import {auth} from '../../firebase'
import Logo from '../../assets/Logo/image.png'
import { signOut } from "firebase/auth";
import './Navbar.css'
const NAVBAR:React.FC=()=>{
    const [showMenu,setShowMenu]=useState(false)
    const [isScrolled,setIsScrolled]=useState(false)
    const [isLoggedIn,setIsLoggedIn]=useState(auth)
    const [showDropdown, setShowDropdown] = useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            setIsScrolled(window.scrollY>0)
        }
        window.addEventListener("scroll",handleScroll)
        return ()=>window.removeEventListener('scroll',handleScroll)
    },[])
    const handleAuth=async()=>{
       try{
        await signOut(auth)
        setIsLoggedIn(auth)
       }
       catch(error){
        console.log(error)
       }
    }
    return(
        <nav className={`navbar ${isScrolled?'navbar--scrolled':''}`} >
            <div className="navbar_left">
            <div className="navbar_logo">
            <img className='Logo-Netflix'src={Logo} alt="logo"></img>
            </div>
            <ul className={`navbar_menu ${showMenu ? 'show' : ''}`}>
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movies</li>
                <li>News & Popular</li>
                <li>My List</li>
                <li>Browser by Launguages</li>
               </ul>
            </div>

            <div className="navbar_right">
            <FiSearch className="navbar__icon" />
        <FiBell className="navbar__icon" />
        <div className="navbar_avatar_wrapper" onMouseEnter={()=>setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>

        <img
          className="navbar__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User Avatar"
          />
          {showDropdown&&(
            <div className="navbar_dropdown">
                {isLoggedIn?(
                    <>
                    <p>Profile</p>
                    <p onClick={()=>handleAuth()}>Logout</p>
                    </>
                ):(
                    <p onClick={() => handleAuth()}>Login</p>
                )}
            </div>
          )}
          </div>
                    <FiMenu className="navbar__hamburger" onClick={() => setShowMenu(!showMenu)} />

            </div>
        </nav>
    )
}

export default NAVBAR
