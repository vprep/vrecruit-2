import React, {Component} from 'react';


export default class Header extends Component {

    render() {
        return (
                <header className="col-sm-12" style={{backgroundColor:'green'}}>
                    <div className="col-sm-10"><h1>Vprep</h1></div>
                    <div className="col-sm-2"><span className="pull-right">Swadhin</span></div>
                </header>
        );
    }
}