import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";

const initialState = {
    menuStatus: 'deactivate'
}

const MenuSlice = createSlice({
    name: 'Menu',
    initialState,
    reducers: {
        setMenuStatus: (state: RootState) => {
            if (state.menuStatus === 'deactivate') {
                state.menuStatus = 'active'
            } else {
                state.menuStatus = 'deactivate'
            }
        }
    }

})
export default MenuSlice.reducer
export const {setMenuStatus} = MenuSlice.actions