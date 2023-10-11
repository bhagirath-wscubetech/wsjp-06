import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from './MainContext';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const [loading, setLoading] = useState(false);
    const { notify } = useContext(Context);
    const { id } = useParams();
    const [user, setUser] = useState([]);
    useEffect(
        () => {
            if (id != undefined || id != null) {
                axios.get(`http://localhost:5000/user/${id}`)
                    .then(
                        (success) => {
                            if (success.data.status == 1) {
                                setUser(success.data.user);
                            }
                        }
                    ).catch(
                        (error) => {
                            console.log(error);
                        }
                    )
            }
        },
        []
    )

    const submitHandler = (event) => {
        setLoading(true);
        event.preventDefault();
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            dob: event.target.dob.value,
            gender: event.target.gender.value,
        }
        axios.patch(
            `http://localhost:5000/user/update/${id}`,
            data
        ).then(
            (success) => {
                if (success.data.status == 1) {
                    event.target.reset();
                    notify(success.data.msg, "success");
                    setUser([]);
                } else {
                    notify(success.data.msg, "error");
                }
            }
        ).catch(
            (error) => {
                console.log(error);
                notify("Internal server error", "error");
            }
        ).finally(
            () => {
                setLoading(false);
            }
        )
    }

    return (
        <>
            <div className='fixed w-full h-[100vh] top-0 left-0 justify-center items-center text-white text-6xl'
                style={
                    {
                        background: "rgba(0,0,0,0.5)",
                        display: loading ? 'flex' : 'none'
                    }
                }
            >
                Loading...
            </div>
            <form className='my-4 px-3' onSubmit={submitHandler}>
                <div className='grid grid-cols-2 gap-6'>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="name" onChange={
                            (e) => {
                                setUser(
                                    {
                                        ...user,
                                        name: e.target.value
                                    }
                                )
                            }
                        } value={user?.name} name='name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input onChange={
                            (e) => {
                                setUser(
                                    {
                                        ...user,
                                        email: e.target.value
                                    }
                                )
                            }
                        } type="email" name='email' value={user?.email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DOB</label>
                        <input onChange={
                            (e) => {
                                setUser(
                                    {
                                        ...user,
                                        dob: e.target.value
                                    }
                                )
                            }
                        } type="date" name='dob' id="dob" value={user?.dob} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className='mb-6 flex flex-wrap'>
                        <label className="w-[100%] block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                        <div className="flex mr-2 px-2 items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                            <input onChange={
                                (e) => {
                                    setUser(
                                        {
                                            ...user,
                                            gender: e.target.value
                                        }
                                    )
                                }
                            } id="bordered-radio-1" type="radio" value="M" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={user?.gender == "M" ? true : false} />
                            <label htmlFor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                        </div>
                        <div className="flex mr-2 px-2 items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                            <input onChange={
                                (e) => {
                                    setUser(
                                        {
                                            ...user,
                                            gender: e.target.value
                                        }
                                    )
                                }
                            } id="bordered-radio-2" type="radio" value="F" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={user?.gender == "F" ? true : false} />
                            <label htmlFor="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                        </div>
                        <div className="flex mr-2 px-2 items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                            <input onChange={
                                (e) => {
                                    setUser(
                                        {
                                            ...user,
                                            gender: e.target.value
                                        }
                                    )
                                }
                            } id="bordered-radio-3" type="radio" value="O" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={user?.gender == "O" ? true : false} />
                            <label htmlFor="bordered-radio-3" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </>

    );
}

export default Edit;
