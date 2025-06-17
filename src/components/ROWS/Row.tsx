// import React ,{useEffect,useState} from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Row.css'
 interface RowProps{
    title:string,
    fetchUrl:any
 }
 interface Movie {
    id: number;
    title?: string;
    backdrop_path: string;
    poster_path?: string;
    overview?: string;
    release_date?: string;
    vote_average?: number;
    genre_ids?: number[];
    original_language?: string;
    original_title?: string;
    adult?: boolean;
    popularity?: number;
    video?: boolean;
    vote_count?: number;
  }
  
  const base_url = 'https://image.tmdb.org/t/p/w500';
 const Row:React.FC<RowProps>=({ title, fetchUrl})=>{
    const [movies,setMovies]=useState<Movie[]>([])
    useEffect(()=>{
        const fetchMovies=async()=>{
            const response=await axios.get(fetchUrl)
            setMovies(response.data.results)
        }
        fetchMovies()
        
    },[])
    if (movies.length > 0) {
        // console.log("h")
        // console.log(movies[0].title);
        // console.log(movies[0].overview);
        // console.log(movies[0].poster_path);
        // console.log(movies[0].release_date);
        // console.log(movies[0].vote_average);
        // console.log(movies[0].genre_ids);
      }
    return(
        
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
            {movies.map((movie,index)=>(
                 <div className="row_poster_wrapper" key={index}>
                   <Link to={`/movie/${movie.id}`} key={movie.id}>
                    <img
              src={`${base_url}${movie.backdrop_path}`}
              alt={movie.title}
              className='row_poster'
            />
            </Link>
                    <p className="row_card">{movie.title}</p>
                 </div>
            ))}
            </div>
        </div>
    )
  
 }
export default Row