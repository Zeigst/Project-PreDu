import './App.scss'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { PreduContextProvider } from './PreduContext';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import Product from './Pages/Product/Product';

function App() {
  return (
    <div className="App">
      <PreduContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate replace to="/Home"/>} />
            <Route exact path='/Home' element={<><Header/><Home/><Footer/></>}/>
            <Route exact path='/Shop' element={<><Header/><Shop/><Footer/></>}/>
            <Route exact path='/Cart' element={<><Header/><Cart/><Footer/></>}/>
            <Route exact path='/Product' element={<><Header/><Product/><Footer/></>}/>
          </Routes>
        </Router>
      </PreduContextProvider>
    </div>
  );
}

export default App;
