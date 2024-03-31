import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Navbar from './Components/Navvbar/Navbar';
import './App.css';
import Product from './Components/ProductWork/Product';
import MiscellaneousWork from './Components/MiscellaneousWork/MiscellaneousWork';
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
              <Route path="/productWork" element={<Product />} />
              <Route path="/miscellaneousWork" element={<MiscellaneousWork />} />
            </Routes>
        </Content>
    </Router>
    </div>
  );
}

export default App;
