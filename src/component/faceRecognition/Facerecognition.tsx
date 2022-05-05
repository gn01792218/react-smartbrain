import {FaceBoxDisplayData}from '../../types/face'
import './facerecognition.css'
interface Props{
    imageURL:string,
    faceBox:FaceBoxDisplayData,
}

function Facerecognition(props:Props){
    const {imageURL,faceBox} = props
    return (
        <div className="flex justify-center relative">
            <img id="faceInputImg" src={imageURL} alt="" />
            <div className='bounding-box absolute flex flex-wrap justify-center cursor-pointer' style={{top:faceBox.topRow,left:faceBox.leftCol,right:faceBox.rightCol,bottom:faceBox.bottomRow}}></div>
        </div>
    )
}
export default Facerecognition