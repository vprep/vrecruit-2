import React, { Component } from 'react';
import Header from "./header";

import { Link } from 'react-router-dom';


class Navigation extends Component {

    componentDidMount(){

    }

    constructor(props){
        super(props);
        this.state = {
            selectedTabId: 'home'
        };
    }

    isActive(id){
        return this.state.selectedTabId === id;
    }

    setActiveTab(selectedTabId){
        this.setState({selectedTabId});
    }

    render(){

        return (
            <nav className="navbar navbar-default">
                <Header/>
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li key='home'
                            onClick={ this.setActiveTab.bind(this, 'home')}
                        className={this.isActive('home')?'active':''}><Link to="/home">Home</Link></li>
                        <li key='manage-positions'
                            onClick={this.setActiveTab.bind(this,'manage-positions')}
                            className={this.isActive('manage-positions')?'active':''}
                        ><Link to="/manage-positions">Manage Positions</Link></li>
                        <li key='manage-tests'
                        onClick={this.setActiveTab.bind(this,'manage-tests')}
                        className={this.isActive('manage-tests')?'active':''}><Link to="/manage-tests">Manage Tests</Link></li>
                        <li key='recruitments'
                        onClick={this.setActiveTab.bind(this,'recruitments')}
                        className={this.isActive('recruitments')?'active':''}><Link to="/recruitments">Recruitments</Link></li>
                        <li key='analytics'
                        onClick={this.setActiveTab.bind(this,'analytics')}
                        className={this.isActive('analytics')?'active':''}><Link to="/analytics">Analytics</Link></li>
                        <li key='notifications'
                        onClick={this.setActiveTab.bind(this,'notifications')}
                        className={this.isActive('notifications')?'active':''}><Link to="/notifications">Notifications</Link></li>
                        <li key='messages'
                        onClick={this.setActiveTab.bind(this,'messages')}
                        className={this.isActive('messages')?'active':''}><Link to="/messages">Messages</Link></li>
                        <li key='settings'
                        onClick={this.setActiveTab.bind(this,'settings')}
                        className={this.isActive('settings')?'active':''}><Link to="/settings">Settings</Link></li>

                    </ul>
                </div>
            </nav>
        );
    }
}



export default Navigation;