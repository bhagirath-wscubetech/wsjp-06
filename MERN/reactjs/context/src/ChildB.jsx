import React from 'react';
import ChildC from './ChildC';

const ChildB = () => {
    return (
        <div className='ChildB'>
            Count: <ChildC />
        </div>
    );
}

export default ChildB;
