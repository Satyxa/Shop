import React from 'react';
import {NavLink} from "react-router-dom";
import './Menu.css'
import {useDispatch, useSelector} from "react-redux";
import {setMenuStatus} from "../../REDUX/MenuReducer.ts";
const Menu: React.FC = () => {
    const menu = useSelector(state => state.menu)
    const dispatch = useDispatch()
    return (
        <div>
            <div className={menu.menuStatus === "active" ? "menu__wrapper vis" : "menu__wrapper nonVis"}>
                <div className="menu-box">
                    <button onClick={() => dispatch(setMenuStatus(menu))} className='menu-close'>
                        <svg width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                fill="#575757"/>
                        </svg>
                    </button>
                    <div className="menu-links">
                        <h3 className='menu-box-title'>menu</h3>

                        <p className='menu-box-subtitle'>MAN</p>
                        <div className='menu-box-links'>
                            <NavLink to='/Catalog/male/4' className="menu-box-link">Accessories</NavLink>
                            <NavLink to='/Catalog/male/1' className="menu-box-link">Bags</NavLink>
                            <NavLink to='/Catalog/male/6' className="menu-box-link">Denim</NavLink>
                            <NavLink to='/Catalog/male/2' className="menu-box-link">T-Shirts</NavLink>
                        </div>
                        <p className='menu-box-subtitle'>WOMAN</p>
                        <div className="menu-box-links">
                            <NavLink to='/Catalog/female/4' className="menu-box-link">Accessories</NavLink>
                            <NavLink to='/Catalog/female/3' className="menu-box-link">Jackets & Coats</NavLink>
                            <NavLink to='/Catalog/female/5' className="menu-box-link">Polos</NavLink>
                            <NavLink to='/Catalog/female/2' className="menu-box-link">T-Shirts</NavLink>
                            <NavLink to='/Catalog/female/6' className="menu-box-link">Shirts</NavLink>
                        </div>
                        <p className='menu-box-subtitle'>KIDS</p>
                        <div className="menu-box-links">
                            <NavLink to='/Catalog/kids/4' className="menu-box-link">Accessories</NavLink>
                            <NavLink to='/Catalog/kids/3' className="menu-box-link">Jackets & Coats</NavLink>
                            <NavLink to='/Catalog/kids/5' className="menu-box-link">Polos</NavLink>
                            <NavLink to='/Catalog/kids/2' className="menu-box-link">T-Shirts</NavLink>
                            <NavLink to='/Catalog/kids/6' className="menu-box-link">Shirts</NavLink>
                            <NavLink to='/Catalog/kids/1' className="menu-box-link">Bags</NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Menu;