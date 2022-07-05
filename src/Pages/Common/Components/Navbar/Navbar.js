import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { UserContext } from '../../../../Context APIs/UserContextAPI'

const Navbar = () => {

    const { user, setUser } = useContext(UserContext)
    let location = useLocation()
    let navigate = useNavigate()
    const [displayNav, setDisplayNav] = useState(false)
    const handleToggle = () => {
        setDisplayNav(!displayNav)
    }
    const handleLogout = async () => {
        try {
            setUser({
                isLoggedIn: false,
                user: {}
            })
            //redirect user to landing page 
            navigate('/')
            await fetch('https://natours-by-arpit.herokuapp.com/api/v1/users/logout', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        } catch {
            alert('Internal Server Error')
        }
    }

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
                        <li><Link className={`${location.pathname === '/tours' ? "active" : ""}`} to="/alltours">All Tours</Link></li>
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
                    {/* login, logout, account and signup buttons */}
                    {!user.isLoggedIn ?
                        <div className="auth">
                            <Link className={`nav-btn-login ${location.pathname === '/login' ? "active" : ""}`} to="/login">Log in</Link>
                            <Link className={`nav-btn-signup ${location.pathname === '/signup' ? "active" : ""}`} to="/signup">Sign Up</Link>
                        </div>
                        :
                        <div className="auth">
                            <Link className="nav-btn-logout" onClick={handleLogout} to="/">Log out</Link>
                            <Link className={`nav-btn-myaccount ${location.pathname === '/myaccount' ? "active" : ""}`} to="/myaccount">
                                <img className='nav-img' src={`/img/users/${user.user.photo}`} alt="" />
                                <span className='nav-username'>{user.user.name.split(' ')[0]}</span>
                            </Link>
                        </div>}
                </div>
            </nav>
            {/* B) Navbar for smaller screen sizes, toggled by the hamburger button */}
            <ul className='nav-menu-mobile' style={{ display: displayNav ? 'flex' : 'none' }}>
                <li><Link className={`${location.pathname === '/' ? "active" : ""}`} to="/">Home</Link></li>
                <li><Link className={`${location.pathname === '/tours' ? "active" : ""}`} to="/alltours">All Tours</Link></li>
                <li><Link className={`${location.pathname === '/about' ? "active" : ""}`} to="/about">About Us</Link></li>
                <li><Link className={`${location.pathname === '/contact' ? "active" : ""}`} to="/contact">Contact Us</Link></li>
                {!user.isLoggedIn ?
                    <>
                        <li><Link className={`${location.pathname === '/login' ? "active" : ""}`} to="/login">Login</Link></li>
                        <li><Link className={`${location.pathname === '/signup' ? "active" : ""}`} to="/signup">Sign up</Link></li>
                    </>
                    :
                    <>
                        <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                        <li><Link className={`${location.pathname === '/myaccount' ? "active" : ""}`} to="/myaccount">My Account</Link></li>
                    </>
                }
            </ul>
        </>
    )
}

export default Navbar