import React from "react"
import { Link } from "react-router-dom"

import '../../css/Header.css'

export const Header = () => {
    return (
        <header id="header">
            <div id="headerMain-container">
                <Link to="/"><img id="headerMain-logo" src="../../assets/bella_vista_logo_complete.webp" alt="Logo" /></Link>

                <h2 id="headerMain-search">Search</h2>
            </div>
        </header>
    )
}