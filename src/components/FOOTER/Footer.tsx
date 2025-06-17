import React from 'react'
import './Footer.css'
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer:React.FC=()=>{
    return(
        <footer className='footer'>
            <div className="footer_social">
  <FaFacebookF className="social_icon" />
  <FaInstagram className="social_icon" />
  <FaTwitter className="social_icon" />
  <FaYoutube className="social_icon" />
</div>
         <div className='container-footer'>
            
         <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notices</li>
        </ul>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </ul>
        <ul>
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
        </ul>
        <ul>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
         </div>
         <p className="footer_copy">© {new Date().getFullYear()} Netflix Clone by Fahad</p>
        </footer>
    )
}
export default Footer