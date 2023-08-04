import React, {useRef} from 'react';
import './Product.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import MenuPlace from "../../Menu/MenuPlace";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../REDUX/store";
const Product: React.FC = () => {
    type nextEl = string
    type prevEl = string
    const goodsList = useSelector((state: RootState) => state.goods.goodsList)
    const {id} = useParams()
    const currentItem = goodsList.filter(item => item._id === id)
    const prevSlide = useRef()
    const nextSlide = useRef()
    const photosArr = currentItem[0].morePhotos
    const photoUrl = 'http://localhost:1002/'
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
            <div className="slider__box">
                <Swiper className='slider__container'
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        slidesPerView={1}
                        navigation={
                            {
                                nextEl: '.next__slide',
                                prevEl: '.prev__slide'
                            }
                        }

                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                >
                    <button ref={prevSlide} className='prev__slide slider__button'>
                        <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.6998 3.7499L4.9498 11.4999L12.6998 19.2499L11.1498 22.3499L0.299805 11.4999L11.1498 0.649902L12.6998 3.7499Z"
                                fill="black"/>
                        </svg>
                    </button>
                    <div className="slide__img__container">
                        {photosArr.map((img) => {
                            console.log(photoUrl + img)
                            console.log(img)
                                return <SwiperSlide><img className='slider__current__image' src={photoUrl + img} width='597'
                                                         height='724'
                                                         alt=""/></SwiperSlide>
                        })}
                    </div>
                    <button ref={nextSlide} className='next__slide slider__button'>
                        <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.299805 19.2499L8.0498 11.4999L0.299805 3.7499L1.8498 0.649902L12.6998 11.4999L1.8498 22.3499L0.299805 19.2499Z"
                                fill="#F16D7F"/>
                        </svg>
                    </button>
                </Swiper>
            </div>

            { currentItem.map(currentItem => {
                return <div className="goods__info">
                    <div className="goods__info-box">
                        <div className="goods__info__container">
                            <h3 className='goods__info-category'>WOMEN COLLECTION</h3>
                            <hr className='goods__info-hr1'/>
                            <p className='goods__info-title'>{currentItem.title}</p>
                            <p className='goods__info-description'>{currentItem.description}</p>
                            <p className='goods__info-price'>${currentItem.price}</p>
                            <hr className='goods__info-hr2'/>
                        </div>
                        <div className="selector">
                            <div className="selector__box">
                                <div className="selector__item">
                                    <button className='select__color select__button'>
                                        <p>CHOOSE COLOR</p>
                                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z"
                                                fill="#6F6E6E"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="selector__item">
                                    <button className='select__size select__button'>
                                        <p>CHOOSE SIZE </p>
                                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z"
                                                fill="#6F6E6E"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="selector__item">
                                    <button className='select__quantity select__button'>
                                        <p>QUANTITY</p>
                                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z"
                                                fill="#6F6E6E"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button className='addToCart'>Add to Cart</button>
                    </div>

                </div>
            })
            }


        </div>
    );
};

export default Product;