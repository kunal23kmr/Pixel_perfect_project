import React from 'react';
// import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="bright">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* navbar  */}
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src='./logo.svg' alt="LOGO" /> <span className='logo-txt'>Pixel Site</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default NavBar;



// import React from 'react';
// import { Link, useMatch, useResolvedPath } from 'react-router-dom';
// import './NavBar.css'
// // import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

// // const p = ""

// // A:\Program Code VSC\ReactJs\pixel_perfecr_project\public\logo192.png
// const NavBar = () => {
//     return (
//         <nav className='nav'>
//             <div className="logo">
//                 <img src="./logo.svg" alt="Logo" />
//                 <span className="site-name">Pixel Site</span>
//             </div>
//             <ul className='nav-tabs'>
//                 <CustomLink to="/">Home</CustomLink>
//                 <CustomLink to="/speaker">Speaker</CustomLink>
//                 <CustomLink to="/committee">Committee</CustomLink>
//                 <CustomLink to="/contact">Contact</CustomLink>
//             </ul>
//         </nav>
//     );
// };

// export default NavBar;


// function CustomLink({ to, children, ...props }) {
//     const resolvePath = useResolvedPath(to)
//     const isActive = useMatch({ path: resolvePath.pathname, end: true })

//     return (
//         <li className={isActive ? "active" : ""}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </li>
//     )
// }
