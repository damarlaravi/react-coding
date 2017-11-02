import React, {Component} from 'react';
import LayoutComponent from './layout';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProfileData} from '../actions/index';

class App extends Component {
    constructor(props){
        super(props);
        this.props.getProfileData();
    }
    render() {
        return (
            <LayoutComponent />
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({getProfileData}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);