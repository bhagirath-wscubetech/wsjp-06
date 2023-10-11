import React, { useContext } from 'react';
import { CounterContext } from './Context/MainContext';
const ChildC = () => {
    const { count } = useContext(CounterContext); // consumer
    return (
        <span className='ChildC'>
            {count}
        </span>
    );
}

export default ChildC;
