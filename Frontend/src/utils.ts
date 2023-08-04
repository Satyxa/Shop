export const getCartData = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'))
    const totalCount: number = JSON.parse(localStorage.getItem('totalCount'))

    return {
        cartItems,
        totalCount
    }
}