import React from 'react';

import Home from './pages';
import Reg from './pages/reg';
import Details from './pages/details';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';




function App() {
  return (

    <Router>
      
      <Routes>
        <Route path='/register' element={<Reg />} />
        <Route path='/' exact element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </Router>

  );
}

export default App;
