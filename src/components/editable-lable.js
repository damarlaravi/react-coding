import React, {Component} from 'react';

export default class EditableLabel extends Component {
    constructor(props) {
        super(props);
        this.textValue = props.text;

        this.state = {
            editing: false,
            text: props.text,
        };

        this.labelClicked = this.labelClicked.bind(this);
        this.textChanged = this.textChanged.bind(this);
        this.inputLostFocus = this.inputLostFocus.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
    }

    labelClicked() {
        this.setState({editing: true});
        if (this.state.text === this.textValue)
            this.setState({text: this.state.text + ' kumar '});
        else
            this.setState({text: this.state.text});
    }

    textChanged() {
        this.setState({text: this.refs.textInput.value});
    }

    inputLostFocus() {
        this.setState({editing: false});
        if (this.state.text === this.textValue)
            this.setState({text: this.textValue});

        this.props.onTextUpdate(this.state.text);
        //console.log(" This is in editable component ", this.state.text);
    }

    keyPressed(event) {
        if (event.key === 'Enter') {
            this.inputLostFocus();
        }
    }

    render() {
        if (this.state.editing)
            return <input
                ref='textInput'
                type='text'
                onChange={this.textChanged}
                onBlur={this.inputLostFocus}
                onKeyPress={this.keyPressed}
                value={this.state.text}
                autoFocus
            />;

        return <div onDoubleClick={this.labelClicked}>{this.state.text}</div>;
    }

}