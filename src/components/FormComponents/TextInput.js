import React from 'react';

export default class textInput extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange(e) {
        this.props.handleChange(e, this.props.name);
    }

    render() {
        const { label, handleChange } = this.props;
        return(<div className="form-group">
                    <label>{label}</label>
                    <input type="text" className="form-control" value={this.props.value} onChange={this.handleChange.bind(this)}/>
                </div>
        );
    }
}