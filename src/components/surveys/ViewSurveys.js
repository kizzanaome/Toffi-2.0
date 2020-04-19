import React from 'react';
import Navbar from '../../shared/Navbar';
import Sidebar from '../../shared/Sidebar';
import Heading from '../dashboard/Heading';
import Tiles from '../dashboard/Tiles';
import Footer from '../../shared/Footer';
import './viewsurveys.css';


const ViewSurveys = () => {

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
                            <div className="available-surveys">
                                <table>
                                <tr>
                                    <th>SurveyTitle</th>
                                    <th>Questions</th>
                                    <th>Responses</th>
                                    <th>Status</th>
                                </tr>
                                
                                <tr className="survey1" >
                                    <td>Tax Survey</td>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>inactive</td>
                                </tr>
                            
                                <tr className="survey2">
                                    <td>Tax Survey</td>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>inactive</td>
                                </tr>
                                <tr className="survey1" >
                                    <td>Tax Survey</td>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>inactive</td>
                                </tr>
                                <tr className="survey2">
                                    <td>Tax Survey</td>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>inactive</td>
                                </tr>
                                <tr className="survey1" >
                                    <td>Tax Survey</td>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>inactive</td>
                                </tr>
                                <tr className="survey2">
                                    <td>Tax Survey</td>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>inactive</td>
                                </tr>
                            
                            </table>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
        </div>
    );

}

export default ViewSurveys;
