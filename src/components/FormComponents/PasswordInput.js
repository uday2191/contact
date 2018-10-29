import React from 'react';

const passwordInput = props => {
    const { label, handleChange } = props;
    return(<div className="form-group">
            <label for={label}>{label}</label>
            <input type="password" className="form-control" onChange="handleChange"/>
            </div>
        );
}

export default passwordInput;