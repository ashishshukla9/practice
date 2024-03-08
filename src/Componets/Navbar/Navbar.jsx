import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.svg'
import { IoMenu } from "react-icons/io5";
import './navbar.css'
import { Link } from 'react-scroll'
const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggelMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, [])
    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img className='logo' src={logo} alt="" />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to="hero" smooth={true} offset={-260} duration={500}>Home</Link></li>
                <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
                <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link to="contact" smooth={true} offset={-260} duration={500}><button className='btn'>Contact Us</button></Link></li>
            </ul>
            <IoMenu className='menu-icon' onClick={toggelMenu} />
        </nav>
    )
}

export default Navbar