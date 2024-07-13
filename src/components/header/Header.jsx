import React from "react"
import { Link } from "react-router-dom"

import '../../css/Header.css'

export const Header = () => {
    return (
        <header id="header">
            <div id="headerMain-container">
                <h1 id="headerMain-logo">Logo</h1>

                <nav id="headerMain-nav">
                    <h2>My List</h2>
                </nav>
            </div>
        </header>
    )
}