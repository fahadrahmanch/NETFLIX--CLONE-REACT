import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../components/MovieDetail/MovieDetail.css'

const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const [movie, setMovie] = useState<any>(null)
    const base_url = 'https://image.tmdb.org/t/p/w500';
    const [activeTab, setActiveTab] = useState("OVERVIEW")
    const tabs = ["OVERVIEW", "TRAILERS & MORE", "MORE LIKE THIS", "DETAILS"];
    const API_KEY = import.meta.env.VITE_API_KEY;
    const [watch, isWatch] = useState(false)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
                if (response) {
                    console.log("Df")
                    setMovie(response.data)
                }

            }
            catch (error) {
                console.log(error)
            }

        }
        if (id) {
            fetchMovies()
        }
    }, [id])
   useEffect(()=>{
    const watchlist=JSON.parse(localStorage.getItem('watchlist')||'[]')
    const alreadyAdded=watchlist.some((item:any)=>item.id==movie?.id)
    console.log(alreadyAdded)
    isWatch(alreadyAdded)
   },[movie])
    const watchHandle = (bool: boolean) => {
        isWatch(bool)
       if(!movie)return
       const storedList=JSON.parse(localStorage.getItem('watchlist')||'[]')
       if(bool){
        const already=storedList.some((item:any)=>item.id===movie?.id)
        if(!already){
            const update=[...storedList,movie];
            localStorage.setItem('watchlist',JSON.stringify(update))
        }
       }else{
        const update=storedList.filter((item:any)=>item.id!=movie?.id)
        localStorage.setItem('watchlist',JSON.stringify(update))
       }    
    }
    return (
        <div className='container'>
            {movie && (
                <>
                    <img
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.title}
                        className='MoviePoster'
                    />
                </>

            )}
            <div className='content-movie'>
                {movie && (
                    <>
                        <h1>{movie.title}</h1>
                        <pre className='pre'>{new Date(movie.release_date).getFullYear()}  |  {Math.floor(movie.runtime / 60)} h {movie.runtime % 60} min <button
                            className="netflix-watchlist-btn" onClick={() => watchHandle(!watch)}>
                            {watch ? '✔ Added to My List' : '+ My List'}
                        </button></pre>
                        <div className="movie-nav">
                            {tabs.map((tab) => (
                                <button key={tab} onClick={() => setActiveTab(tab)}
                                    className={activeTab == tab ? 'tab-btn active' : 'tab-btn'}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </>
                )}
                <div>
                    {activeTab === 'OVERVIEW' && movie && (
                        <div className='overview-section'>
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                            <p> <span>Status:</span> {movie.status}</p>
                            <p><span> Released Date  :  </span>{movie.release_date}</p>
                            <p><span>Duration : </span>{Math.floor(movie.runtime / 60)} h {movie.runtime % 60} min</p>
                        </div>

                    )}
                    {activeTab === 'TRAILERS & MORE' && movie && (
                        <div className="overview-section">
                            <h3>Trailers & More</h3>
                            <p>
                                Discover exclusive content related to the movie, including teasers, promotional clips,
                                and behind-the-scenes stories from the cast and crew.
                            </p>

                            <ul>
                                <li>Official Teaser released on Jan 15, 1972</li>
                                <li>Director's commentary and behind-the-scenes talk</li>
                                <li>Cast interviews and red carpet moments</li>
                                <li>Scene breakdown: The making of iconic sequences</li>
                            </ul>
                        </div>
                    )}
                    {activeTab === 'MORE LIKE THIS' && movie && (
                        <div className="overview-section">
                            <h2>More Like This</h2>
                            <ul>
                                <li><strong>Scarface</strong> – Another iconic crime drama exploring the rise of a powerful gangster.</li>
                                <li><strong>Goodfellas</strong> – A deep dive into the world of organized crime and loyalty.</li>
                                <li><strong>Casino</strong> – A story about crime, money, and betrayal in Las Vegas.</li>
                                <li><strong>The Irishman</strong> – A reflective look at decades of mob life through one man’s story.</li>
                                <li><strong>Once Upon a Time in America</strong> – An emotional journey through childhood, crime, and lost dreams.</li>
                            </ul>
                        </div>
                    )}
                    {activeTab === 'DETAILS' && movie && (
                        <div className="overview-section">
                            <h2>Details</h2>
                            <ul>
                                <li><strong>Genres:</strong> Crime, Drama</li>
                                <li><strong>Original Language:</strong> English</li>
                                <li><strong>Production Companies:</strong> Paramount Pictures, Alfran Productions</li>
                                <li><strong>Release Date:</strong> March 14, 1972</li>
                                <li><strong>Runtime:</strong> 2h 55min</li>
                                <li><strong>Status:</strong> Released</li>
                                <li><strong>Budget:</strong> $6,000,000</li>
                                <li><strong>Revenue:</strong> $245,066,411</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="movie-actions">
                <button className="play-button">
                    <span className="triangle">▶</span>
                </button>
            </div>
        </div>

    )
}
export default MovieDetails