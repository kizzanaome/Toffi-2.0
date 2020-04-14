import React from 'react';
import check from '../../assets/images/check.svg';
import question  from '../../assets/images/question.svg';
import flag from '../../assets/images/flag.svg';
import sun from '../../assets/images/sun.svg';

const Tiles = () => {

    return (
        <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="tab-content py-0 px-0">
                            <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                <div className="d-flex flex-wrap justify-content-xl-between">
                                    <div className="tab-card">
                                        <img src={check} alt="check" className="mr-3" />
                                        <div className="d-flex flex-column justify-content-around">
                                            <h1 className="mr-2 mb-1">1,021</h1>
                                            <small className="mb-1 text-colored">Answers</small>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-card-2">
                                        <img src={question} alt="check" className="mr-3" />
                                        <div className="d-flex flex-column justify-content-around">
                                            <h1 className="mr-2 mb-1">2,356</h1>
                                            <small className="mb-1 text-white">Questions</small>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-card">
                                        <img src={flag} alt="check" className="mr-3" />
                                        <div className="d-flex flex-column justify-content-around">
                                            <h1 className="mr-2 mb-1">49.6%</h1>
                                            <small className="mb-1 text-colored">Progress</small>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-card-3">
                                        <img src={sun} alt="check" className="mr-3" />
                                        <div className="d-flex flex-column justify-content-around">
                                            <h1 className="mr-2 mb-0">924</h1>
                                            <small className="mb-1 text-white">Surveys</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Tiles;
