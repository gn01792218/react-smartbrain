import React from 'react'
import {Link} from 'react-router-dom'
function Nav (){
    return (
        <nav>
            <ul className='flex justify-end'>
                <li className='cursor-pointer hover:opacity-50 mr-2'>Sign Up</li>
                <li className='mr-2'><Link to="/">Home</Link></li>
                <li className='mr-2'><Link to="/About">About</Link></li>
            </ul>
        </nav>
    )
}
export default Nav