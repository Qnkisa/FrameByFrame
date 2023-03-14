import React from "react"
import {Link} from "react-router-dom"
import {useState} from "react"

export default function Navbar(){
    const [active,setActive] = useState(false)

    function handleClick(){
        setActive(prevValue => !prevValue)
    }

    return (
        <nav>
            <div className="nav-logo">
                <p>FrameByFrame</p>
                <img src="public/camera-icon-21.png" alt="" />
            </div>
            <ul className={active ? "show" : ""}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <a href="https://www.instagram.com/_yanislavangelov/" target={"_blank"}> <img src="public/instagram.png" alt="" /> </a>
                </li>
            </ul>
            <div className={active ? "show hamburger" : "hamburger"} onClick={handleClick} >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </div>
      </nav>
    )
}