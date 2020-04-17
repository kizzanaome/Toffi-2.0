import React from 'react';
import Navbar from '../../shared/Navbar';
import Sidebar from '../../shared/Sidebar';
import Heading from '../dashboard/Heading';
import Tiles from '../dashboard/Tiles';
import Footer from '../../shared/Footer';
import './nosurveys.css';


const NoSurvey = () => {

    return (
        <div className="container-scroller">
            <Navbar />
            <div className=" page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <Heading />
                        <Tiles />
                        <div>
                            <div className="headings">
                                <ul>
                                    <li>STATUS</li>
                                    <li>TITLE</li>
                                    <li>CREATED</li>
                                    <li>RESPONSES</li>
                                </ul>
                            </div>
                            <div className="stuff">
                                <div className="inside">
                                    <h1>Oops</h1>
                                    <h4>You haven’t created any surveys yet</h4>
                                    <a href="#">
                                        Click the button below to add a Survey
                                    </a><br />
                                    <button className="btn btn-primary mt-4">
                                        Create Survey
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );

}

export default NoSurvey;
