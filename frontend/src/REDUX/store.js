import React from 'react'
import {configureStore} from "@reduxjs/toolkit";
import goods from "./GoodsReducer";
import cart from './CartReducer'
import menu from './MenuReducer'
import login from './LoginReducer'
export const store = configureStore({
    reducer: {
        goods,
        cart,
        menu,
        login
    }
})