import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { upcomingRecruitments } from "../../actions/index";
import PastRecruitments from './past-recruitments';
import UpcomingRecruitments from './upcoming-recruitments';


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
                    <PastRecruitments/>
                </div>
                <div className="container col-sm-6">
                    <UpcomingRecruitments/>
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