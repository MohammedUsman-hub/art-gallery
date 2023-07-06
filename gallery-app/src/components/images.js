import React, { Component } from 'react';
import '../index.css';

import imageData from '../imageData';

function imageClick(){
    const imageArray = imageData.data.gallery
    const randomNumber = Math.floor(Math.random() * imageArray.length)
    const url = imageArray[randomNumber].url
}

export default function Images(){
    const [imgData, setimgData] = React.useState("")

    function getImageData(){
    const imageArray = imageData.data.gallery
    const randomNumber = Math.floor(Math.random() * imageArray.length)
    setimgData(imageArray[randomNumber].url)
}
    
    return(
        <main>
            <div className='image-div'>
                <button onClick={getImageData} className='img-btn'></button>
                <button onClick={getImageData} className='img-btn'></button>
            </div>
        </main>
    )
}