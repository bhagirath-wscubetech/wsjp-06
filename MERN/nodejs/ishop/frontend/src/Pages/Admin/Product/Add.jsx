import React, { useContext, useRef } from 'react';
import { Context } from '../../../MainContext';
import axios from "axios";
const Add = () => {
    const { apiBaseUrl, productBaseUrl, notify, category, color } = useContext(Context);
    const slugRef = useRef();
    const priceRef = useRef();
    const discRef = useRef();
    const finalRef = useRef();

    function calFinal() {
        const price = priceRef.current.value;
        const disc = discRef.current.value;
        if (price != "" && disc != "") {
            const final = price - price * (disc / 100);
            finalRef.current.value = final;
        }
    }

    const generateSlug = (event) => {
        const slug = event.target.value.toLowerCase().replace(/ /g, '-');
        slugRef.current.value = slug;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", event.target.name.value);
        formData.append("slug", event.target.slug.value);
        formData.append("category_id", event.target.category.value);
        formData.append("color_id", event.target.color.value);
        formData.append("price", event.target.price.value);
        formData.append("discount", event.target.discount.value);
        formData.append("final", event.target.final.value);
        formData.append("image", event.target.image.files[0]);
        axios.post(apiBaseUrl + productBaseUrl + "/create", formData)
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
            <div className='text-xl font-bold'>Product Add</div>
            <hr className='my-3' />
            <form onSubmit={submitHandler} encType='multipart/form-data'>
                <div className="grid grid-cols-2 gap-5">
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name='name' onChange={generateSlug} id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="slug" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slug</label>
                        <input type="text" name='slug' ref={slugRef} readOnly id="slug" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="mb-6">
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="category" id="category">
                            <option disabled selected>Select a category</option>
                            {
                                category.map(
                                    (cat) => {
                                        return <option value={cat._id} key={cat._id}> {cat.name} </option>
                                    }
                                )
                            }
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
                        <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="color" id="color">
                            <option disabled selected>Select a color</option>
                            {
                                color.map(
                                    (color) => {
                                        return <option value={color._id} key={color._id}> {color.name} </option>
                                    }
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="mb-6">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="text" onChange={calFinal} ref={priceRef} name='price' id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="discount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discount</label>
                        <input type="text" onChange={calFinal} ref={discRef} name='discount' id="discount" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="final" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Final</label>
                        <input type="text" ref={finalRef} name='final' readOnly id="final" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                    <input type="file" id="image" name='image' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
            </form>

        </div>
    );
}

export default Add;
