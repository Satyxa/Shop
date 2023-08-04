import React from 'react';
import './Catalog.css'
const CatalogFilter: React.FC = () => {
    return (
        <div>
            <div className="filter">
                <button className='filter__button'>Filter</button>
                <div className="filter__params">
                    <div className="p2">
                        <select className='filter__select' name="" id="">
                            <option value="0">TRENDING NOW</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="p2">
                        <select className='filter__select' name="" id="">
                            <option value="0">SIZE</option>
                            <option value="1">S</option>
                            <option value="2">M</option>
                            <option value="3">L</option>
                            <option value="2">XL</option>
                            <option value="3">XXL</option>
                            <option value="2">XXXL</option>
                        </select>
                    </div>
                    <div className="p2">
                        <select className='filter__select' name="" id="">
                            <option className='bb' value="0">PRICE</option>
                            <option value="1"><input type="checkbox"/> - +</option>
                            <option value="2"><input type="checkbox"/> + -</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogFilter;