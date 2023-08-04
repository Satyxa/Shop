import React, {useRef, useState} from 'react';
import './Registration.css'
import axios from "axios";
import MenuPlace from "../../Menu/MenuPlace";
import {Navigate, NavLink} from "react-router-dom";

const Registration: React.FC = () => {
    const [sex, setSex] = useState('Female')
    const loginRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    console.log(sex)
    const send = async (e) => {
        e.preventDefault()
        const login:string = loginRef.current.value
        const email:string = emailRef.current.value
        const password:string = passwordRef.current.value
            return await axios.post('http://localhost:1002/auth/register', {
                login, sex, email, password
            })
    }
    if(localStorage.getItem('authStatus') === 'active'){
        return <Navigate to='/'/>
    }
    return (
        <div>
            <MenuPlace/>
            <div className="page__title-box">
                <div className="container">
                    <h3 className='page__title'>registration</h3>
                </div>
            </div>

            <div className="container">
                <div className="registration__block">
                    <div className="registration__form">
                        <form action="">
                            <label htmlFor="" className='registration__form__label'>Login</label>
                            <input ref={loginRef} type="text" className='registration__form__input'
                                   placeholder='Login'/>
                            <div className="checkbox__box">
                                <input onClick={() => {setSex('Female')}} type="radio" className='registration__form__checkbox'
                                       value='female' name='radioname'/> Female
                                <input onClick={() => {setSex('Male')}} type="radio" className='registration__form__checkbox' value='male'
                                       name='radioname'/> Male
                            </div>
                            <label htmlFor="" className='registration__form__label'>Login details</label>
                            <input ref={emailRef} type="text" className='registration__form__input'
                                   placeholder='Email'/>
                            <input ref={passwordRef} type="text" className='registration__form__input'
                                   placeholder='Password'/>
                            <p className='registration__form__warning'>Please use 8 or more characters, with at least 1
                                number and a mixture of uppercase and
                                lowercase letters</p>
                            <button onClick={send} className='register__button'>REGISTER</button>
                        </form>
                        <div className="NavigateToLogin">
                            <p>Уже есть аккаунт?</p> <NavLink to='/Login'><button className='NavigateToLogin__button'>Войти</button></NavLink>
                        </div>
                    </div>
                    <div className="registration__gifts">
                        <h3 className="registration__gifts__title">LOYALTY HAS ITS PERKS</h3>
                        <p className="registration__gifts__subtitle">Get in on the loyalty program where you can earn
                            points and unlock serious perks. Starting
                            with these as soon as you join:</p>
                        <ul className="perks__list">
                            <li className="perks__list__item">15% off welcome offer</li>
                            <li className="perks__list__item">Free shipping, returns and exchanges on all orders</li>
                            <li className="perks__list__item">$10 off a purchase on your birthday</li>
                            <li className="perks__list__item">Early access to products</li>
                            <li className="perks__list__item">Exclusive offers & rewards</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;