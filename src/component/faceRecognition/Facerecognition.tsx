import { useEffect } from 'react'
import {FaceBoxDisplayData}from '../../types/face'
import './facerecognition.css'
interface Props{
    imageURL:string,
    faceBox:FaceBoxDisplayData,
}

function Facerecognition(props:Props){
    const {imageURL,faceBox} = props
    useEffect(()=>{
        console.log(faceBox)
    })
    return (
        <div className="w-[600px] flex justify-center mx-auto relative mt-5">
            <img id="faceInputImg" src={imageURL} alt="人臉辨識目標照片" />
            <div className='bounding-box absolute flex flex-wrap justify-center cursor-pointer border-solid border-2 border-white' style={{top:faceBox.topRow,left:faceBox.leftCol,right:faceBox.rightCol,bottom:faceBox.bottomRow}}></div>
        </div>
    )
}
export default Facerecognition