import React from 'react';
import Header from '../../Components/Website/Header';
import Footer from '../../Components/Website/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header />
            {/* Middle part */}
            <Outlet />
            {/* ------- */}
            <Footer />
        </div>
    );
}

export default Main;
