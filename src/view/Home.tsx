import { useEffect, useState } from 'react'
import Logo from '../component/logo/Logo'
import ImageLinkForm from '../component/imageLinkForm/ImageLinkForm'
import Rank from '../component/rank/Rank'
import Facerecognition from '../component/faceRecognition/Facerecognition'
import ParticlesElement from '../component/ParticlesElement'
import {FaceBoxDisplayData} from '../types/face'
import { useAppSelector,useAppDispatch } from '../app/hooks'
import {setUserEnries} from '../app/user'
import axios from 'axios'
// const Clarifai = process.env.REACT_APP_TRAVIS ? require('clarifai') : require('../');
// console.log(Clarifai,process.env.REACT_APP_CLARIFAI_API_KEY)
// const app = new Clarifai.App({
//     apiKey: process.env.REACT_APP_CLARIFAI_API_KEY
// });
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
        console.log(event.target.value)
        setImgLinkFormInput(event.target.value)
    }
    function onSubmit() {
        setImageURL(imgLinkFormInput)
        const userIdData={
            id:userId
        }
        console.log(userId)
        axios.put('https://limitless-shelf-55516.herokuapp.com/image',userIdData)
        .then(res=>{
            dispatch(setUserEnries(res.data))
        })
        // app.models.predict(Clarifai.FACE_DETECT_MODEL,"https://samples.clarifai.com/face-det.jpg")
        // .then((res:any)=>{
        //     const boxInfo = res.outputs[0].data.regions[0].region_info.bounding_box
        //         console.log(boxInfo)
        //         displayFaceBox(calculateFaceBox(boxInfo))
        // })
        // .catch((err:any)=>{
        // })
    }
    function calculateFaceBox(boxData:FaceBoxData){
        const img = document.getElementById('faceInputImg') as HTMLImageElement
        const width = Number(img.width)
        const height = Number(img.height)
        //boxData中的數據是%數，所以得用我們的圖片來計算出框框位置
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
    // useEffect(()=>{
    //     axios.get('https://limitless-shelf-55516.herokuapp.com/')
    //     .then((res:any)=>{
    //         console.log(res.data)
    //     })
    //     .catch((err:any)=>{
    //         console.log(err)
    //     })
    // },[])
    return (
        <div>
            <p>我的key{process.env.REACT_APP_CLARIFAI_API_KEY}</p>
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