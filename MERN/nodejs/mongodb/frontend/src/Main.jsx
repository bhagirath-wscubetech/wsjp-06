import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <ul className='flex justify-center gap-5 py-2'>
                <li className='font-bold'>
                    <Link to={"/add"}>
                        Add
                    </Link>
                </li>
                <li className='font-bold'>
                    <Link to={"/"}>
                        Listing
                    </Link>
                </li>
            </ul>
            <div className='max-w-[1200px] mx-auto'>
                <Outlet />
            </div>
        </div>
    );
}

export default Main;
