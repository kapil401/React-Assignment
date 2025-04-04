import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import OurServices from './component/OurServices';
import Feature from './component/Feature';
import Specialists from './component/About';
import Home from './component/Home';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
        <Route path="/OurServices" element={<OurServices />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
