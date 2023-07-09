import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userInfo: {
        _id: null,
        email: null,
        password: null,
        login: null,
        sex: null,
        age: null,

    },
    authStatus: 'deactivate',

}

console.log(initialState.userInfo)

const LoginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers:{
        LoginUser: (state, action) => {
            debugger
            state.authStatus = 'active'
            state.userInfo = {...action.payload}
        }
    }

})
export default LoginSlice.reducer
export const {LoginUser} = LoginSlice.actions
console.log(LoginSlice.actions)