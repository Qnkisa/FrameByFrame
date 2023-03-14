import React from "react"
import GalleryDiv from "./GalleryElements/GalleryDiv"
import GalleryData from "./GalleryElements/GalleryData"
import {useState} from "react"

export default function Gallery(){
    const [images,setImage] = useState(GalleryData);
    
    const allImages = images.map(image =>        
        <GalleryDiv
            imageKey = {image.imageId} 
            imagePath = {image.imageLink}
            imageDescription = {image.imageText}
        />       
    )

    return (
        <div className="gallery-container">
            <div className="gallery" id="gallery">
                {allImages}
            </div>
            <div className="back-to-top">
                <a href="#gallery">Back to top ↑</a>
            </div>
        </div>
    )
}