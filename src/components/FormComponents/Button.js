import React from 'react';

const button = props => {
    const { type, label, handleClick } = props;
    let className = '';
    switch (type) {
        case 'submit':
            className = 'btn btn-primary';
            break;
        
        case 'error':
            className = 'btn btn-danger';
            break;
    }
    return(<button className={className} onClick={handleClick}> { label } </button>
        );
}
export default button;