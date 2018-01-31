import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { upcomingRecruitments } from "../actions/index";


class Home extends Component {

    componentDidMount(){
        this.props.upcomingRecruitments();
    }

    renderRecruitments() {
        return _.map(this.props.recruitments, recruitment =>  {
            return (
                <div className="row" style={{padding: '10px'}}>
                    <div className="col-sm-10 round-div">
                        <div className="row">
                            <span className="col-sm-1 circle-span">{recruitment.id}</span>
                            <div className="col-sm-10">
                                <span className="col-sm-12">{recruitment.college_name}</span>
                                <span className="col-sm-12">{recruitment.city}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <button className="col-sm-12 round-button height-home">{recruitment.student_placed_count}</button>
                    </div>
                </div>
            );
        })
    }

    render() {

        return (
            <div className="container">
                <div className="container col-sm-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">Past Recruitments</div>
                        <div className="panel-body panel-scroll">
                            {this.renderRecruitments()}
                        </div>
                    </div>
                </div>
                <div className="container col-sm-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">Upcoming Recruitments</div>
                        <div className="panel-body panel-scroll">
                            <div className="row" style={{padding: '10px'}}>
                                <div className="col-sm-9 round-div">
                                    <div className="row">
                                        <span className="col-sm-1 circle-span">1</span>
                                        <div className="col-sm-9">
                                            <span className="col-sm-12">G L Bajaj Institute of Technology</span>
                                            <span className="col-sm-12">Greater Noida</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <button className="col-sm-12 round-button height-home">25/Jan/18</button>
                                </div>
                            </div>
                            <div className="row" style={{padding: '10px'}}>
                                <div className="col-sm-9 round-div">
                                    <div className="row">
                                        <span className="col-sm-1 circle-span">2</span>
                                        <div className="col-sm-9">
                                            <span className="col-sm-12">Hindustan Institute of Technology</span>
                                            <span className="col-sm-12">Agra</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <button className="col-sm-12 round-button height-home">28/Jan/18</button>
                                </div>
                            </div>
                            <div className="row" style={{padding: '10px'}}>
                                <div className="col-sm-9 round-div">
                                    <div className="row">
                                        <span className="col-sm-1 circle-span">3</span>
                                        <div className="col-sm-9">
                                            <span className="col-sm-12">BITS</span>
                                            <span className="col-sm-12">Pilani</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <button className="col-sm-12 round-button height-home">18/Feb/18</button>
                                </div>
                            </div>
                            <div className="row" style={{padding: '10px'}}>
                                <div className="col-sm-9 round-div">
                                    <div className="row">
                                        <span className="col-sm-1 circle-span">4</span>
                                        <div className="col-sm-9">
                                            <span className="col-sm-12">Delhi College of Engineering</span>
                                            <span className="col-sm-12">Delhi</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <button className="col-sm-12 round-button height-home">19/Feb/18</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        );
    }

}

function mapStateToProps(state) {
    console.log(state.recruitments);
    return {recruitments: state.recruitments}

}

export default connect(mapStateToProps,{upcomingRecruitments})(Home);