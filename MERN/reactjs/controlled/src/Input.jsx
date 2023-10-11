import React from 'react';

const Input = ({name,handler}) => {
    return (
        <div>
            <input type="text" value={name} onChange={handler} />
        </div>
    );
}

export default Input;
