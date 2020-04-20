import React from 'react';
import './dashboard.css';

import Sidebar from '../../shared/Sidebar'
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Tiles from './Tiles';
import Heading from './Heading';
import Statistics from './Statistics';


const Dashboard = () => {

    return (
        <div className="container-scroller">
            <Navbar />
            <div className=" page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <Heading />
                        <Tiles />
                        <Statistics />  
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );

}

export default Dashboard;
