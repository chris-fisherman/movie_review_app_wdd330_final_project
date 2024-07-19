import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Cards } from "./Card"

import "../css/MovieList.css"

export const MovieList = () => {

    const [movieList, setMovieList] = useState([]);
    const {type} = useParams();

    useEffect( () => {
        getData();
    }, [])

    useEffect( () => {
        getData();
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=3635f4a229260177fe2b5498e1ba967e&language=en-US`)
        .then(response => response.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movieList">
            <h2 className="movieList-title">{(type ? type : "POPULAR").toUpperCase()}</h2>

            <div className="movieList-cards">
                {
                    movieList.map( movie =>  (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )

}