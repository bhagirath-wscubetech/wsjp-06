import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='grid grid-cols-5'>
            <div>
                <SideMenu />
            </div>
            <div className='col-span-4 '>
                <Header />
                <div className='min-h-[90vh]'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Main;

const Header = () => {
    return (
        <div className='py-5 shadow sticky top-0 bg-white'>

        </div>
    );
}

const Footer = () => {
    return (
        <div className='text-right p-3 shadow-2xl bg-white'>
            WsCube Tech
        </div>
    );
}

const SideMenu = () => {
    const menu = [
        {
            name: "Dashboard",
            url: "/admin",
            children: null
        },
        {
            name: "Category",
            url: null,
            children: [
                {
                    name: "Add",
                    url: "/admin/category/add"
                },
                {
                    name: "View",
                    url: "/admin/category"
                }
            ]
        },
        {
            name: "Product",
            url: null,
            children: [
                {
                    name: "Add",
                    url: "/admin/product/add"
                },
                {
                    name: "View",
                    url: "/admin/product"
                }
            ]
        },
        {
            name: "Color",
            url: null,
            children: [
                {
                    name: "Add",
                    url: "/admin/color/add"
                },
                {
                    name: "View",
                    url: "/admin/color"
                }
            ]
        },
        {
            name: "Users",
            url: "/admin/users",
            children: null
        }
    ]
    return (
        <div className='bg-[#111c43] h-[100vh] text-white p-2'>
            <div className='text-center p-2 font-bold text-4xl'>Admin Panel</div>
            <hr />
            <ul className='pl-3 mt-3'>
                {
                    menu.map(
                        (item, index) => {
                            return <SideItem key={index} item={item} />
                        }
                    )
                }
            </ul>
        </div>
    );
}


const SideItem = ({ item }) => {
    const [toggle, setToggle] = useState(false);
    return <>
        {
            item.children == null
                ?
                <Link to={item.url}>
                    <li className='my-2'>{item.name}</li>
                </Link>
                :
                <>
                    <li className='my-2 cursor-pointer' onClick={() => setToggle(!toggle)}>
                        {item.name}
                    </li>
                    <ul className={`rounded-lg my-2 py-2 bg-white text-black pl-4 ${toggle ? 'block' : 'hidden'}`}>
                        {
                            item.children.map(
                                (child,index) => {
                                    return (
                                        <Link key={index} to={child.url}>
                                            <li>{child.name}</li>
                                        </Link>
                                    )
                                }
                            )
                        }
                    </ul>
                </>
        }
    </>
}