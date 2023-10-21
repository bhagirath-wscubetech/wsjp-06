import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Context = createContext();
const MainContext = (props) => {
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const categoryBaseUrl = process.env.REACT_APP_CATEGORY_BASE_URL;
    const productBaseUrl = process.env.REACT_APP_PRODUCT_BASE_URL;
    const colorBaseUrl = process.env.REACT_APP_COLOR_BASE_URL;
    const notify = (msg, type) => toast(msg, { type });
    const [category, setCategory] = useState([]);
    const [product, setProduct] = useState([]);
    const [color, setColor] = useState([]);
    const [catImgUrl, setCatImgUrl] = useState(null);
    const [proImgUrl, setProImgUrl] = useState(null);

    useEffect(
        () => {
            fetchCategory();
            fetchColor();
            fetchProduct();
        },
        []
    )

    const fetchProduct = () => {
        axios.get(apiBaseUrl + productBaseUrl)
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        setProduct(success.data.product);
                        setProImgUrl(success.data.baseUrl);
                    } else {
                        setProduct([]);
                    }
                }
            )
    }

    const fetchCategory = () => {
        axios.get(apiBaseUrl + categoryBaseUrl)
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        setCategory(success.data.category);
                        setCatImgUrl(success.data.baseUrl);
                    } else {
                        setCategory([]);
                    }
                }
            )
            .catch(
                (error) => {
                    setCategory([]);
                }
            )
    }
    const fetchColor = () => {
        axios.get(apiBaseUrl + colorBaseUrl)
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        setColor(success.data.color);
                    } else {
                        setColor([]);
                    }
                }
            )
            .catch(
                (error) => {
                    setColor([]);
                }
            )
    }

    return (
        <Context.Provider value={{ productBaseUrl, apiBaseUrl, categoryBaseUrl, catImgUrl, notify, category, color, fetchColor, fetchCategory, product, fetchProduct, proImgUrl }}>
            <ToastContainer />
            {props.children}
        </Context.Provider>
    );
}

export default MainContext;
export { Context };


// .env -> environment