import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useAppSelector,useAppDispatch } from '../app/hooks'
import { setIsLogin } from '../app/route'
function NavBar() {
    const navigate = useNavigate();
    const isLogin = useAppSelector((state) => state.route.isLogin)
    const dispatch = useAppDispatch()
    function logout() {
        dispatch(setIsLogin(false))
        navigate('/Login');
    }
    return (
        <nav>
            <ul className='flex justify-end'>
                {/* &&條件判斷相當於 !isLogin ? <li>略</li> : null
                    白話文為 : 如果...就...
                */}
                {!isLogin && <li className='cursor-pointer hover:opacity-50 mr-2'><Link to="/Sigin">Sigin</Link></li>}
                {isLogin? <li className='cursor-pointer hover:opacity-50 mr-2' onClick={logout}>LogOut</li>
                : <li className='cursor-pointer hover:opacity-50 mr-2'><Link to="/Login">Login</Link></li>}
                <li className='mr-2'><Link to="/">Home</Link></li>
                <li className='mr-2'><Link to="/About">About</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar