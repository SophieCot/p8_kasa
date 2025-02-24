import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Location from './pages/location/Location';
import Home from './pages/home/Home';
import About from './pages/about/About';
import ErrorPage from './pages/error-page/ErrorPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import "./app.scss";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/loc/:id" element={<Location />} />
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

