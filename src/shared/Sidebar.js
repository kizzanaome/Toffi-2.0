import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <i className="mdi mdi-view-dashboard menu-icon"></i>
                        <span className="menu-title">Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/nosurvey" aria-expanded="false" aria-controls="ui-basic">
                        <i className="mdi mdi-eye menu-icon"></i>
                        <span  className="menu-title">View Surveys</span>
                        <i className="menu-arrow"></i>
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/forms/basic_elements.html">
                        <i className="mdi mdi-comment menu-icon"></i>
                        <span className="menu-title">Create Questions</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/charts/chartjs.html">
                        <i className="mdi mdi-chart-bar menu-icon"></i>
                        <span className="menu-title">Statistics</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/tables/basic-table.html">
                        <i className="mdi mdi-table-large menu-icon"></i>
                        <span className="menu-title"> View Tables</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="pages/samples/login.html" aria-expanded="false" aria-controls="auth">
                        <i className="mdi mdi-account menu-icon"></i>
                        <span className="menu-title">Users</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="documentation/documentation.html">
                        <i className="mdi mdi-file-document-box-outline menu-icon"></i>
                        <span className="menu-title">Documentation</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;
