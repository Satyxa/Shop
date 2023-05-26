import React from 'react';
import './Subscribe.css'
import photo from '../../../assets/buissinesswoman.png'
const Subscribe = () => {
    return (
        <div className='privet'>
            <div className='last__section'>
                <div className="container">
                    <div className="flex">
                        <div className="quote">
                            <img src={photo} className='quote__photo' alt="" width='96' height='96'/>
                            <p className='quote__text'>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
                        </div>
                        <div className="subscribe">
                            <h3 className='title'>SUBSCRIBE</h3>
                            <p className='subtitle'>FOR OUR NEWLETTER AND PROMOTION</p>
                            <div className="send__email">
                                <input className='input__email' placeholder='Enter Your Email' type="text"/>
                                <button className='push__email'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;