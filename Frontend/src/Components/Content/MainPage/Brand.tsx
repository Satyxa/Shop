import React from 'react';
import './Brand.css'
import brand from '../../../../src/assets/brand2.jpg'
import {useSelector} from "react-redux";
import Menu from "../../Menu/Menu";
import MenuPlace from "../../Menu/MenuPlace";

const Brand: React.FC = () => {

    const menu = useSelector(state => state.menu)

    return (
        <div>
            <MenuPlace/>
            <div className='brand__field'>

                <div className="brand__field__img">
                    <img src={brand} width='800' height='765'/>
                </div>
                <div className="brand__field__title">
                    <div className="title__box">

                        <h1>THE BRAND</h1>
                        <h2>OF LUXERIOUS FASHION</h2>

                    </div>
                </div>
                <Menu/>
            </div>
        </div>

    );
};

export default Brand;