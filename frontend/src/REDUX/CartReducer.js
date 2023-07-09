import {createSlice, current} from "@reduxjs/toolkit";
import {getCartData} from "../utils";

const initialState = {
    cartItems: getCartData().cartItems || [],
    totalCount: getCartData().totalCount
}



const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {

        setCartItems: (state, action) => {
            const findItem = state.cartItems.find(obj => obj._id === action.payload._id)
            if (findItem) {
                findItem.quantity++
                state.totalCount++
            } else {
                state.cartItems.push({...action.payload, quantity: 1})
                state.totalCount++
            }
        },
        removeItem: (state, action) => {
            console.log('before', current(state))
        const findItem = state.cartItems.find(obj => obj._id === action.payload._id)
        if (findItem && findItem.quantity > 1) {
                findItem.quantity--
            state.totalCount--
        } else if (findItem.quantity === 1){
            state.cartItems = state.cartItems.filter(obj => obj._id !== findItem._id)
            state.totalCount--
        }
            console.log('after', current(state))
        }

    }

})
console.log(CartSlice)
export default CartSlice.reducer
export const {setCartItems, removeItem} = CartSlice.actions
console.log(CartSlice.actions)