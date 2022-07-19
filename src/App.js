import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home.js';
import Contact from './Pages/Contact/Contact.js';
import Login from './Pages/Login/Login.js';
import Signup from './Pages/Signup/Signup.js';
import UpdatePassword from './Pages/UpdatePassword/UpdatePassword.js';
import Footer from './Pages/Common/Components/Footer/Footer.js';
import Navbar from './Pages/Common/Components/Navbar/Navbar.js';

import { UserContextProvider } from './Context APIs/UserContextAPI'
import UserAccount from './Pages/UserAccount/UserAccount';
import AllTours from './Pages/AllTours/AllTours';
import TopTours from './Pages/TopTours/TopTours'
import TourDetails from './Pages/TourDetails/TourDetails';
import SearchTours from './Pages/SearchTours/SearchTours';

function App() {

  return (
    <div>
      <Router>
        <UserContextProvider>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/myaccount' element={<UserAccount />} />
            <Route exact path='/top-tours' element={<TopTours />} />
            <Route exact path='/alltours' element={<AllTours />} />
            <Route exact path='/searchtours' element={<SearchTours />} />
            <Route exact path='/tour/:tourName' element={<TourDetails />} />
            <Route exact path='/resetPassword/:passwordResetToken' element={<UpdatePassword />} />
          </Routes>
          <Footer />
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
