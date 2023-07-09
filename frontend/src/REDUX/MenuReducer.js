import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    menuStatus: 'deactivate'
}

const MenuSlice = createSlice({
    name: 'Menu',
    initialState,
    reducers:{
        setMenuStatus: (state) => {
            if (state.menuStatus === 'deactivate'){
                state.menuStatus = 'active'
            } else {
                state.menuStatus = 'deactivate'
            }
        }
    }

})
export default MenuSlice.reducer
export const {setMenuStatus} = MenuSlice.actions
console.log(MenuSlice.actions)