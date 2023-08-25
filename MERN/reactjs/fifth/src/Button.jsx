import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.handler}>
            {props.symbol}
        </button>
    );
}

export default Button;
