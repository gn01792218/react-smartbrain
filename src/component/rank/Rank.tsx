import React from 'react'
import { useAppSelector } from '../../app/hooks'
function Rank (){
    const userCount = useAppSelector((state)=>state.user.user.entries)
    return (
        <div className='text-white text-center'>
            <p>{'Your Rank now is'}</p>
            <p>{userCount}</p>
        </div>
    )
}
export default Rank