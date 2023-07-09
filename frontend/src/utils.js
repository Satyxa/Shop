export const getCartData = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'))
    const totalCount = JSON.parse(localStorage.getItem('totalCount'))
    return {
        cartItems,
        totalCount
    }
}