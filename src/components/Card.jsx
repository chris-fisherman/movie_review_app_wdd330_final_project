import React, { useEffect, useState } from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

import { Link } from "react-router-dom"

import "../css/Card.css"

export const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true);

    
    useEffect( () => {
        setTimeout( () =>  {
            setIsLoading(false);
        }, 1500)
    }, [])

    return <>
        {
            isLoading
            ?
            <div className="cards">
                <SkeletonTheme color="#202020" highlightColor="#444">   
                    <Skeleton height={300} duration={2} />
                </SkeletonTheme>
            </div>
            :
            <Link to={ `movie/${movie.id}` }>
                <div className="cards">
                    <img className="cards-img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt="Card Image" />
                    <div className="cards-overlay">
                        <div className="cards-title">{movie ? movie.original_title : ""}</div>
                        <div className="cards-runtime">{movie ? movie.release_date : ""}</div>
                    </div>
                </div>
            </Link>
        }
    </>

}