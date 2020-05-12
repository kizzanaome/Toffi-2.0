import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                {/* <Link className="nav-item" to="/"> */}
                <li className="nav-item">
                    <a className="nav-link" href="index.html" >
                        <i className="mdi mdi-view-dashboard menu-icon"></i>
                        <span className="menu-title">Dashboard</span>
                    </a>
                </li>
                {/* </Link> */}
                {/* <Link className="nav-item" to="/nosurvey"> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/nosurvey">
                        <i className="mdi mdi-eye menu-icon"></i>
                        <span className="menu-title">View Surveys</span>
                    </Link>
                </li>
                {/* </Link> */}
                <Link className="nav-item" to="/notfound">
                {/* <li className="nav-item"> */}
                    <a className="nav-link" href="pages/forms/basic_elements.html">
                        <i className="mdi mdi-comment menu-icon"></i>
                        <span className="menu-title">Create Questions</span>
                    </a>
                {/* </li> */}
                </Link>
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
                    <a className="nav-link" href="pages/icons/mdi.html">
                        <i className="mdi mdi-emoticon menu-icon"></i>
                        <span className="menu-title">Icons</span>
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
