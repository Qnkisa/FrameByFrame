import React from "react"

export default function Footer(){
    return (
        <footer>
            <div className="footer-top">
                <div className="nav-logo">
                    <p>FrameByFrame</p>
                    <img src="public/camera-icon-21.png" alt="" />
                </div>
            </div>
            <div className="footer-bottom">
                <p>@ FrameByFrame</p>
                <span>All rights reserved</span>
            </div>
        </footer>
    )
}