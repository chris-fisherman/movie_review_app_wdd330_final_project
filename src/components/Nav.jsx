import React from "react"
import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <nav id="nav">
            <Link to="/">Home</Link>
            <Link to="/movies/top_100">Top Movies</Link>
            <Link to="/series/top_100">Top Series</Link>
            <Link to="/myList">My List</Link>
        </nav>
    )
}