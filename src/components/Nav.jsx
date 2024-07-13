import React from "react"
import { Link } from "react-router-dom"

import '../css/Nav.css'

export const Nav = () => {
    return (
        <nav id="nav">
            <div id="nav-container">
                <Link to="/">Home</Link>
                <Link to="/movies/top_100">Top Movies</Link>
                <Link to="/series/top_100">Top Series</Link>
                <Link to="/myList">My List</Link>
            </div>     
        </nav>
    )
}