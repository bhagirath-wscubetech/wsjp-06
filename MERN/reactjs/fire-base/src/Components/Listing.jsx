import React, { useEffect, useState } from 'react';
import Header from './Header';
import { getDatabase, ref, onValue } from "firebase/database";
const Listing = () => {
    const [users, setUser] = useState([]);

    function getUser() {
        const db = getDatabase();
        const starCountRef = ref(db, 'users');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            const userData = Object.keys(data).map(
                (k) => {
                    return {
                        id: k,
                        ...data[k]
                    }
                }
            )
            setUser(userData);
        });
    }

    useEffect(
        () => {
            getUser();
        },
        []
    )


    return (
        <div>
            <Header />

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                                Age
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(
                                (user) => {
                                    return <tr key={user.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {user.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.gender}
                                        </td>
                                        <td className={`px-6 py-4 ${user.age < 18 ? 'text-red-500' : ''}`}>
                                            {user.age}
                                        </td>
                                    </tr>
                                }
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Listing;
