import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Home from './pages/home';
import { web3 } from './web3/public';

class PublicRouter extends Component {
    componentDidMount() {
        if(web3.utils.isAddress(this.props.history.location.search.split('=')[1])){
            localStorage.setItem('ref', this.props.history.location.search.split('=')[1])
        }
    }
    render() {
        return (
            <Router history={this.props.history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default PublicRouter;