import Tilt from 'react-tilt'
import logo from './brain.png'
function Logo() {
    return (
        <div className='flex justify-center mt-10'>
            <Tilt className="Tilt border-solid border-2" options={{ max: 35 }} style={{ height: 128, width: 128 }} >
                <div className="Tilt-inner"> 
                    <img className='w-full' src={logo} alt="logo" />
                </div>
            </Tilt>
        </div>
    )
}
export default Logo