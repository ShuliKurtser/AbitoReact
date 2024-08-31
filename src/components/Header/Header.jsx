import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <header className="header">
            <div className="container">
                <div className="header_box">
                    <a href="/" className="header_logo">
                        <img src="./images/logo.svg" alt="logo" />
                        <span>Abito</span>
                    </a>
                    <div className="header_controls">
                        <botom className=" btn btn_registration">Login</botom>
                        <botom className="btn btn_advertisement">Submit an ad</botom>
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