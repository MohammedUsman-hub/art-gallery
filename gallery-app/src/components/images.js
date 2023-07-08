import React, { Component } from 'react';
import '../index.css';

import imageData from '../imageData.js';

function imageClick(){
    const imageArray = imageData.data.gallery
    const randomNumber = Math.floor(Math.random() * imageArray.length)
    const img = imageArray[randomNumber].img
}

export default function Images(){
    const [imgData, setimgData] = React.useState("")

    function getImageData(){
    const imageArray = imageData.data.gallery
    const randomNumber = Math.floor(Math.random() * imageArray.length)
    setimgData(imageArray[randomNumber].img)
}
    
    return(
        <main>
            <div className='image-div'>
                <button onClick={getImageData} className='img-btn'>Next</button>
            </div>
            <img src={imgData} className='img'></img>
        </main>
    )
}