import React, { useContext } from 'react';
import { Context } from "../../MainContext";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Store = () => {
    const { category, product, color, catImgUrl, proImgUrl } = useContext(Context);
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4500,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-5 gap-3'>
            <div>
                <div className='w-full py-2 bg-[#F6F7F8]'>
                    <h3 className='text-center pb-4 text-xl font-bold'>Categories</h3>
                    <ul>
                        <Link to={"/store"}>
                            <li className='px-[20px] py-1'>All ({product.length})</li>
                        </Link>
                        {
                            category.map(
                                (cat) => {
                                    return (
                                        <Link to={`/store/${cat.slug}`}>
                                            <li className='px-[20px] py-1'>{cat.name} ({cat.count})</li>
                                        </Link>
                                    )
                                }
                            )
                        }
                    </ul>
                </div>
                <div className='w-full py-2 bg-[#F6F7F8] my-4'>
                    <h3 className='text-center pb-4 text-xl font-bold'>Colors</h3>
                    <ul>
                        <Link to={"/store"}>
                            <li className='px-[20px] py-1'>All ({product.length})</li>
                        </Link>
                        {
                            color.map(
                                (c) => {
                                    return (
                                        <Link>
                                            <li className='px-[20px] py-1'>{c.name} ({c.count})</li>
                                        </Link>
                                    )
                                }
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className='col-span-4'>
                <div className='w-full'>
                    <Slider {...settings}>
                        {
                            category.map(
                                (cat) => {
                                    return <div className='h-[400px] relative'>
                                        <img src={catImgUrl + cat.image} alt="" className='h-full w-full' />
                                        <div className='absolute flex-col z-[999999] flex justify-center items-center top-[0] w-full h-full' style={{ background: "rgba(0,0,0,0.5)" }}>
                                            <h3 className='text-center text-6xl text-white'>
                                                {cat.name}
                                            </h3>
                                            <Link to={`/store/${cat.slug}`} className='text-white border-b-2 mt-4'>
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                }
                            )
                        }
                    </Slider>
                </div>
                <div className='grid grid-cols-3 gap-4 my-4'>
                    {
                        product.map(
                            (prod, i) => {
                                return (
                                    <Link to={`/store/product/${prod.slug}`}>
                                        <div key={i} className="my-3 px-2 relative prod-box">
                                            {
                                                prod.discount == 0
                                                    ?
                                                    ""
                                                    :
                                                    <div className='absolute bg-blue-500 px-3 py-1 text-white'>
                                                        {prod.discount}% off
                                                    </div>
                                            }
                                            <div className="shadow-xl">
                                                <img className='!h-[200px] w-full' src={proImgUrl + "/" + prod.image} alt="" />
                                                <div className='py-2 text-center text-[16px]'>{prod.name}</div>
                                                <div className='py-2 text-center text-[16px]'>
                                                    <span className='text-[#FF4858] font-bold'>
                                                        ₹ {prod.final}
                                                    </span>
                                                    <del className='text-[#C1C8CE] px-2'>₹ {prod.price}</del>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Store;
