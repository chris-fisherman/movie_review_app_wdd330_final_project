import React, { useEffect, useState } from "react"

import { Cards } from "./Card"

import "../css/PopularList.css"

export const PopularList = () => {
    const [ popularMovies, setPopularMovies ] = useState([])
    
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=3635f4a229260177fe2b5498e1ba967e&language=en-US')
        .then(response => response.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <section className="popularList">
            <h2 className="popularList-title">Popular</h2>

            <div className="popularList-cards">
                {
                    popularMovies.map( movie =>  (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </section>
    )
}