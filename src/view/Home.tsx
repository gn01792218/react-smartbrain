import { useState } from 'react'
import Logo from '../component/logo/Logo'
import ImageLinkForm from '../component/imageLinkForm/ImageLinkForm'
import Rank from '../component/rank/Rank'
import Facerecognition from '../component/faceRecognition/Facerecognition'
import ParticlesElement from '../component/ParticlesElement'
import {FaceBoxDisplayData} from '../types/face'
import { useAppSelector,useAppDispatch } from '../app/hooks'
import {setUserEnries} from '../app/user'
import axios from 'axios'

interface FaceBoxData{
    top_row:number,
    left_col:number,
    bottom_row:number,
    right_col:number,
}
function Home() {
    const dispatch = useAppDispatch()
    const userName = useAppSelector((state) => state.user.user.name)
    const userId = useAppSelector((state) => state.user.user.id)
    const [imgLinkFormInput, setImgLinkFormInput] = useState('')
    const [imageURL,setImageURL] = useState('')
    const [faceBox,setFaceBox] = useState({})
    function imageLinkFormInputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        setImgLinkFormInput(event.target.value)
    }
    function onSubmit() {
        setImageURL(imgLinkFormInput)
        const userIdData={
            id:userId
        }
        console.log(userId)
        axios.put(`${process.env.REACT_APP_API_BASE_URL}/image`,userIdData)
        .then(res=>{
            dispatch(setUserEnries(res.data.entries))
        })
        const imageurl = {
            input :imgLinkFormInput
        }
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/imageurl`,imageurl)
        .then(res=>{
            const boxInfo = res.data
            displayFaceBox(calculateFaceBox(boxInfo))
        })
        .catch((err:any)=>{
            console.log(err)
        })
    }
    function calculateFaceBox(boxData:FaceBoxData){
        const img = document.getElementById('faceInputImg') as HTMLImageElement
        const width = Number(img.width)
        const height = Number(img.height)
        //boxData中的數據是%數，所以得用我們的圖片來計算出框框位置
        console.log(width,height,boxData)
        return {
            leftCol:boxData.left_col*width,
            topRow:boxData.top_row*height,
            rightCol:width-(boxData.right_col*width),
            bottomRow:height-(boxData.bottom_row*height)
        }
        
    }
    function displayFaceBox(boxDisplayData:FaceBoxDisplayData){
        setFaceBox(boxDisplayData)
    }
    return (
        <div>
           <h1>HI~{userName}</h1>
           <ParticlesElement/>
            <Logo />
            <Rank />
            <ImageLinkForm inputChange={imageLinkFormInputOnChange} onSubmit={onSubmit} />
            <Facerecognition imageURL={imageURL} faceBox={faceBox as FaceBoxDisplayData}/>
        </div>
    )
}
export default Home