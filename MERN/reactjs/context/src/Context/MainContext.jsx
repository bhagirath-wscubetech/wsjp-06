import React, { createContext, useEffect, useState } from 'react';

const CounterContext = createContext();

const MainContext = (props) => {
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(
        () => {
            setPrice(count * 500);
        },
        [count]
    )

    return (
        <CounterContext.Provider value={
            { count, setCount, price }
        }>
            {props.children}
        </CounterContext.Provider>
    );
}

export default MainContext;
export { CounterContext }