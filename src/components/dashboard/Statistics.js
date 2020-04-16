import React from 'react';

import face1 from '../../assets/images/faces/face1.jpg'
import face2 from '../../assets/images/faces/face2.jpg'
import face3 from '../../assets/images/faces/face3.jpg'
import face4 from '../../assets/images/faces/face4.jpg'
import face5 from '../../assets/images/faces/face5.jpg'
import face6 from '../../assets/images/faces/face6.jpg'
import face7 from '../../assets/images/faces/face7.jpg'

const Statistics = () => {

    return (
        <div>
            <div className="row">
                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Hoverable Table</h4>
                            <p className="card-description">
                                Add class <code>.table-hover</code>
                            </p>
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>User</th>
                                            <th>Product</th>
                                            <th>Sale</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Photoshop</td>
                                            <td className="text-danger"> 28.76% <i className="mdi mdi-arrow-down"></i></td>
                                            <td><label className="badge badge-danger">Pending</label></td>
                                        </tr>
                                        <tr>
                                            <td>Messsy</td>
                                            <td>Flash</td>
                                            <td className="text-danger"> 21.06% <i className="mdi mdi-arrow-down"></i></td>
                                            <td><label className="badge badge-warning">In progress</label></td>
                                        </tr>
                                        <tr>
                                            <td>John</td>
                                            <td>Premier</td>
                                            <td className="text-danger"> 35.00% <i className="mdi mdi-arrow-down"></i></td>
                                            <td><label className="badge badge-info">Fixed</label></td>
                                        </tr>
                                        <tr>
                                            <td>Peter</td>
                                            <td>After effects</td>
                                            <td className="text-success"> 82.00% <i className="mdi mdi-arrow-up"></i></td>
                                            <td><label className="badge badge-success">Completed</label></td>
                                        </tr>
                                        <tr>
                                            <td>Dave</td>
                                            <td>53275535</td>
                                            <td className="text-success"> 98.05% <i className="mdi mdi-arrow-up"></i></td>
                                            <td><label className="badge badge-warning">In progress</label></td>
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
                            <p className="mb-7 card-description mb-7">This is the summed up number over the months of the responses acquired from all the surveys conveyed in the respective months. It shows how many responses were aquired in each month.</p>
                            <canvas id="barChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Total sales</h4>
                            <h1>$ 28835</h1>
                            <h4>Gross sales over the years</h4>
                            <p className="card-description">Today, many people rely on computers to do homework, work, and create or store
                    useful information. Therefore, it is important </p>
                            <div id="total-sales-chart-legend"></div>
                        </div>
                        <canvas id="total-sales-chart"></canvas>
                    </div>
                </div>
                <div className="col-md-7 grid-margin stretch-card">
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
                <div className="col-lg-12 stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">The Admin board</h4>
                            <p className="card-description">
                                The team behind our great questions for the surveys created each unique in its own way.
                  </p>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>
                                                Profile
                          </th>
                                            <th>
                                                Full Names
                          </th>
                                            <th>
                                                Progress
                          </th>
                                            <th>
                                                Surveys
                          </th>
                                            <th>
                                                Date Created
                          </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-1">
                                                <img src={face1} alt="face" />
                                            </td>
                                            <td>
                                                Herman Beck
                          </td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success herman" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>
                                                77
                          </td>
                                            <td>
                                                May 15, 2015
                          </td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">
                                                <img src={face2} alt="face" />
                                            </td>
                                            <td>
                                                Messsy Adam
                          </td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-danger adam" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>
                                                245
                          </td>
                                            <td>
                                                July 1, 2015
                          </td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">
                                                <img src={face3} alt="face" />
                                            </td>
                                            <td>
                                                John Richards
                          </td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-warning john" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>
                                                138
                          </td>
                                            <td>
                                                Apr 12, 2015
                          </td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">
                                                <img src={face4} alt="face" />
                                            </td>
                                            <td>
                                                Peter Meggik
                          </td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-primary peter" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>
                                                77
                          </td>
                                            <td>
                                                May 15, 2015
                          </td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">
                                                <img src={face5} alt="face" />
                                            </td>
                                            <td>
                                                Edward
                          </td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-danger edd" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>
                                                160
                          </td>
                                            <td>
                                                May 03, 2015
                          </td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">
                                                <img src={face6} alt="face" />
                                            </td>
                                            <td>
                                                John Doe
                          </td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-info doe" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>
                                                123
                          </td>
                                            <td>
                                                April 05, 2015
                          </td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">
                                                <img src={face7} alt="face" />
                                            </td>
                                            <td>
                                                Henry Tom
                          </td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-warning tom" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>
                                                150
                          </td>
                                            <td>
                                                June 16, 2015
                          </td>
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