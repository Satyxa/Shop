import React from 'react';
import './Fetured.css'
import one from '../../../assets/one.png'
import two from '../../../assets/2.png'
import three from '../../../assets/3.png'
import four from '../../../assets/4.png'
import five from '../../../assets/5.png'
import six from '../../../assets/6.png'


export default () => {
    return (
        <div className='container'>

                <h3 className='section__title'>Fetured Items</h3>
                <p className='section__subtitle'>Shop for items based on what we featured in this week</p>

            <div className="card__box">
                <div className="card">
                    <div className="card__img__test">
                        <img className='card__img' src={one} alt=""/>
                        <div className="card__hover">
                            <button className="card__hover__button">Add to Cart</button>
                        </div>
                    </div>
                    <div className="text-box">
                        <h3  className='card__title'>Куртка гучи</h3>
                        <p  className='card__description'>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p  className='card__price'>1541552$</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card__img__test">
                        <img className='card__img' src={two} alt=""/>
                        <div className="card__hover">
                            <button className="card__hover__button">Add to Cart</button>
                        </div>
                    </div>
                    <div className="text-box">
                        <h3  className='card__title'>Туфли гучи</h3>
                        <p  className='card__description'>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p  className='card__price'>891152$</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card__img__test">
                        <img className='card__img' src={three} alt=""/>
                        <div className="card__hover">
                            <button className="card__hover__button">Add to Cart</button>
                        </div>
                    </div>
                    <div className="text-box">
                    <h3  className='card__title'>Шорты баленсиага</h3>
                    <p  className='card__description'>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                    <p  className='card__price'>6534$</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card__img__test">
                        <img className='card__img' src={four} alt=""/>
                        <div className="card__hover">
                            <button className="card__hover__button">Add to Cart</button>
                        </div>
                    </div>
                    <div className="text-box">
                    <h3  className='card__title'>Майка луивьютон</h3>
                    <p  className='card__description'>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                    <p  className='card__price'>98809$</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card__img__test">
                        <img className='card__img' src={five} alt=""/>
                        <div className="card__hover">
                            <button className="card__hover__button">Add to Cart</button>
                        </div>
                    </div>
                    <div className="text-box">
                    <h3  className='card__title'>Пиджак прада</h3>
                    <p  className='card__description'>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                    <p  className='card__price'>76652$</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card__img__test">
                        <img className='card__img' src={six} alt=""/>
                        <div className="card__hover">
                            <button className="card__hover__button">Add to Cart</button>
                        </div>
                    </div>
                    <div className="text-box">
                    <h3  className='card__title'>Футболка зара</h3>
                    <p  className='card__description'>Футболка с круглым вырезом и короткими рукавами. Цветной контрастный принт спереди. В замыленном виде. Футболка с круглым вырезом и короткими рукавами. Цветной контрастный принт спереди. В замыленном виде.</p>
                    <p  className='card__price'>52$</p>
                    </div>
                </div>
            </div>
            <button className="showMore">Browse All Product</button>
        </div>
    );
};
