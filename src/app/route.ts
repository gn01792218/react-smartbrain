import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface RouteState {
    isLogin:boolean,
}
const initialState:RouteState = {
    isLogin:false,
}

export const routeSlice = createSlice({
    name:'route',
    initialState,
    reducers:{
        setIsLogin:(state:RouteState,action:PayloadAction<boolean>)=>{
            state.isLogin = action.payload
        },
    }
})

export const {setIsLogin} = routeSlice.actions
export const selectIsLogin = (state:RootState) => state.route.isLogin
export default routeSlice.reducer