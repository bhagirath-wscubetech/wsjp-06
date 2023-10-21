import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../../MainContext';
import { useParams } from "react-router-dom";
import axios from "axios";
const Edit = () => {
    const { apiBaseUrl, categoryBaseUrl, notify, catImgUrl } = useContext(Context);
    const [categoryData, setCatData] = useState({});

    const generateSlug = (value) => {
        const slug = value.toLowerCase().replace(/ /g, '-');
        return slug;
    }

    const { id } = useParams();
    useEffect(
        () => {
            axios.get(apiBaseUrl + categoryBaseUrl + "/" + id)
                .then(
                    (success) => {
                        if (success.data.status == 1) {
                            setCatData(success.data.category);
                        }
                    }
                ).catch(
                    (error) => {

                    }
                )
        },
        []
    )

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", event.target.name.value);
        formData.append("slug", event.target.slug.value);
        formData.append("image", event.target.image.files[0]);
        axios.patch(apiBaseUrl + categoryBaseUrl + "/edit/" + id, formData)
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        notify(success.data.msg, "success");
                        event.target.reset();
                    } else {
                        notify(success.data.msg, "error");
                    }
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )

    }
    return (
        <div className='shadow h-full p-4 m-5'>
            <div className='text-xl font-bold'>Category Edit</div>
            <hr className='my-3' />
            <form onSubmit={submitHandler} encType='multipart/form-data'>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" onChange={
                        (e) => {
                            setCatData({
                                ...categoryData,
                                name: e.target.value,
                                slug: generateSlug(e.target.value)
                            })
                        }
                    } value={categoryData.name} name='name' id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="slug" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slug</label>
                    <input type="text" value={categoryData.slug} name='slug' readOnly id="slug" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                    <input type="file" id="image" name='image' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                </div>
                <img width={200} src={catImgUrl + "/" + categoryData.image} alt="" />
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
            </form>

        </div>
    );
}

export default Edit;
