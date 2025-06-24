import React from 'react'
import '../assets/List.css'
import { Link } from 'react-router-dom';
import { useWatchlist } from '../context/WatchlistContext';
const List:React.FC =()=>{
    const{watchlist} =useWatchlist()
    const base_url = 'https://image.tmdb.org/t/p/w500';
    console.log(watchlist)
    return(
        <div className='parent'>

<div className='grid'>
{watchlist&&watchlist.map((movie:any)=>(
    <Link to={`/movie/${movie.id}`} key={movie.id}>

<div key={movie.id} className='card'>
    <img src={`${base_url}${movie.backdrop_path}`}
              alt={movie.title}></img>
              <p>{movie.title}</p>
</div>
              </Link>
))}
</div>
</div>
    )
}
export default List