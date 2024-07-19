import React from "react"
import { Link } from "react-router-dom"

import { Nav } from "./Nav"
import logo from "../assets/play_wave_logo.png"

import '../css/Header.css'


export const Header = () => {
    return (
        <header id="header">
            <div id="headerMain-container">
                <Link to="/" id="headerMain-logo">
                    <img src={logo} alt="Logo" width="100" />
                </Link>

                <h2 id="headerMain-search">Search</h2>
            </div>

            <Nav />
        </header>
    )
}