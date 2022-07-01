import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo"><Link to='/'><img src="/img/logo-green.png" width={150} height={30} alt="Natour logo" /></Link></div>
            <p className="footer__copyright">&copy; {new Date().getFullYear()} by Arpit Yadav</p>
        </footer>
    )
}

export default Footer