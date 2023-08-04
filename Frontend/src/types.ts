export interface MenuStateT {
    menuStatus: string
}

export interface StoreT {
    goods: GoodsStateT
    login: LoginStateT
    cart: CartStateT
    menu: MenuStateT
}

export interface CartItemsT {
    _id: string | null
    price: number | null
    img: string | null
    title: string | null
    description: string | null
    quantity: number | null
    color: Array<string> | null
    size: Array<string> | null
    photo: string | null
    category: string | null | undefined
}

export interface CartStateT {
    cartItems: Array<CartItemsT>,
    totalCount: number
}

export interface GoodsListT {
    morePhotos: Array<string>
    price: number | null
    photo: string | null,
    title: string |  null,
    description: string |  null,
    size: Array<string> | null,
    color: Array<string> | null,
    views: number | null,
    _id: string |  null,
    sex: string | null
    category: string | null | undefined
}

export interface GoodsStateT {
    goodsList: Array<GoodsListT>
}

export interface UserInfoT {
    _id: string | null,
    email: string | null,
    password: string | null,
    login: string | null,
    sex: string | null,
    age: number | null,
}
export interface LoginStateT {
    userInfo: UserInfoT
    authStatus: string
}