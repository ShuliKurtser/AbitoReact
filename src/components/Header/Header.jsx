import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
  return (
    <header className="header">
            <div className="container">
                <div className="header_box">
                    <Link to="/" className="header_logo">
                        <img src="./images/logo.svg" alt="logo" />
                        <span>Abito</span>
                    </Link>
                    <div className="header_controls">
                        <button className=" btn btn_registration">Login</button>
                        <button className="btn btn_advertisement">Submit an ad</button>
                    </div>
                    <div className="header_burger">
                        <img src="./images/burger.svg" alt="burger" />
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Header