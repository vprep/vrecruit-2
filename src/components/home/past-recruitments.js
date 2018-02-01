import React, {Component} from 'react';

class PastRecruitments extends Component {


    render() {
        return(
            <div className="panel panel-default">
                <div className="panel-heading">Past Recruitments</div>
                <div className="panel-body panel-scroll">
                    <div className="row" style={{padding: '10px'}}>
                        <div className="col-sm-10 round-div">
                            <div className="row">
                                <span className="col-sm-1 circle-span">1</span>
                                <div className="col-sm-10">
                                    <span className="col-sm-12">G L Bajaj Institute of Technology</span>
                                    <span className="col-sm-12">Greater Noida</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <button className="col-sm-12 round-button height-home">8</button>
                        </div>
                    </div>
                    <div className="row" style={{padding: '10px'}}>
                        <div className="col-sm-10 round-div">
                            <div className="row">
                               <span className="col-sm-1 circle-span">
                                   2
                               </span>
                                <div className="col-sm-10">
                                    <span className="col-sm-12">Moti Lal Nehru Institute of Technology</span>
                                    <span className="col-sm-12">Allahabad</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <button className="col-sm-12 round-button height-home">9</button>
                        </div>
                    </div>
                    <div className="row" style={{padding: '10px'}}>
                        <div className="col-sm-10 round-div">
                            <div className="row">
                               <span className="col-sm-1 circle-span">
                                   3
                               </span>
                                <div className="col-sm-10">
                                    <span className="col-sm-12">M. S. Ramaiah Institute of Technology</span>
                                    <span className="col-sm-12">Bangalore</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <button className="col-sm-12 round-button height-home">4</button>
                        </div>
                    </div>
                    <div className="row" style={{padding: '10px'}}>
                        <div className="col-sm-10 round-div">
                            <div className="row">
                               <span className="col-sm-1 circle-span">
                                   4
                               </span>
                                <div className="col-sm-10">
                                    <span className="col-sm-12">JSS Institute of Technology</span>
                                    <span className="col-sm-12">Bangalore</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <button className="col-sm-12 round-button height-home">10</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PastRecruitments;