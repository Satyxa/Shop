import React from 'react';
import MainPage from "./MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import Registration from "./Registration/Registration";
import Catalog from "./Catalog/Catalog";
import Cart from "./Cart/Cart";
import Product from "./Product/Product";
import Login from "./Registration/Login";


const Content: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element=
                    {<MainPage/>} />
                <Route path="/Home" element=
                    {<MainPage/>} />
                <Route path="/Registration" element=
                    {<Registration/>} />
                <Route path="/Login" element=
                    {<Login/>} />
                <Route path="/Catalog/:sex/:category" element=
                    {<Catalog/>} />
                <Route path="/Catalog/" element=
                    {<Catalog/>} />
                <Route path="/Cart/:id" element=
                    {<Cart/>} />
                <Route path="/Product/:id" element=
                    {<Product/>} />
            </Routes>
        </div>
    );
};

export default Content;