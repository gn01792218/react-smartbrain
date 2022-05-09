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
        <div className="w-[600px] flex justify-center relative">
            <img id="faceInputImg" src={imageURL} alt="" />
            <div className='bounding-box absolute flex flex-wrap justify-center cursor-pointer border-solid border-2 border-white' style={{top:faceBox.topRow,left:faceBox.leftCol,right:faceBox.rightCol,bottom:faceBox.bottomRow}}></div>
        </div>
    )
}
export default Facerecognition