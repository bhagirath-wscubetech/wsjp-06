import React, { useContext } from 'react';
import { Context } from '../../MainContext';

const Home = () => {
    let { category, product, proImgUrl } = useContext(Context);
    product = product.filter(
        (prod) => prod.best_seller == true
    )
    return (
        <>
            <div className='w-full h-[450px] md:h-[650px] banner relative my-4'>
                <img src="images/2_corousel.png" alt="" className='h-[100%] absolute right-[0] bottom-0' />
            </div>
            <div className='my-4 max-w-[1200px] mx-auto'>
                <div className='text-4xl text-center'>Best Seller</div>
                <ul className='flex justify-center gap-5 my-3'>
                    <li className='cursor-pointer'>All</li>
                    {
                        category.map(
                            (cat) => {
                                return <li className='cursor-pointer'>{cat.name}</li>
                            }
                        )
                    }
                </ul>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        product.map(
                            (prod) => {
                                return (
                                    <div className='shadow my-4 rounded overflow-hidden'>
                                        <img src={proImgUrl + "/" + prod.image} alt="" className='w-full h-[300px]' />
                                        <div className='p-3 text-center'>{prod.name}</div>
                                    </div>
                                )
                            }
                        )
                    }

                </div>
            </div>
            <div className='mb-[500px]'></div>
        </>
    );
}

export default Home;
