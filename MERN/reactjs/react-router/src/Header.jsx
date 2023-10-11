import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
            <button onClick={() => setCount(count - 1)}>-</button>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            {/* <a href="/">Home</a>
            <a href="/about">About</a> */}
        </div>
    );
}

export default Header;
