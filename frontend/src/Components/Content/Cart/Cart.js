import React from 'react';
import './Cart.css'
import photo from './../../../assets/daef.png'
const Cart = () => {
    return (
        <div>
            <div className="page__title-box">
                <div className="container">
                    <h3 className='page__title'>SHOPPING CART</h3>
                </div>
            </div>
            <div className="container">
                <div className="cart__box">
                    <div className="cart__goods">
                        <div className="cart__item-box">
                            <div className="cart__item-img"><img src={photo} alt="" width='262' height='306'/></div>
                            <div className="cart__item-info">
                                <h3 className='cart__item-title'>MANGO  PEOPLE  T-SHIRT</h3>
                                <p className='cart__item-price'>Price: <span className='cart__item-price-count'>$300</span></p>
                                <p className='cart__item-color'>Color: <span>Red</span></p>
                                <p className='cart__item-size'>Size: <span>XL</span></p>
                                <p className='cart__item-quantity'>Quantity: <span>2</span></p>
                            </div>
                        </div>
                        <div className="cart__item-box">
                            <div className="cart__item-img"><img src={photo} alt="" width='262' height='306'/></div>
                            <div className="cart__item-info">
                                <h3 className='cart__item-title'>MANGO  PEOPLE  T-SHIRT</h3>
                                <p className='cart__item-price'>Price: <span className='cart__item-price-count'>$300</span></p>
                                <p className='cart__item-color'>Color: <span>Red</span></p>
                                <p className='cart__item-size'>Size: <span>XL</span></p>
                                <p className='cart__item-quantity'>Quantity: <span>2</span></p>
                            </div>
                        </div>
                        <div className="cart__item-box">
                            <div className="cart__item-img"><img src={photo} alt="" width='262' height='306'/></div>
                            <div className="cart__item-info">
                                <h3 className='cart__item-title'>MANGO  PEOPLE  T-SHIRT</h3>
                                <p className='cart__item-price'>Price: <span className='cart__item-price-count'>$300</span></p>
                                <p className='cart__item-color'>Color: <span>Red</span></p>
                                <p className='cart__item-size'>Size: <span>XL</span></p>
                                <p className='cart__item-quantity'>Quantity: <span>2</span></p>
                            </div>
                        </div>
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
                                <p className='sub_total'>SUB TOTAL         <span className='sub_total-span'>$900</span> </p>
                                <p className='grand_total' >GRAND TOTAL <span className='grand_total-span'>$900</span></p>
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