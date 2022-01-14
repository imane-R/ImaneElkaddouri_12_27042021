import './App.css';
import React from 'react';
import Header from './components/commons/Header/Header';
import SideBar from './components/commons/SideBar/SideBar';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/notfound/NotFound.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header/>
        <Routes>
            <Route path='/user/:id' element={<Dashboard/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
        <SideBar/>
      </div>
    </BrowserRouter>
  );
}

export default App;
