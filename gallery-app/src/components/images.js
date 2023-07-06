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

    function setimgData(){
    const imageArray = imageData.data.gallery
    const randomNumber = Math.floor(Math.random() * imageArray.length)
    setimgData(imageArray[randomNumber].url)
}
    
    return(
        <main>
            <div className='image-div'>

            </div>
        </main>
    )
}