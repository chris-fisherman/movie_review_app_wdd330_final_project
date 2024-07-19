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
                    <img src={logo} alt="Header Logo" width="100" />
                </Link>
            </div>

            <Nav />
        </header>
    )
}