import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home.js';
import Login from './Pages/Login/Login.js';
import Signup from './Pages/Signup/Signup.js';
import UpdatePassword from './Pages/UpdatePassword/UpdatePassword.js';
// import Tour from './Pages/Tour/Tour.js';
import Footer from './Pages/Common/Components/Footer/Footer.js';
import Navbar from './Pages/Common/Components/Navbar/Navbar.js';

import { UserContext } from './Context APIs/UserContextAPI'

function App() {

  const { user, setUser } = useContext(UserContext)

  useEffect(() => {

    const verifyJwt = async () => {
      const res = await fetch("https://natours-by-arpit.herokuapp.com/api/v1/users/me", {
        method: 'GET',
        credentials: 'include'
      })

      const resJson = await res.json()
      if (resJson.status === "success") {
        setUser({ isLoggedIn: true, user: resJson.data.data })
      }
      else {
        setUser({ isLoggedIn: false })
      }
      console.log(user);
    }

    verifyJwt()

    //eslint-disable-next-line
  }, [])


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
