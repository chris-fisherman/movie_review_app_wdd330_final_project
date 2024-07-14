import React, { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import "../css/Home.css"
import { Link } from "react-router-dom"

export const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])
    
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=3635f4a229260177fe2b5498e1ba967e&language=en-US')
        .then(response => response.json())
        .then(data => setPopularMovies(data.results))
    }, [])
      
      

    return (
        <>
            <section className="banner">
                <Carousel
                    showThumbs={false}
                    autoPlay={false}
                    transitionTime={3}
                    infiniteLoop={false}
                    showStatus={false}
                    renderIndicator={false}
                >
                    {
                        popularMovies.map( movie => (
                            <Link className="bannerLink" to={`/review/${movie.id}`}>
                                <div className="bannerImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                            

                                <div className="bannerImage-overlay">
                                    <h1 className="bannerImage-title">{movie ? movie.original_title: ""}</h1>
                                    <div className="bannerImage-runtime">
                                        <div className="bannerImage-rating-container">
                                            <span className="bannerImage-rating">
                                                {movie ? movie.vote_average: ""}
                                            </span>
                                            <span className="bannerImage-rating-total">
                                                /10
                                            </span>
                                        </div>
                                        
                                        <span className="bannerImage-data">{movie ? movie.release_date: ""}</span>
                                    </div>
                                    {/* <div className="bannerImage_description">{movie ? movie.overview: ""}</div> */}
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
            </section>
        </>
    )
}