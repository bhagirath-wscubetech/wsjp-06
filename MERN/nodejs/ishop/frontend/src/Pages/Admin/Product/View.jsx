import React, { useContext, useEffect } from 'react';
import { Context } from '../../../MainContext';
import { Link } from "react-router-dom";

const View = () => {
    const { product, fetchProduct, proImgUrl } = useContext(Context);
    useEffect(
        () => {
            fetchProduct();
        },
        []
    )
    return (
        <div className='shadow h-full p-4 m-5'>
            <div className='text-xl font-bold'>Category Listing</div>
            <hr className='my-3' />

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Slug
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Best Seller
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map(
                                (prod) => {
                                    return <tr key={prod._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {prod.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {prod.slug}
                                        </td>
                                        <td className="px-6 py-4">
                                            <img width={100} src={proImgUrl + prod.image} alt="" />
                                        </td>
                                        <td className="px-6 py-4">
                                            <del> ₹ {prod.price}</del> <br />
                                            {prod.discount}% off <br />
                                            ₹ {prod.final}
                                        </td>
                                        <td className="px-6 py-4">
                                            {prod.status ? 'Active' : 'Inactive'}
                                        </td>
                                        <td className="px-6 py-4">
                                            {prod.best_seller ? 'Yes' : 'No'}
                                        </td>
                                        <td>
                                            <Link to={"/admin/product/edit/" + prod._id}>
                                                <button className='p-3 border border-blue-400'>Edit</button>
                                            </Link>
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

export default View;
