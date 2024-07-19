import React from "react"

import logo from "../assets/play_wave_logo.png"

import "../css/Footer.css"

export const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-container">
                <img className="footer-logo" src={logo} alt="Footer Logo" width={180}/>
                <p className="footer-paragraph">&#169; Christian Peraza | This is a Final Project for WDD330 Web Frontend Development II course.</p>

                <p className="footer-paragraph-2">This is NOT a real Site</p>
            </div>
        </footer>
    )

}