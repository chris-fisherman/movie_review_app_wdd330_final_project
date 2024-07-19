import React, { useEffect, useState } from "react"

import { Cards } from "./Card"

import "../css/HomeLists.css"

export const TopRatedList = () => {
    const [ ratedMovies, setRatedMovies ] = useState([])
    
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=3635f4a229260177fe2b5498e1ba967e&language=en-US')
        .then(response => response.json())
        .then(data => setRatedMovies(data.results))
    }, [])

    return (
        <section className="ratedList">
            <h2 className="ratedList-title">Top Rated</h2>

            <div className="ratedList-cards">
                {
                    ratedMovies.map( movie =>  (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </section>
    )
}