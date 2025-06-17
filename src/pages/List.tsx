import React from 'react'
import '../assets/List.css'
import { Link } from 'react-router-dom';

const List:React.FC =()=>{
    const watchList=JSON.parse(localStorage.getItem('watchlist')||'[]')
    // const API_KEY = import.meta.env.VITE_API_KEY;
    const base_url = 'https://image.tmdb.org/t/p/w500';
    console.log(watchList)
    return(
<div className='grid'>
{watchList&&watchList.map((movie:any)=>(
      <Link to={`/movie/${movie.id}`} key={movie.id}>

<div key={movie.id} className='card'>
    <img src={`${base_url}${movie.backdrop_path}`}
              alt={movie.title}></img>
              <p>{movie.title}</p>
</div>
              </Link>
))}
</div>
    )
}
export default List