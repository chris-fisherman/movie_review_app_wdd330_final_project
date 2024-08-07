import React, { useEffect, useState } from "react"

import { Cards } from "./Card"

import "../css/HomeLists.css"

export const UpcomingList = () => {
    const [ upcomingMovies, setUpcomingMovies ] = useState([])
    
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=3635f4a229260177fe2b5498e1ba967e&language=en-US')
        .then(response => response.json())
        .then(data => setUpcomingMovies(data.results))
    }, [])

    return (
        <section className="upcomingList">
            <h2 className="upcomingList-title">Upcoming</h2>

            <div className="upcomingList-cards">
                {
                    upcomingMovies.map( movie =>  (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </section>
    )
}