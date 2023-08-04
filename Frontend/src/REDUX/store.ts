import {configureStore} from "@reduxjs/toolkit";
import goods from "./GoodsReducer";
import cart from './CartReducer'
import menu from './MenuReducer'
import login from './LoginReducer'


export const store: RootState = configureStore({
    reducer: {
        goods,
        cart,
        menu,
        login
    }
})

export type RootState = ReturnType<typeof store.getState>