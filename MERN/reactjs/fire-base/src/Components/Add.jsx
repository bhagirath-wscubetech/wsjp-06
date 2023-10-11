import React from 'react';
import { getDatabase, ref, set } from "firebase/database";
import { v4 } from 'uuid';
import FormGroup from "./FormGroup";
import Header from './Header';
const Add = () => {

    function submitHandler(event) {
        event.preventDefault();
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            age: event.target.age.value,
            gender: event.target.gender.value,
            createdAt: new Date().getTime()
        }

        const db = getDatabase();
        const id = v4();
        set(ref(db, 'users/' + id), data);
        event.target.reset();
    }
    return (
        <>
            <Header />
            <form onSubmit={submitHandler}>
                <FormGroup label="Name" name="name" type="text" />
                <FormGroup label="Email" name="email" type="email" />
                <FormGroup label="Age" name="age" type="number" />

                <div className="my-2">
                    <label>Gender</label>
                    <div className="flex items-center mb-4">
                        <input id="gender-1" type="radio" value="M" name="gender" className="mx-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                        <label htmlhtmlFor="gender-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Male
                        </label>
                        <input id="gender-2" type="radio" value="F" name="gender" className="mx-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                        <label htmlhtmlFor="gender-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Female
                        </label>
                    </div>
                </div>

                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlhtmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </>
    );
}

export default Add;
