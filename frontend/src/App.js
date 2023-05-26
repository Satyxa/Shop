import Header from "./Components/Header/Header";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Content from "./Components/Content/Content";
function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header/>
            <Content/>
            {/*<Footer/>*/}
        </div>
    </BrowserRouter>
  );
}

export default App;
