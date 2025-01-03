import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Loc from './components/Loc';
import Footer from './components/Footer';
import ErrorPage from './components/pages/ErrorPage';
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/loc/:id" element={<Loc />} />
          <Route path="*" element = {<ErrorPage/>} /> 
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  
  );
};

export default App;

