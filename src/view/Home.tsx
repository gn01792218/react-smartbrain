import React from 'react'
import Logo from '../component/logo/Logo'
import ImageLinkForm from '../component/imageLinkForm/ImageLinkForm'
import Rank from '../component/rank/Rank'
function Home (){
    return (
        <div>
            <Logo/>
            <Rank/>
            <ImageLinkForm/>
        </div>
    )
}
export default Home