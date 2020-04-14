import React from 'react';

const Heading = () => {

    return (
        <div className="row">
            <div className="col-md-12 grid-margin">
                <div className="d-flex justify-content-between flex-wrap">
                    <div className="d-flex align-items-end flex-wrap">
                        <h4>Overview of analysis</h4>
                    </div>
                    <div className="d-flex justify-content-between align-items-end flex-wrap">
                        <button className="btn btn-outline-primary mt-2 mt-xl-0">Create Survey</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Heading;
