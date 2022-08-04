import React from 'react';

import Home from './pages';
import Reg from './pages/reg';
import Details from './pages/details';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import VerificationScreen from './pages/verification_screen';



function App() {
  return (

    <Router>
      
      <Routes>
        <Route path='/register' element={<Reg />} />
        
        <Route path='/' exact element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/verification' exact element={<VerificationScreen />} />
      </Routes>
    </Router>

  );
}

export default App;
