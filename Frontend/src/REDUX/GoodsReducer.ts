import {createSlice} from "@reduxjs/toolkit";
import {GoodsStateT} from "../types";
import {RootState} from "./store";


const initialState: GoodsStateT = {
    goodsList: [
        {
            photo: null,
            title: null,
            description: null,
            size: null,
            color: null,
            views: null,
            _id: null,
            price: null,
            sex: null,
            category: null
        },
    ]
}

const GoodsSlice = createSlice({
    name: 'Goods',
    initialState,
    reducers:{
        setGoods: (state: RootState, action) => {
            state.goodsList = [...action.payload]
        },
    }

})
export default GoodsSlice.reducer
export const {setGoods} = GoodsSlice.actions