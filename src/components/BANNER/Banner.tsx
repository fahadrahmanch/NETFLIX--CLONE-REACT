import React from "react";
import './Banner.css'
import '../../components/ROWS/Row.css'
import type{ BannerProps } from "../../Interface/BannerProps";
import {motion} from 'framer-motion'
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
// import Row from "../ROWS/Row";
// const API_KEY = import.meta.env.VITE_API_KEY;
const Banner:React.FC<BannerProps>=({title,description,imageUrl})=>{
   
    return(
        <motion.header className="banner"
         style={{backgroundImage:`url(${imageUrl})`}}>
           <div className="banner_contents">
            <h1 className="banner-title">{title}</h1>
            <p className="banner-description">{description}</p>
            <div className="banner-buttons">
                <button className="banner_button"><FaPlay style={{ marginRight: "0.5rem", paddingTop:'4px'}} />Play</button>
                <button className="banner_button"><AiOutlineInfoCircle style={{ marginRight: "0.5rem", paddingTop:'4px' }} />More Info</button>
            </div>
 


           </div>
           
           <div className="banner--fadeBottom"/>
        </motion.header>
    )
}
export default Banner;