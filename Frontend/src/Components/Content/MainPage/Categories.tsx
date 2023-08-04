import React from 'react';
import './Categories.css'

const Categories: React.FC = () => {
    return (
        <div className='container'>
            <div className="categories__box">
                <div className="box-for-items">
                    <div className='bkgimg-woman gen'>
                        <div className="text-center">
                            <p className='p1'>30% OFF</p>
                            <p className='p2'>FOR WOMEN</p>
                        </div>
                    </div>
                    <div className='bkgimg-man gen'>
                        <div className="text-center">
                            <p className='p1'>HOT DEAL</p>
                            <p className='p2'>FOR MEN</p>
                        </div>
                    </div>
                    <div className='bkgimg-kids gen'>
                        <div className="text-center">
                            <p className='p1'>NEW ARRIVALS</p>
                        <p className='p2'>FOR KIDS</p>
                        </div>
                    </div>
                    <div className='bkgimg-accesories gen g1'>
                        <div className="text-center">
                            <p className='p1'>LUXIROUS & TRENDS</p>
                            <p className='p2'>ACCESORIES</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;