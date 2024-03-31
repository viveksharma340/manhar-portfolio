import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Navbar from './Components/Navvbar/Navbar';
import './App.css';
import Product from './Components/ProductWork/Product';
import MiscellaneousWork from './Components/MiscellaneousWork/MiscellaneousWork';
import Livewise from './Components/livewise/Livewise';
const { Content } = Layout;

function App() {
  return (
    <div className="App">

    <Router>
        <Navbar />
        <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product-work" element={<Product />} />
              <Route path="/miscellaneous-work" element={<MiscellaneousWork />} />
              <Route path="/graphic-work" element={<Livewise />} />
            </Routes>
        </Content>
    </Router>
    </div>
  );
}

export default App;
