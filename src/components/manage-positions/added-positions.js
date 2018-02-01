import React, {Component} from 'react';


class AddedPositions extends Component {

    render(){

        return(
            <div className="panel panel-default">
                <div className="panel-heading">Added Positions</div>
                <div className="panel-body">
                    <div className="row" style={{padding:'10px'}}>
                        <div className="col-sm-10 round-div">
                            <div className="row">
                               <span className="col-sm-1 circle-span">
                                   1
                               </span><span className="col-sm-11"> Software Engineer / Senior Software Engineer - Skype</span>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <button className="col-sm-12 round-button">Edit</button>
                            <button className="col-sm-12 round-button">Delete</button>
                        </div>
                    </div>
                    <div className="row" style={{padding:'10px'}}>
                        <div className="col-sm-10 round-div">
                            <div className="row">
                               <span className="col-sm-1 circle-span">
                                   2
                               </span><span className="col-sm-11"> Software Engineer / Senior Software Engineer - Skype</span>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <button className="col-sm-12 round-button">Edit</button>
                            <button className="col-sm-12 round-button">Delete</button>
                        </div>
                    </div>
                    <div className="row" style={{padding:'10px'}}>
                        <div className="col-sm-10 round-div">
                            <div className="row">
                               <span className="col-sm-1 circle-span">
                                   3
                               </span><span className="col-sm-11"> Software Engineer / Senior Software Engineer - Skype</span>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <button className="col-sm-12 round-button">Edit</button>
                            <button className="col-sm-12 round-button">Delete</button>
                        </div>
                    </div>
                    <div className="row" style={{padding:'10px'}}>
                        <div className="col-sm-10 round-div">
                            <div className="row">
                               <span className="col-sm-1 circle-span">
                                   4
                               </span><span className="col-sm-11"> Software Engineer / Senior Software Engineer - Skype</span>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <button className="col-sm-12 round-button">Edit</button>
                            <button className="col-sm-12 round-button">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default AddedPositions;