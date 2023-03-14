import React from "react"

export default function GalleryDiv(props){

    return (
        <div className="image-div" key={props.imageKey}>
            <img src={props.imagePath} alt="" className="image-div-image"/>
            <p className="image-div-description">{props.imageDescription}</p>
            <div className="image-div-helper"></div>
        </div>
    )
}