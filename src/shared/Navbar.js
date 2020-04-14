import React from 'react';
import { Link } from 'react-router-dom';

// import '../assets/css/argon.css';
import profile from '../assets/images/team.jpg';
import logo from '../assets/images/logotoffi.png';

const Navbar = () => {

    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="navbar-brand-wrapper d-flex justify-content-center">
                <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                    <Link to="/" className="navbar-brand brand-logo"><img src={logo} alt="logo" /></Link>
                    <Link to="/" className="navbar-brand brand-logo-mini"><img src="images/logotoffi.png" alt="logo" /></Link>
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                        <span className="mdi mdi-sort-variant"></span>
                    </button>
                </div>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item nav-profile dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" data-toggle="dropdown" id="profileDropdown">
                            <img src={profile} alt="profile" />
                            <span className="nav-profile-name">Louis Barnett</span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                            <Link to="/" className="dropdown-item">
                                <i className="mdi mdi-settings text-primary"></i>
                                Settings
                            </Link>
                            <Link to="/" className="dropdown-item">
                                <i className="mdi mdi-logout text-primary"></i>
                                Logout
                            </Link>
                        </div>
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                    data-toggle="offcanvas">
                    <span className="mdi mdi-menu"></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
