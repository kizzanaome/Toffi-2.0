import React from 'react';
import Sidebar from '../../shared/Sidebar'
import Navbar from '../../shared/Navbar';
import Tiles from './Tiles';
import Heading from './Heading';

const Dashboard = () => {

    return (
        <div class="container-scroller">
            <Navbar />
            <div class=" page-body-wrapper">
                <Sidebar />
                <div class="main-panel">
                    <div class="content-wrapper">
                        <Heading />
                        <Tiles />     
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Dashboard;
