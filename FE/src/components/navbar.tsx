'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '@/styles/navbar.module.css';
import '@/styles/navbar.module.css';
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import Image from 'next/image';
const dataCategoryParents = [
    {
        id: 2,
        name: 'MEN',
    },
    {
        id: 3,
        name: 'WOMAN',
    },
    {
        id: 4,
        name: 'YOUTH',
    },
    {
        id: 5,
        name: 'ACCESSORIES',
    },
    {
        id: 6,
        name: 'COLLABORATIONS',
    },
    {
        id: 7,
        name: 'NBA',
    },
    {
        id: 8,
        name: 'MLB',
    },
    {
        id: 9,
        name: 'NFL',
    },
    {
        id: 10,
        name: 'BRAND',
    },
    {
        id: 11,
        name: 'SALE',
    },
];
const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <main
            id={styles.navbar}
            className='fixed top-0 right-0 left-0 bg-white z-50'
            onMouseLeave={handleMouseLeave}>
            <nav className=''>
                <ul className='flex w-full justify-evenly items-center py-4 '>
                    <div className='text-xl font-bold'>ThagStore</div>
                    {dataCategoryParents.map((item) => (
                        <li
                            key={item.id}
                            onMouseEnter={handleMouseEnter}
                            className='text-sm'>
                            <Link href={'#'}>{item.name}</Link>
                        </li>
                    ))}
                    <li>Search</li>
                    <li>disclosure</li>
                    <li className='flex items-center'><IoBagHandleOutline /> <sup className='text-red-700 text-sm'>0</sup></li>
                    <li><FaRegUser /></li>
                </ul>

                <ul className={`${isHovered ? styles.show : styles.hide} absolute h-96 bg-white px-[10.8rem]`} >
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, libero. Officia dolores vel, beatae molestias laborum adipisci delectus quidem sequi, totam placeat porro, alias molestiae ad blanditiis eveniet culpa odit.</p>
                </ul>

            </nav>
        </main>
    );
};

export default NavBar;
