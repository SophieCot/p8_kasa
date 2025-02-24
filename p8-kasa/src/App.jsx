import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/loc/:id" element={<Loc />} />
          <Route path="/error-404" element={<ErrorPage/>} />
          <Route path="*" element = {<Navigate replace to="/error-404"/>} /> 
        </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  
  );
};

export default App;

