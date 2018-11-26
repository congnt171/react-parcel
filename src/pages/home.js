import React, { Component } from 'react';

var isMount = false
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    componentDidMount() {
        isMount = true;
    }
    componentWillUnmount() {
        isMount = false;
    }
    render() {
        return (
            <div></div>
        );
    }
}

export default Home;
