import React, { Component } from 'react';
import '../index.css';

import imageData from '../imageData';

function imageClick(){
    const imageArray = imageData.data.gallery
    const randomNumber = Math.floor(Math.random() * imageArray.length)
    const url = imageArray[randomNumber].url
}

export default function Images(){
    return(
        <div className='image-div'>

        </div>
    )
}