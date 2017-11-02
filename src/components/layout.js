import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditableLabel from './editable-lable';
import {bindActionCreators} from 'redux';
import {onSave} from '../actions/index';

class LayoutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {profileInfo: {}};

        this.state.profile = this.props.profileData[0];
        this.handleChange = this.handleChange.bind(this);
        this.onTextUpdate = this.onTextUpdate.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({selectedValue: e.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        if(this.state.selectedValue)
            this.state.profileInfo.selectedValue = this.state.selectedValue;
        this.props.onSave(this.state.profileInfo);
    }

    selectionDataItem(item) {
        return <option key={item}>{item}</option>;
    }

    onTextUpdate(val) {
        this.state.profileInfo.name = val;
    }

    render() {
        return (
            <div className="col-lg-6">
                <div className="panel panel-default">
                    <div className="panel-heading"><h4>User Profile</h4></div>
                    <div className="panel-body">
                        <div className="box box-info">
                            <div className="box-body">
                                <div className="col-sm-6">
                                    <div className="image-group">
                                        <img alt="User Pic" className="img-circle img-responsive" id="profile-image1"
                                             src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"/>
                                        <input id="profile-image-upload" className="hidden" type="file"/>
                                    </div>
                                    <br/>
                                </div>
                                <div className="col-sm-6">
                                    <h4 className="profile-name">{this.state.profile.name}</h4>
                                <span><p>Aspirant</p></span>
                                </div>
                                <div className="clearfix"/>
                                <hr className="hr-style"/>

                                <div className="col-sm-5 col-xs-6 title">Title:</div>
                                <div className="col-sm-7 col-xs-5">{this.state.profile.title}</div>

                                    <div className="clearfix"/>
                                <div className="bot-border"/>

                                <div className="col-sm-5 col-xs-6 title ">Profile:</div>
                                <div className="col-sm-7">
                                    <EditableLabel className="col-sm-7" text={this.state.profile.profile}
                                                   onTextUpdate={this.onTextUpdate}/>
                                </div>

                                <div className="clearfix"/>
                                <div className="bot-border"/>

                                <div className="col-sm-5 col-xs-6 title ">Dropdown info:</div>
                                <div className="col-sm-5">
                                    <select className="form-control" value={this.state.selectedValue}
                                            onChange={this.handleChange}>
                                        {this.state.profile.selectionData.map(this.selectionDataItem)}
                                    </select>
                                </div>

                                <div className="clearfix"/>
                                <div className="bot-border"/>

                                <div className="btn btn-group button-group">
                                    <button className="btn btn-success " onClick={this.onFormSubmit}>Save</button>
                                    <button className="btn btn-default pull-right">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({profileData}) {
    return {profileData}; // {profileData} === {profileData : profileData}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({onSave}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);
