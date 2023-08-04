import {createSlice} from "@reduxjs/toolkit";
import {LoginStateT} from "../types";
import {RootState} from "./store";

const initialState: LoginStateT = {
    userInfo: {
        _id: null,
        email: null,
        password: null,
        login: null,
        sex: null,
        age: null,

    },
    authStatus: localStorage.getItem('authStatus') || 'deactivate',
}

const LoginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers:{
        LoginUser: (state: RootState, action) => {
            state.authStatus = 'active'
            state.userInfo = {...action.payload}
        }
    }

})
export default LoginSlice.reducer
export const {LoginUser} = LoginSlice.actions