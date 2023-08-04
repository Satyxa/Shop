import React, {useEffect, useRef} from 'react';
import './Cart.css'
import {useDispatch, useSelector} from "react-redux";
import {removeItem, setCartItems} from "../../../REDUX/CartReducer";
import {CartItemsT, StoreT} from "../../../types";
import MenuPlace from "../../Menu/MenuPlace";
import {RootState} from "../../../REDUX/store";
const Cart: React.FC = () => {
    const cartItems: Array<CartItemsT> = useSelector((state: RootState) => state.cart.cartItems)
    const totalCount = useSelector((state: RootState) => state.cart.totalCount)
    const cart = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()
    let isMounted = useRef(false)
    let totalPrice = 0
    const photoUrl = 'http://localhost:1002/'
    useEffect(() => {
        if(isMounted.current){
            const savedItemsCart = JSON.stringify(cartItems)
            localStorage.setItem('cartItems', savedItemsCart)
            localStorage.setItem('totalCount', JSON.stringify(totalCount))
        }
        isMounted.current = true
    }, [cartItems])
    return (
        <div>
            <MenuPlace/>
            <div className="page__title-box">
                <div className="container">
                    <h3 className='page__title'>SHOPPING CART</h3>
                </div>
            </div>
            <div className="container">
                <div className="cart__box">
                    <div className="cart__goods">
                        {cartItems ? cartItems.map(item => {
                            totalPrice += (item.price || 0) * (item.quantity || 0)
                            return <div className="cart__item-box">
                                <div className="cart__item-img"><img src={photoUrl + item.photo} alt="" width='262' height='306'/></div>
                                <div className="cart__item-info">
                                    <h3 className='cart__item-title'>{item.title}</h3>
                                    <p className='cart__item-price'>Price: <span className='cart__item-price-count'>${item.price}</span></p>
                                    <p className='cart__item-color'>Color: <span>{item.color}</span></p>
                                    <p className='cart__item-size'>Size: <span>{item.size}</span></p>
                                    <p className='cart__item-quantity'>Quantity:
                                        <button onClick={() => dispatch(removeItem(item))} className='quantity__minus quantity__button'>–</button>
                                        <span>{item.quantity}</span>
                                    <button onClick={() => dispatch(setCartItems(item))} className='quantity__plus quantity__button'>+</button>
                                    </p>
                                </div>
                            </div>
                        })
                        :
                            <div>Cart is empty</div>
                        }

                        <div className="goods__button">
                            <button className="goods__button__clear">CLEAR SHOPPING CART</button>
                            <button className="goods__button__continue">CONTINUE SHOPPING</button>
                        </div>
                    </div>
                    <div className="cart__form">
                        <p className='cart__form__title'>SHIPPING ADRESS</p>
                        <input className='cart__form__input' placeholder='Bangladesh' type="text"/>
                        <select className='cart__form__select' name="" id="">
                            <option value="">State</option>
                        </select>
                        <select className='cart__form__select' name="" id="">
                            <option value="">Postcode / Zip</option>
                        </select>
                        <div><button className="cart__form__button">GET A QUOTE</button></div>
                        <div className="continue-box">
                            <div className="total">
                                <p className='sub_total'>SUB TOTAL         <span className='sub_total-span'>${totalPrice}</span> </p>
                                <p className='grand_total' >GRAND TOTAL <span className='grand_total-span'>${totalPrice}</span></p>
                                <hr className='hrhr'/>
                                <button className="proceed">PROCEED TO CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;