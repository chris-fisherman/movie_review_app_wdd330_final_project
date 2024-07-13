import React, { useEffect, useState } from "react"

import "../css/Home.css"

export const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])
    
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=3635f4a229260177fe2b5498e1ba967e&language=en-US')
        .then(response => response.json())
        .then(data => setPopularMovies(data.results))
    }, [])
      
      

    return (
        <>
            Home Page
        </>
    )
}