import React from 'react';
import MainPage from "./MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import Registration from "./Registration/Registration";
import Catalog from "./Catalog/Catalog";
import Cart from "./Cart/Cart";


const Content = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element=
                    {<MainPage/>} />
                <Route path="/Home" element=
                    {<MainPage/>} />
                <Route path="/Registration" element=
                    {<Registration/>} />
                <Route path="/Catalog" element=
                    {<Catalog/>} />
                <Route path="/Cart" element=
                    {<Cart/>} />
            </Routes>
        </div>
    );
};

export default Content;