import React from "react"
import { Link } from "react-router-dom"

import '../css/Nav.css'

export const Nav = () => {
    return (
        <nav id="nav">
            <div id="nav-container">
                <Link to="/">Home</Link>
                <Link to="/movies/top_rated">Top Rated</Link>
                <Link to="/movies/upcoming">Upcoming</Link>
            </div>     
        </nav>
    )
}