import React, { Component } from 'react';


class Home extends Component {

    render() {

        return (
            <div className="container">
                    <div className="container col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">Past Recruitments</div>
                            <div className="panel-body">
                                <div className="row" style={{padding:'10px'}}>
                                    <div className="col-sm-10 round-div">
                                        <div className="row">
                               <span className="col-sm-1 circle-span">
                                   1
                               </span><span className="col-sm-11"> G L Bajaj Institute of Technology</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <button className="col-sm-12 round-button height-home">8</button>
                                    </div>
                                </div>
                                <div className="row" style={{padding:'10px'}}>
                                    <div className="col-sm-10 round-div">
                                        <div className="row">
                               <span className="col-sm-1 circle-span">
                                   2
                               </span><span className="col-sm-11"> Moti Lal Nehru Institute of Technology</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <button className="col-sm-12 round-button height-home">9</button>
                                    </div>
                                </div>
                                <div className="row" style={{padding:'10px'}}>
                                    <div className="col-sm-10 round-div">
                                        <div className="row">
                               <span className="col-sm-1 circle-span">
                                   3
                               </span><span className="col-sm-11"> M. S. Ramaiah Institute of Technology</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <button className="col-sm-12 round-button height-home">4</button>
                                    </div>
                                </div>
                                <div className="row" style={{padding:'10px'}}>
                                    <div className="col-sm-10 round-div">
                                        <div className="row">
                               <span className="col-sm-1 circle-span">
                                   4
                               </span><span className="col-sm-11"> JSS Institute of Technology</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <button className="col-sm-12 round-button height-home">5</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="container col-sm-6">
                    <h2>Upcoming Recruitments</h2>
                    <div className="panel panel-default">
                        <div className="panel-body">Panel Content</div>
                    </div>
                </div>


            </div>


        );
    }

}

export default Home;