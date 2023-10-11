import React, { useContext } from 'react';
import ChildB from './ChildB';
import { CounterContext } from './Context/MainContext';
const ChildA = () => {
    const { count, setCount } = useContext(CounterContext);
    return (
        <div className='ChildA'>
            <button onClick={() => setCount(count + 1)}>+</button>
            <ChildB />
            <button onClick={() => setCount(count - 1)}>+</button>
        </div >
    );
}

export default ChildA;
