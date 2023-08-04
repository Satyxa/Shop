import React from 'react';
import Brand from "./Brand";
import Categories from "./Categories";
import Fetured from "./Fetured";
import Advantages from "./Advantages";

const MainPage: React.FC = () => {
    return (
        <div>
            <Brand/>
            <Categories/>
            <Fetured/>
            <Advantages/>
        </div>
    );
};

export default MainPage;