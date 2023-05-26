import React, {useEffect, useState} from 'react';
import './Catalog.css'
import CatalogFilter from "./CatalogFilter";
import {Data} from '../../../DAL/axios'
import {useDispatch, useSelector} from "react-redux";
import {setGoods} from "../../../REDUX/GoodsReducer";


const Catalog = () => {
    const photoUrl = 'http://localhost:1002/'
    const goodsList = useSelector(state => state.goods.goodsList)
    const dispatch = useDispatch()
    console.log(goodsList)


    useEffect(() => {
        const res = Data.getGoods()
            console.log(res.data)
            console.log(res)
            dispatch(setGoods(res))
            console.log(goodsList)
    }, [goodsList])
    console.log(goodsList)

    return (
        <div>
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
                    {/*{goodsList.map((i) => {*/}
                    {/*    return <div>*/}
                    {/*        <div className="catalog__item">*/}
                    {/*            <img className='catalog__item-photo' src={photoUrl + i.photo} alt=""/>*/}
                    {/*            <div className="catalog__item__textbox">*/}
                    {/*                <h2 className='catalog__item-title'>{i.title}</h2>*/}
                    {/*                <p className='catalog__item-description'>{i.description}</p>*/}
                    {/*                <p className='catalog__item-price'>${i.price}</p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*})}*/}

                </div>
            </div>
        </div>
    );
};

export default Catalog;