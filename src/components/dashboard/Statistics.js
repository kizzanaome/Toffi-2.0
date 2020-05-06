import React from 'react';

import face1 from '../../assets/images/faces/face1.jpg'
import face2 from '../../assets/images/faces/face2.jpg'
import face3 from '../../assets/images/faces/face3.jpg'
import face4 from '../../assets/images/faces/face4.jpg'

const Statistics = () => {

    return (
        <div className="stats">
            <div className="row">
                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Reports</h4>
                            <p className="card-description">
                                A tabular representation of the data collected overtime of the users showing their status and stature in the company
                            </p>
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>User</th>
                                            <th></th>
                                            <th>Status</th>
                                            <th>Created</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-1">
                                                <img src={face1} alt="face" />
                                            </td>
                                            <td>Jacob</td>
                                            <td><label className="badge badge-danger">Pending</label></td>
                                            <td>12 Aug 2017</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">
                                                <img src={face2} alt="face" />
                                            </td>
                                            <td>Mercy</td>
                                            <td><label className="badge badge-warning">In progress</label></td>
                                            <td>15 May 2017</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">
                                                <img src={face3} alt="face" />
                                            </td>
                                            <td>John</td>
                                            <td><label className="badge badge-info">Fixed</label></td>
                                            <td>9 Sept 2017</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">
                                                <img src={face4} alt="face" />
                                            </td>
                                            <td>Peter</td>
                                            <td><label className="badge badge-success">Completed</label></td>
                                            <td>7 Jul 2017</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title resp">Total Number of Responses</h4>
                            <p className="mb-7 card-description mb-7">Data of all the summed up number of responses over the months acquired from all the surveys conveyed in the respective months.
                            <br />
                                <br />
                                <br />
                            </p>
                            <canvas id="barChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Total Surveys Conveyed</h4>
                            <h1>1,835</h1>
                            <p className="card-description">Number of surveys that Toffi has sent to the people and has also created for other companies.</p>
                            <div id="total-sales-chart-legend"></div>
                        </div>
                        <canvas id="total-sales-chart"></canvas>
                    </div>
                </div>
                <div className="col-md-8 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Reports</h5>
                            <p className="card-description">To start a blog, think of a topic about and first brainstorm party is ways to write
                    details</p>
                            <div id="cash-deposits-chart-legend" className="d-flex justify-content-center pt-3"></div>
                            <canvas id="cash-deposits-chart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div class="col-lg-8 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 className="card-title resp">Level of feedback</h4>
                            <p className="mb-7 card-description mb-7">Summed up number of responses over the months acquired from all the surveys conveyed in the respective months.
                            </p>
                            <canvas id="areaChart"></canvas>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 grid-margin stretch-card">
                    <div className="card add-bg">
                        <div className="card-body">
                            <h4 className="card-title">The Surveys</h4>
                            <p className="card-description">
                                The surveys that have been created and tested in the public for user feedback and their progress.</p>
                            <div className="table-responsive">
                                <table className="table table-hovered hr-table">
                                    <thead>
                                        <tr>
                                            <th>Surveys</th>
                                            <th>Progress</th>
                                            <th>Created</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tax Survey</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success herman" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>May 15</td>
                                        </tr>
                                        <tr>
                                            <td>Master Survey</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-danger adam" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>Jul 1</td>
                                        </tr>
                                        <tr>
                                            <td>Gov't Survey</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-warning john" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>Apr 12</td>
                                        </tr>
                                        <tr>
                                            <td>PAYE Survey</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-primary peter" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>May 15</td>
                                        </tr>
                                        <tr>
                                            <td>Job Survey</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-danger edd" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>May 03</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Statistics;
