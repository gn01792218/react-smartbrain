import React, { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Sigin() {
    const navigate = useNavigate();
    const [userName,setUserName] = useState('')
    const [userEmail,setUserEmail] = useState('')
    const [userPassword,setUserPassword] = useState('')
    function setName (event:React.ChangeEvent<HTMLInputElement>){
        setUserName(event.target.value)
    }
    function setMail (event:React.ChangeEvent<HTMLInputElement>){
        setUserEmail(event.target.value)
    }
    function setPassword (event:React.ChangeEvent<HTMLInputElement>){
        setUserPassword(event.target.value)
    }
    function sendRegisterData(){
        const userRegisterData ={
            name:userName,
            email:userEmail,
            password:userPassword,
        }
        axios.post('https://limitless-shelf-55516.herokuapp.com/register',userRegisterData)
        .then(res=>{
            console.log(res.data)
            if(res.data.id) navigate('/Login');
        })
    }
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        onChange={setName}
                        placeholder="Full Name" />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        onChange={setMail}
                        placeholder="Email" />

                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        onChange={setPassword}
                        placeholder="Password" />
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-black border-solid border-2 hover:bg-green-dark focus:outline-none my-1"
                        onClick={sendRegisterData}
                    >Create Account</button>
                    <div className="text-grey-dark mt-6 text-center">
                        Already have an account?
                        <a className="no-underline border-b border-blue text-blue" href="../login/">
                            Log in
                        </a>.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sigin