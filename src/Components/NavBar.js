import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './NavBar.css'

// const p = ""

// A:\Program Code VSC\ReactJs\pixel_perfecr_project\public\logo192.png
const NavBar = () => {
    return (
        <nav className='nav'>
            <div className="logo">
                <img src="./logo.svg" alt="Logo" />
                <span className="site-name">Pixel Site</span>
            </div>
            <ul className='nav-tabs'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/speaker">Speaker</CustomLink>
                <CustomLink to="/committee">Committee</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>
        </nav>
    );
};

export default NavBar;


function CustomLink({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
