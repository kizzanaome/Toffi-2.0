import React from 'react';
// import '../assets/css/argon.css';
// import profile from '../assets/images/team.jpg';
import logo from '../assets/images/logotoffi.png';

const Navbar = () => {

    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="navbar-brand-wrapper d-flex justify-content-center">
                <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                    <a className="navbar-brand brand-logo" href="index.html"><img src={logo} alt="logo" /></a>
                    <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images/logotoffi.png" alt="logo" /></a>
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                        <span className="mdi mdi-sort-variant"></span>
                    </button>
                </div>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item nav-profile dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                            <img src="images/faces/face5.jpg" alt="profile" />
                            <span className="nav-profile-name">Louis Barnett</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                            <a className="dropdown-item">
                                <i className="mdi mdi-settings text-primary"></i>
                                Settings
                            </a>
                            <a className="dropdown-item">
                                <i className="mdi mdi-logout text-primary"></i>
                                Logout
                            </a>
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
