import React from 'react';
import '../index.css';

import imageData from '../imageData.js';

/*function imageClick(){
    const imageArray = imageData.data.gallery
    const randomNumber = Math.floor(Math.random() * imageArray.length)
    const img = imageArray[randomNumber].img
}*/

export default function ImageGallery(){

    const [image, setImage] = React.useState({
        randomImage: "./images"
    })

    const [AllImgData, setAllImgData] = React.useState("")

    function getImageData(){
    const imageArray = AllImgData.data.gallery
    const randomNumber = Math.floor(Math.random() * imageArray.length)
    const url = imageArray[randomNumber].url
    setImage(prevImg => ({
        ...prevImg,
        randomImage : url
    }))
}
    
    return(
        <main>
            <div className='image-div'>
               <button onClick={getImageData} className='img-btn'><b>Change Image</b></button>
            </div>
            <img src={image.randomImage} className='img'></img>
        </main>
    )
}