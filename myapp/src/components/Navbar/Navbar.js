import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { signout, isAuthenticated } from './../../auth/index'
import { useNavigate  } from 'react-router-dom';


const Navbar = () => {

    const navigate = useNavigate ();

    const navSlide = () => {
        // const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]

        navbarLinks.classList.toggle('active')
    } 

    return (
        <nav className="navbar">
            <NavLink to="/" style={{textDecoration: 'none'}} className="custom-card">
                <div className="brand-title" data-aos="fade-right" data-aos-duration="1200">QFC</div>
            </NavLink>
            <NavLink to="/#" className="toggle-button" onClick={navSlide}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </NavLink>
            <div className="navbar-links">
                <ul>
                    <li>
                        <NavLink style={{borderBottomColor: 'red'}} to="/menu/all"><i className="fas fa-search"></i>Menu</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/admin/dashboard"><i className="fas fa-sign-out-alt"></i>A.Dashboard</NavLink>
                    </li>

                    { isAuthenticated() && (
                        <React.Fragment>
                            <li>
                                <NavLink to="/mycart"><i className="fas fa-user"></i>My Cart</NavLink>
                            </li>
                            <li>
                                <NavLink to="/user/dashboard"><i className="fas fa-user"></i>Dashboard</NavLink>
                            </li>
                        </React.Fragment>
                    )}

                    { !isAuthenticated() && (
                        <React.Fragment>
                            <li>
                                <NavLink to="/signup"><i className="fas fa-sign-out-alt"></i>Signup</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signin"><i className="fas fa-sign-out-alt"></i>Signin</NavLink>
                            </li>
                        </React.Fragment>
                    )}
                    
                    { isAuthenticated() && (
                        <li>
                            <span   to="/signout"
                                    onClick={() => {
                                        signout(() => {
                                            navigate("/");
                                        })
                                    }}
                            ><i className="fas fa-sign-out-alt"></i>Signout</span>
                        </li>
                    )}
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
