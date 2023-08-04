import React from 'react';
import './Advantages.css'
import car from './../../../assets/car.svg'
import discount from './../../../assets/discount.svg'
import crown from './../../../assets/crown.svg'
const Advantages: React.FC = () => {
    return (
        <div className='advantages'>
            <div className="container">
                <div className="df">
                    <div className="advantages__box">
                        <img className='advantages__img' width='45' height='32' src={car} alt=""/>
                        <h3 className='advantage__title'>Free Delivery</h3>
                        <p className='advantage__description'>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                    <div className="advantages__box">
                        <img className='advantages__img' width='40' height='40' src={discount} alt=""/>
                        <h3 className='advantage__title'>Sales & discounts</h3>
                        <p className='advantage__description'>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                    <div className="advantages__box">
                        <img className='advantages__img' width='47' height='35' src={crown} alt=""/>
                        <h3 className='advantage__title'>Quality assurance</h3>
                        <p className='advantage__description'>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Advantages;