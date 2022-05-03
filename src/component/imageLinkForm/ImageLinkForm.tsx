import React from 'react'
import './imageLinkForm.css'
function ImageLinkForm (){
    return(
        <div className='w-1/2 mr-auto ml-auto'>
            <p className="fs-3">{'This Magic Brain will detect face in your image.Give it a try'}</p>
            <div className='w-[600px] h-[100px] flex justify-center items-center bg rounded-sm'>
                <input className="w-[400px] h-[50px] border-solid border-2 rounded-lg" type="text" />
                <button className='w-[100px] h-[50px] rounded-lg text-white bg-amber-400'>Detect</button>
            </div>
        </div>
    )

}

export default ImageLinkForm