import React, { Component } from 'react';
import AddedPositions from './added-positions';

class ManagePositions extends Component {


    render() {

        return(
            <div className="container">
                <div className="col-sm-8">
                    <AddedPositions/>
                </div>
                <div className="col-sm-4">
                    <div className="col-sm-12 center-content">
                        <button className="btn btn-primary">Add Positions</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManagePositions;