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
        randomImage: './public/images'
    })

    const [AllImgData, setAllImgData] = React.useState(imageData)

    function getImageData(){
    const imageArray = AllImgData.data.gallery
    const randomNumber = Math.floor(Math.random() * imageArray.length)
    const img = imageArray[randomNumber].img
    setImage(prevImg => ({
        ...prevImg,
        randomImage : img
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