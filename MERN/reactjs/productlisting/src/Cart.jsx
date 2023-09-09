import React, { useContext } from 'react';
import { CartContext } from './Context/CartContextHolder';
const Cart = () => {
    const { cart, products } = useContext(CartContext);

    const cartProducts = products.filter(
        (prod) => {
            if (cart.includes(prod.id)) {
                return true;
            } else {
                return false;
            }
        }
    )

    // console.log(cartProducts);
    return (
        <div className='container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Sr.</th>
                        <th>Image</th>
                        <th>Product Details</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartProducts.map(
                            (item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img src={item.image} alt="" width={50} />
                                        </td>
                                        <td width={"40%"}>
                                            <h6>{item.title}</h6>
                                            ₹ {item.price}
                                        </td>
                                        <td>
                                            <button className='btn mx-2'>-</button>
                                            1
                                            <button className='btn mx-2'>+</button>
                                        </td>
                                        <td> {item.price}</td>
                                        <td>
                                            <button className='btn text-danger'>
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Cart;
