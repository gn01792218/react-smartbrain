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
}
const initialState:UserState = {
    user:{
        id:'',
        name:'',
        email:'',
        joined:'',
        entries:'',
    }
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
        }
    }
})

export const {setUser} = userSlice.actions
export const {setUserEnries} = userSlice.actions
export const selectUser = (state:RootState) => state.user.user
export default userSlice.reducer