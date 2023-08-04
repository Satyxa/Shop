import React from 'react'
import Header from "./Components/Header/Header";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Content from "./Components/Content/Content";
import Menu from "./Components/Menu/Menu";
function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header/>
            <Menu/>
            <Content/>
        </div>
    </BrowserRouter>
  );
}

export default App;
