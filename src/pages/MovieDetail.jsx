import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Footer } from "../components/Footer"

import "../css/Home.css"
import "../css/MovieDetail.css"

export const MovieDetail = () => {

    const [currentMovieDetail, setMovieDetail] = useState();
    const { id } = useParams();

    useEffect( () => {
        getData();
        window.scrollTo(0,0);
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3635f4a229260177fe2b5498e1ba967e&language=en-US`)
        .then(response => response.json())
        .then(data => setMovieDetail(data))
    }

    return (
        <main className="movieDetail-container">
                <div className="banner">
                    <div className="bannerImage">
                        <img src={`https://image.tmdb.org/t/p/original${currentMovieDetail && currentMovieDetail.backdrop_path}`} />

                        <div className="bannerImage-overlay">
                            <h1 className="bannerImage-title">{currentMovieDetail ? currentMovieDetail.original_title: ""}</h1>
                            <div className="bannerImage-runtime">
                                <div className="bannerImage-rating-container">
                                    <span className="bannerImage-rating">
                                        {currentMovieDetail ? currentMovieDetail.vote_average: ""}
                                    </span>
                                    <span className="bannerImage-rating-total">
                                        /10
                                    </span>
                                </div>
                                
                                <span className="bannerImage-data">{currentMovieDetail ? currentMovieDetail.release_date: ""}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="detail-container">
                    <img src={`https://image.tmdb.org/t/p/original${currentMovieDetail && currentMovieDetail.poster_path}`} />

                    <div className="detail-overlay">
                        <h2 className="detail-title">{currentMovieDetail ? currentMovieDetail.original_title: ""}</h2>
                        <p className="detail-tagline">{currentMovieDetail ? currentMovieDetail.tagline: ""}</p>

                        <div className="detail-rating-genres-container">
                            <div className="detail-rating-vote-container">
                                <div className="detail-rating-container">
                                    <span className="detail-rating">
                                        {currentMovieDetail ? currentMovieDetail.vote_average: ""}
                                    </span>
                                    <span className="detail-rating-total">
                                        /10
                                    </span>
                                </div>

                                <span className="detail-vote">{`${currentMovieDetail ? currentMovieDetail.vote_count: ""} Votes`}</span>

                                <span className="detail-time">{`${currentMovieDetail ? currentMovieDetail.runtime: ""} min`}</span>
                            </div>

                            <div className="detail-genres">
                                {
                                    currentMovieDetail && currentMovieDetail.genres
                                    ?
                                    currentMovieDetail.genres.map(genre => (
                                        <><span className="movie-genre" id={genre.id}>{genre.name}</span></>
                                    ))
                                    :
                                    ""
                                }
                            </div>
                        </div>
                    </div>     
                </section>

                <p className="detail-description">
                    {currentMovieDetail ? currentMovieDetail.overview: ""}
                </p>

                <Footer />
    
        </main>
    )

}