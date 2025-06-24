import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Watch:React.FC=()=>{
const {id} =useParams()
const[videoKey,setVideoKey]=useState()
const API_KEY = import.meta.env.VITE_API_KEY;
useEffect(()=>{
const fetchTrailer=async()=>{
    try{
        const res= await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
        const trailer=res.data.results.find((video:any)=>video.type==='Trailer'&&video.site==='YouTube')
        if(trailer){
            setVideoKey(trailer.key)
        }
    }
    catch(error){
        console.log(error)
    }
}
fetchTrailer()
},[id])
return(
    <div className='Player'>
        <h1>Watch Movie</h1>
        <iframe src={`https://www.youtube.com/embed/${videoKey}`}
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         frameBorder="0"
         allowFullScreen
         width="100%"
                height="630"
        ></iframe>
    </div>
)
}
export default Watch