import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LayoutComponent from './layout';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProfileData} from '../actions/index';
import reactDragula from 'react-dragula';
class App extends Component {
    constructor(props){
        super(props);
        this.props.getProfileData();
    }
    render() {
        return (
            <div className="drop-main">
                <LayoutComponent />
                <div className="drop-area"> Sample </div>
            </div>
        );
    }

    componentDidMount() {
        let container = ReactDOM.findDOMNode(this);
        reactDragula([container]);
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({getProfileData}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);