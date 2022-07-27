import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks'
import {setIsLogin} from '../app/route'
import axios from 'axios'
import { useState } from 'react';
import { setUser } from '../app/user'
function Login() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    function setUserEmail (event:React.ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
    }
    function setUserPassword (event:React.ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }
    function fetchLogin(){
        const loginData ={
            email:email,
            password:password
        }
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/sigin`,loginData)
        .then(res=>{
            if(!res.data){
                alert('登入失敗')
            }else{
                dispatch(setUser(res.data))
                login()
            }
        })
    }
    function login(){
        dispatch(setIsLogin(true))
        navigate('/react-smartbrain');
    }
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Login</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="email"
                        onChange={setUserEmail}
                        />
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        onChange={setUserPassword}
                        placeholder="Password" />

                    <button
                        onClick={fetchLogin}
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-black border-solid border-2 hover:bg-green-dark focus:outline-none my-1"
                    >Log in</button>
                </div>
            </div>
        </div>
    )
}
export default Login