import React from 'react'
import {configureStore} from "@reduxjs/toolkit";
import goods from "./GoodsReducer";

export const store = configureStore({
    reducer: {
    goods,
    }
})