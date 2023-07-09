import React, {useEffect, useState} from 'react';
import './Catalog.css'
import CatalogFilter from "./CatalogFilter";
import {Data} from '../../../DAL/axios'
import {useDispatch, useSelector} from "react-redux";
import {setGoods} from "../../../REDUX/GoodsReducer";
import {setCartItems} from "../../../REDUX/CartReducer";
import MenuPlace from "../../Menu/MenuPlace";
import {NavLink, useParams} from "react-router-dom";


const Catalog = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const photoUrl = 'http://localhost:1002/'
    const goodsList = useSelector(state => state.goods.goodsList)
    const dispatch = useDispatch()
    const uriSex = useParams().sex
    const uriCategory = useParams().category
    const goodListAcc = goodsList.filter(i => i.sex === uriSex)
    const filterGoodList = goodListAcc.filter(i => i.category === uriCategory)
    console.log(filterGoodList)

    useEffect(() => {
        const getItems = async () => {
            const res = await Data.getGoods(currentPage)
            dispatch( setGoods(res.data))
            console.log(res)
        };
        getItems();
    }, []);
    // useEffect(() => {
    //     const please = async () => {
    //        const res = await Data.getGoods(currentPage)
    //         dispatch( setGoods(res.data))
    //     }
    //     please()
    // }, [])
    const addToCart = (item) => {
        const {photo, _id, title, description, size, color, views, tags,  price, category} = item
        const payload = {photo, _id, title, description, size, color, views, tags, price, category}
        dispatch(setCartItems(payload))
    }

    return (
        <div>
            <MenuPlace/>
            <div className="page__title-box">
                <div className="container">
                    <div className="test">
                        <h3 className='page__title'>NEW ARRIVALS</h3>
                        <div className="page__links-box">
                            <span><a href="#" className="page__title__link">HOME </a>/ </span>
                            <span><a href="#" className="page__title__link">MEN </a>/ </span>
                            <span><a href="#" className="page__title__link page__link-active"> NEW ARRIVALS</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <CatalogFilter/>
                <div className="catalog">
                    {uriCategory === undefined && uriSex === undefined ?
                        goodsList.map((i) => {
                            return <div className="catalog__item">
                                <div className="test">
                                    <img className='catalog__item-photo' src={photoUrl + i.photo} alt="" width='360' height='420'/>
                                    <NavLink to={'/Product/' + i._id} className="catalog__button__wrapper"></NavLink>
                                    <button className='catalog__button' onClick={ () => addToCart(i)}>Add To Cart</button>
                                </div>
                                <div className="catalog__item__textbox">
                                    <h2 className='catalog__item-title'>{i.title}</h2>
                                    <p className='catalog__item-description'>{i.description}</p>
                                    <p className='catalog__item-price'>${i.price}</p>
                                </div>
                            </div>
                        })
                        :
                        filterGoodList.map((i) => {
                            return <div className="catalog__item">
                                <div className="test">
                                    <img className='catalog__item-photo' src={photoUrl + i.photo} alt="" width='360' height='420'/>
                                    <NavLink to={'/Product/' + i._id} className="catalog__button__wrapper"></NavLink>
                                    <button className='catalog__button' onClick={ () => addToCart(i)}>Add To Cart</button>
                                </div>
                                <div className="catalog__item__textbox">
                                    <h2 className='catalog__item-title'>{i.title}</h2>
                                    <p className='catalog__item-description'>{i.description}</p>
                                    <p className='catalog__item-price'>${i.price}</p>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    );
};

React.memo(Catalog)

export default Catalog;