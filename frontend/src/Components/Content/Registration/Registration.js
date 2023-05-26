import React from 'react';
import './Registration.css'

const Registration = () => {
    return (
        <div>
            <div className="page__title-box">
                <div className="container">
                    <h3 className='page__title'>registration</h3>
                </div>
            </div>

            <div className="container">
                <div className="registration__block">
                    <div className="registration__form">
                        <form action="">
                            <label htmlFor="" className='registration__form__label' >Your Name</label>
                            <input type="text" className='registration__form__input' placeholder='Name'/>
                            <input type="text" className='registration__form__input' placeholder='Lastname'/>
                            <div className="checkbox__box">
                                <input type="radio" className='registration__form__checkbox' value='female' name='radioname'/> Female
                                <input type="radio" className='registration__form__checkbox' value='male' name='radioname'/> Male
                            </div>
                            <label htmlFor="" className='registration__form__label'>Login details</label>
                            <input type="text" className='registration__form__input' placeholder='Email'/>
                            <input type="text" className='registration__form__input' placeholder='Password'/>
                            <p className='registration__form__warning'>Please use 8 or more characters, with at least 1 number and a mixture of uppercase and
                                lowercase letters</p>
                            <button className='register__button'>JOIN NOW</button>
                        </form>
                    </div>
                    <div className="registration__gifts">
                        <h3 className="registration__gifts__title">LOYALTY HAS ITS PERKS</h3>
                        <p className="registration__gifts__subtitle">Get in on the loyalty program where you can earn points and unlock serious perks. Starting
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