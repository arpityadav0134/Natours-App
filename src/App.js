// import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import './App.css';
import Home from './Pages/Home/Home.js';
import Footer from './Common/Components/Footer/Footer.js';
import Login from './Pages/Login/Login.js';
import Signup from './Pages/Signup/Signup.js';
import Navbar from './Common/Components/Navbar/Navbar.js';
// import Tour from './Pages/Tour/Tour.js';
import UpdatePassword from './Pages/UpdatePassword/UpdatePassword.js';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          {/* <Route exact path='/tour/:tourId' element={<Tour />} /> */}
          <Route exact path='/resetPassword/:passwordResetToken' element={<UpdatePassword />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
