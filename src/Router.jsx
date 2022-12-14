import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbarss from './components/Navbarss';
import Home from './components/Home';
import Individual from "./components/Individual";
import Teams from "./components/Teams";
import Enterprise from "./components/Enterprise";
import ErrorPage from './components/ErrorPage';





function Router() {
  return (
    <BrowserRouter>
    <Navbarss/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/individual" element={<Individual/>}/>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/enterprise" element={<Enterprise/>}/>
        <Route path="*" element={<ErrorPage/>} />
        
    </Routes>
    </BrowserRouter>
  )
}

export default Router;