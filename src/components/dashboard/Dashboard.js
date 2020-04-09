import React from 'react';
import Sidebar from '../../shared/Sidebar'
import Navbar from '../../shared/Navbar';

const Dashboard = () => {

    return (
        <div>
            <Sidebar />
            <div class="main-content" id="panel">
                <Navbar />
            </div>
        </div>
    );

}

export default Dashboard;
