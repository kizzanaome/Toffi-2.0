import React from 'react';
import '../assets/css/argon.css';

const Sidebar = () => {

    return (
        <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <div className="scrollbar-inner">
                {/* <!-- Brand --> */}
                <div className="sidenav-header  align-items-center">
                    <a className="navbar-brand" href="javascript:void(0)">
                        <img src="../assets/img/brand/blue.png" className="navbar-brand-img" alt="..." />
                    </a>
                </div>
                <div className="navbar-inner">
                    {/* <!-- Collapse --> */}
                    <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                        {/* <!-- Nav items --> */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="dashboard.html">
                                    <i className="ni ni-tv-2 text-primary"></i>
                                    <span className="nav-link-text">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="icons.html">
                                    <i className="ni ni-planet text-orange"></i>
                                    <span className="nav-link-text">View Surveys</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="map.html">
                                    <i className="ni ni-pin-3 text-primary"></i>
                                    <span className="nav-link-text">Create Questions</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="profile.html">
                                    <i className="ni ni-single-02 text-yellow"></i>
                                    <span className="nav-link-text">Statistics</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="tables.html">
                                    <i className="ni ni-bullet-list-67 text-default"></i>
                                    <span className="nav-link-text">View Tables</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="login.html">
                                    <i className="ni ni-key-25 text-info"></i>
                                    <span className="nav-link-text">Users</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="register.html">
                                    <i className="ni ni-circle-08 text-pink"></i>
                                    <span className="nav-link-text">About</span>
                                </a>
                            </li>
                        </ul>
                        {/* <!-- Divider --> */}
                        <hr className="my-3" />
                        {/* <!-- Heading --> */}
                        <h6 className="navbar-heading p-0 text-muted">
                            <span className="docs-normal">Documentation</span>
                        </h6>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
