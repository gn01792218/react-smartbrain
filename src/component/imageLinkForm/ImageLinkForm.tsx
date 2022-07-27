import React from 'react'
import './imageLinkForm.css'
interface Props{
    inputChange(event:React.SyntheticEvent<HTMLInputElement>):void
    onSubmit():void
}
function ImageLinkForm (props:Props){
    const {inputChange,onSubmit} = props
    return(
        <div className='w-[600px] mx-auto mt-5'>
            <div>
            <p className="fs-3 text-slate-400 text-center">{'This Magic Brain will detect face in your image.Give it a try'}</p>
            <p className="fs-3 text-red-400 text-center">{'Only support JPG、PNG for image formate'}</p>
            <div className='w-full h-[100px] flex justify-center items-center bg rounded-sm'>
                <input className="w-[400px] h-[50px] border-solid border-2 rounded-lg" type="text" onChange={inputChange}/>
                <button className='w-[100px] h-[50px] rounded-lg text-white bg-amber-400' onClick={onSubmit}>Detect</button>
            </div>
            </div>
        </div>
    )

}

export default ImageLinkForm