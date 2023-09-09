import React, { useContext } from 'react';
import { CartContext } from './Context/CartContextHolder';
const Display = ({ activeCat, apply, range, rating }) => {
    let { products } = useContext(CartContext);
    if (activeCat != null) {
        products = products.filter(
            (prod) => {
                if (prod.category == activeCat) {
                    return true;
                } else {
                    return false;
                }
            }
        )
    }
    if (apply == true) {
        if (range.to > range.from) {
            products = products.filter(
                (prod) => {
                    if (prod.price >= range.from && prod.price <= range.to) {
                        return true;
                    } else {
                        return false;
                    }
                }
            )
        }
    }
    if (rating != null) {
        products = products.filter(
            (prod) => {
                if (prod.rating.rate >= rating) {
                    return true;
                } else {
                    return false;
                }
            }
        )
    }

    return (
        <div className='col-9 p-3'>
            <div className="row">
                {
                    products.map(
                        (prod) => {
                            return <Product rating={prod.rating.rate} count={prod.rating.count} key={prod.id} id={prod.id} image={prod.image} title={prod.title} price={prod.price} />
                        }
                    )
                }


            </div>
        </div>
    );
}

export default Display;


const Product = (props) => {

    const { addToCart } = useContext(CartContext);

    return (
        <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div className="product">
                <img src={props.image} alt="" />
                <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li className="icon" onClick={() => addToCart(props.id)}>
                        <span>👜</span>
                    </li>
                </ul>
            </div>
            <div className="title pt-4 pb-1">{props.title}</div>
            <div className="d-flex align-content-center justify-content-center">
                <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
            <div className="price">$ {props.price}</div>

            <div>
                {props.rating} ⭐ ({props.count})
            </div>
        </div>
    )
}