import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import Navigation from "./components/navigation";
import Home from "./components/home";
import ManagePositions from './components/manage-positions';
import ManageTests from './components/manage-tests';
import Recruitments from './components/recruitments';
import Analytics from './components/analytics';
import Notifications from './components/notifications';
import Messages from './components/messages';
import Settings from './components/settings';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Navigation menuitems={[{number:0, index:0}, {number:1, index:1}, {number:3, index:3}]}/>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/manage-positions" component={ManagePositions}/>
                <Route path="/manage-tests" component={ManageTests}/>
                <Route path="/recruitments" component={Recruitments}/>
                <Route path="/analytics" component={Analytics}/>
                <Route path="/notifications" component={Notifications}/>
                <Route path="/messages" component={Messages}/>
                <Route path="/settings" component={Settings}/>
            </Switch>
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.row-fluid'));
