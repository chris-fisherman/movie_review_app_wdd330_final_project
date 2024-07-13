import React, { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

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
            <section id="banner">
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
                            <div id="banner-image">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                            </div>
                        ))
                    }
                </Carousel>
            </section>
        </>
    )
}