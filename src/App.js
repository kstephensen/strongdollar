import './App.css';
import Navbar from "./components/Navbar";
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/services' component={Services}/>
        <Route path='/products' component={Products}/>
        <Route path='/signup' component={SignUp}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
