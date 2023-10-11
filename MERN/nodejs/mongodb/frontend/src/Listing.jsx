import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from './MainContext';
import { Link } from 'react-router-dom';
const Listing = () => {
    const [users, setUser] = useState([]);
    const { notify } = useContext(Context);
    const getUser = () => {
        axios.get("http://localhost:5000/user")
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        setUser(success.data.user);
                    } else {
                        // error
                    }
                }
            ).catch(
                (error) => {
                    notify("Internal server error", "error");
                }
            )
    }

    useEffect(
        () => {
            getUser();
        },
        []
    )

    function changeStatus(id, newStatus) {
        axios.get(`http://localhost:5000/user/change-status/${id}/${newStatus}`)
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        getUser();
                        notify(success.data.msg, "success");
                    } else {
                        notify(success.data.msg, "error");
                    }
                }
            ).catch(
                (error) => {
                    notify("Internal server error", "error");
                }
            )
    }

    function deleteData(id) {
        axios.delete(`http://localhost:5000/user/delete/${id}`)
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        getUser();
                        notify(success.data.msg, "success");
                    } else {
                        notify(success.data.msg, "error");
                    }
                }
            ).catch(
                (error) => {
                    console.log(error);
                }
            )
    }

    return (
        <>
            <div className="relative overflow-x-auto my-4">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                DOB
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {
                        users.length == 0
                            ?
                            <tbody className='pt-4'>
                                <div role="status">
                                    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </tbody>
                            :
                            <tbody>
                                {
                                    users.map(
                                        (user) => {
                                            return (
                                                <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {user.name}
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {user.email}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {user.gender}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {new Date(user.dob).toDateString()}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <button onClick={
                                                            (e) => {
                                                                changeStatus(user._id, !user.status);
                                                                e.target.innerText = "Loading...";
                                                            }
                                                        }
                                                            className={`text-white p-2 ${user.status ? 'bg-blue-400' : 'bg-orange-400'}`}>
                                                            {user.status ? 'Active' : 'Inactive'}
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button onClick={() => deleteData(user._id)} className='mx-2 p-2 bg-red-500 text-white'>
                                                            Delete
                                                        </button>
                                                        <Link to={`/edit/${user._id}`}>
                                                            <button className='mx-2 p-2 bg-green-500 text-white'>
                                                                Edit
                                                            </button>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    )
                                }
                            </tbody>
                    }
                </table>
            </div>
        </>

    );
}

export default Listing;
