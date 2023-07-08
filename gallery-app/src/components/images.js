import React from 'react';
import '../index.css';

import imageData from '../imageData.js';

function imageClick(){
    const imageArray = imageData.data.gallery
    const randomNumber = Math.floor(Math.random() * imageArray.length)
    const img = imageArray[randomNumber].img
}

export default function ImageGallery(){
    const [imgData, setImgData] = React.useState("")

    function getImageData(){
    const imageArray = imageData.data.gallery
    const randomNumber = Math.floor(Math.random() * imageArray.length)
    setImgData(imageArray[randomNumber].img)
}
    
    return(
        <main>
            <div className='image-div'>
               <button onClick={getImageData} className='img-btn'><b>Change Image</b></button>
            </div>
            <img src={imgData} className='img'></img>
        </main>
    )
}