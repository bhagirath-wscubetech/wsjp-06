import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext();
const CartContextHolder = (props) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategory] = useState([]);
    const [cart, setCart] = useState([]);

    const loadData = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    }
    const getCategories = async () => {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategory(data);
    }

    useEffect(
        () => {
            loadData();
            getCategories();
        },
        []
    )

    function addToCart(pId) {
        if (cart.includes(pId) == false) {
            setCart(
                [
                    ...cart,
                    pId
                ]
            )
        }
    }

    function removeFromCart(index){

    }

    return (
        <CartContext.Provider value={
            { products, categories, cart, addToCart }
        }>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextHolder;

export { CartContext }