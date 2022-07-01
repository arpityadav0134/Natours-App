import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // An function that increment the previous state like here 
    // is better than directly setting `value + 1`
}

const Navbar = () => {
    let location = useLocation()

    const [displayNav, setDisplayNav] = useState(false)

    const handleToggle = () => {
        setDisplayNav(!displayNav)
    }

    const forceUpdate = useForceUpdate()


    return (
        <>
            {/* A) Navbar for larger screen sizes */}
            <nav className="navbar">
                {/* 1) left part of navbar with logo and navigation menu */}
                <div className="nav-left">
                    {/* Natours logo */}
                    <Link to="/"><img src='/img/logo-green-small.png' width={50} height={30} alt="" /> </Link>
                    {/* Navigation menu */}
                    <ul className='nav-menu'>
                        <li><Link className={`${location.pathname === '/' ? "active" : ""}`} to="/">Home</Link></li>
                        <li><Link className={`${location.pathname === '/tours' ? "active" : ""}`} to="/tours">Tours</Link></li>
                        <li><Link className={`${location.pathname === '/about' ? "active" : ""}`} to="/about">About Us</Link></li>
                        <li><Link className={`${location.pathname === '/contact' ? "active" : ""}`} to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                {/* 2) right part of navbar having buttons */}
                <div className="nav-right">
                    {/* hamburger font awesome icon */}
                    <div className="ham-btn">
                        <i className="fa-solid fa-bars" onClick={handleToggle} ></i>
                    </div>
                    {/* login and signup buttons */}
                    <div className="auth">
                        <Link className="nav-btn-login" onClick={forceUpdate} to="/login">Log in</Link>
                        <Link className="nav-btn-signup" to="/signup">Sign Up</Link>
                    </div>
                </div>
            </nav>
            {/* B) Navbar for smaller screen sizes, toggled by the hamburger button */}
            <ul className='nav-menu-mobile' style={{ display: displayNav ? 'flex' : 'none' }}>
                <li><Link className={`${location.pathname === '/' ? "active" : ""}`} to="/">Home</Link></li>
                <li><Link className={`${location.pathname === '/tours' ? "active" : ""}`} to="/tours">Tours</Link></li>
                <li><Link className={`${location.pathname === '/about' ? "active" : ""}`} to="/about">About Us</Link></li>
                <li><Link className={`${location.pathname === '/contact' ? "active" : ""}`} to="/contact">Contact Us</Link></li>
                <li><Link className={`${location.pathname === '/login' ? "active" : ""}`} to="/login">Login</Link></li>
                <li><Link className={`${location.pathname === '/signup' ? "active" : ""}`} to="/signup">Sign up</Link></li>
            </ul>
        </>
    )
}

export default Navbar