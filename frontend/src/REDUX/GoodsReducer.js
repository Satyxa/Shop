import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    goodsList: [
        {
            photo: null,
            title: null,
            description: null,
            size: null,
            color: null,
            views: null,
            _id: null,
            tags: null
        },
    ]
}

const GoodsSlice = createSlice({
    name: 'Goods',
    initialState,
    reducers:{
        setGoods: (state, action) => {
            state.goodsList = [...action.payload]
        },
    }

})
export default GoodsSlice.reducer
export const {setGoods} = GoodsSlice.actions
console.log(GoodsSlice.actions)