import React, { useState } from 'react';
import { BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {

    const [toggle, setToggle] = useState(false);

    const menu = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Store",
            url: "/store"
        },
        {
            name: "Iphone",
            url: "/iphone"
        },
        {
            name: "Ipad",
            url: "/ipad"
        },
        {
            name: "Mac",
            url: "/mac"
        },
        {
            name: "Accessories",
            url: "/accessories"
        }
    ]

    return (
        <>
            <div className='w-full py-3 shadow md:block hidden'>
                <div className="container flex  justify-between">
                    <div className='flex items-center gap-[15px] text-[#262626]'>
                        <span>EN</span>
                        <div className='down-arrow'></div>
                        <span>$</span>
                        <div className='down-arrow'></div>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                        <BiUser />
                        <span>My Profile</span>
                        <div className='relative'>
                            <img src="images/bag_icon.svg" alt="" />
                            <span className='top-[-15px] text-[10px] left-[10px] absolute bg-[#FF1E56] w-[18px] h-[18px] flex justify-center items-center text-white rounded-full'>2</span>
                        </div>
                        <span>2 Items</span>
                        <span className='opacity-[0.5]'>$998</span>
                        <FiSearch className='ml-[50px]' />
                    </div>
                </div>
            </div>
            <div className="container pt-[30px] flex justify-between md:justify-around px-2">
                <img src="images/logo.svg" alt="" />
                <FaBars className='text-3xl md:hidden' onClick={() => setToggle(true)} />
            </div>
            <nav className="container hidden md:block">
                <ul className='flex my-6 justify-center gap-5'>
                    {
                        menu.map(
                            (m, i) => {
                                return (
                                    <li key={i}>
                                        <Link to={m.url} className='uppercase'>
                                            {m.name}
                                        </Link>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </nav>

            {/* 
                responsive menu
            */}
            <ul className={`md:hidden responsive-menu text-white flex flex-col fixed w-full h-[100vh] top-0 duration-500 justify-center items-center gap-[40px] ${toggle ? 'left-[0%] opacity-[1] ' : 'opacity-0 left-[-100%]'}`}>
                <AiOutlineClose onClick={() => setToggle(false)} className='text-2xl absolute top-[20px] left-[30px]' />
                {
                    menu.map(
                        (m, i) => {
                            return (
                                <li key={i}>
                                    <Link to={m.url} className='uppercase'>
                                        {m.name}
                                    </Link>
                                </li>
                            )
                        }
                    )
                }
            </ul>

        </>
    );
}

export default Header;
