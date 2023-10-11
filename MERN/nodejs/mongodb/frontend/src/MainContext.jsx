import React, { createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Context = createContext();
const MainContext = (props) => {

    const notify = (msg, type) => toast(
        msg,
        { type }
    );

    return (
        <Context.Provider value={{ notify }}>
            <ToastContainer />
            {props.children}
        </Context.Provider>
    );
}

export default MainContext;
export {Context}