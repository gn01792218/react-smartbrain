import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'
import type { RootState } from './store'
interface UserData{
    id:string,
    name:string,
    email:string,
    entries:string,
    joined:string
}
interface UserState {
    user:UserData,
    porfileModelOpen:boolean,
}
const initialState:UserState = {
    user:{
        id:'',
        name:'',
        email:'',
        joined:'',
        entries:'',
    },
    porfileModelOpen:false,
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state:UserState,action:PayloadAction<UserData>)=>{
            state.user = action.payload
        },
        setUserEnries:(state:UserState,action:PayloadAction<string>)=>{
            state.user.entries = action.payload
        },
        setProfileModalOpen:(state:UserState,action:PayloadAction<boolean>)=>{
            state.porfileModelOpen = action.payload
        },
    }
})

export const {setUser,setUserEnries,setProfileModalOpen} = userSlice.actions
export const selectUser = (state:RootState) => state.user.user
export default userSlice.reducer