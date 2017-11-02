import React, {Component} from 'react';
import HeaderComponent from './header';
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
            <div>
                <HeaderComponent/>
                <div className="container">
                    <div className="col-sm-5">
                        <form className="form-horizontal"
                              onSubmit={this.onFormSubmit}>
                            <div className="form-control">
                                <label className="side-label">Profile
                                    Name: </label>
                                <EditableLabel text={this.state.profile.name}
                                               onTextUpdate={this.onTextUpdate}/>
                            </div>
                            <select className="form-control"
                                    value={this.state.selectedValue}
                                    onChange={this.handleChange}>
                                {this.state.profile.selectionData.map(
                                    this.selectionDataItem)}
                            </select>

                            <input type="text" className="form-control"
                                   placeholder="Type in company"/>
                            <label className="sr-only">Type</label>
                            <input type="text" className="form-control"
                                   placeholder="Type in foreman"/>
                            <label className="sr-only">Type1</label>
                            <input type="text" className="form-control"
                                   placeholder="Type in surname"/>
                            <label className="sr-only">Type2</label>
                            <input type="text" className="form-control"
                                   placeholder="Type in mail"/>
                            <button className="btn btn-primary" type="submit">
                                Save
                            </button>
                        </form>
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
