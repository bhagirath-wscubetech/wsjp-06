import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    }

    useEffect(
        () => {
            const lsUser = localStorage.getItem("user");
            if (lsUser != undefined) {
                setUser(JSON.parse(lsUser));
            } else if (user == null) {
                navigate("/login");
            }
        },
        []
    )

    return (
        <div className='w-full p-3'>
            <ul className='flex justify-center gap-10'>
                <li>
                    <Link to="/add">Add</Link>
                </li>
                <li>
                    <Link to="/">Listing</Link>
                </li>
                <li>
                    <button onClick={logout}>
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Header;
