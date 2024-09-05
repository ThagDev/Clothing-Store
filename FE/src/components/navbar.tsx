'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '@/styles/navbar.module.css';
import '@/styles/navbar.module.css';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa6';
import Image from 'next/image';

const dataCategoryParents = [
    {
        id: 2,
        name: 'MEN',
        topics: [
            {
                id: 1,
                name: 'clothing',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                        slug: 'shop-all'
                    },
                    {
                        id: 2,
                        name: 'T shirts',
                        slug: 't-shirts'
                    },
                    {
                        id: 3,
                        name: 'pants',
                        slug: 'pants'
                    },
                    {
                        id: 4,
                        name: 'accessories',
                        slug: 'accessories'
                    },
                ],
            },
            {
                id: 2,
                name: 'featured',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'featured',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                ],
            },
            {
                id: 3,

                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                        image: '/images/products/born-of-purpose-tee-top-717201.webp'
                    },

                ],
            },
            {
                id: 4,

                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                        image: '/images/products/born-of-purpose-tee-top-717201.webp'
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        name: 'WOMEN',
        topics: [
            {
                id: 1,
                name: 'clothing',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'women',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                    {
                        id: 4,
                        name: 'accessories',
                    },
                ],
            },
            {
                id: 2,
                name: 'featured',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'featured',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        name: 'YOUTH',
        topics: [
            {
                id: 1,
                name: 'clothing',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'shirts',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                    {
                        id: 4,
                        name: 'accessories',
                    },
                ],
            },
            {
                id: 2,
                name: 'featured',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'featured',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        name: 'ACCESSORIES',
        topics: [
            {
                id: 1,
                name: 'clothing',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'shirts',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                    {
                        id: 4,
                        name: 'accessories',
                    },
                ],
            },
            {
                id: 2,
                name: 'featured',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'featured',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                ],
            },
        ],
    },
    {
        id: 6,
        name: 'COLLABORATIONS',
        topics: [
            {
                id: 1,
                name: 'clothing',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'shirts',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                    {
                        id: 4,
                        name: 'accessories',
                    },
                ],
            },
            {
                id: 2,
                name: 'featured',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'featured',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                ],
            },
        ],
    },
    {
        id: 7,
        name: 'NBA',
        topics: [
            {
                id: 1,
                name: 'clothing',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'shirts',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                    {
                        id: 4,
                        name: 'accessories',
                    },
                ],
            },
            {
                id: 2,
                name: 'featured',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'featured',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                ],
            },
        ],
    },
    {
        id: 8,
        name: 'MLB',
        topics: [
            {
                id: 1,
                name: 'clothing',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'shirts',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                    {
                        id: 4,
                        name: 'accessories',
                    },
                ],
            },
            {
                id: 2,
                name: 'featured',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'featured',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                ],
            },
        ],
    },
    {
        id: 9,
        name: 'NFL',
        topics: [
            {
                id: 1,
                name: 'clothing',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'shirts',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                    {
                        id: 4,
                        name: 'accessories',
                    },
                ],
            },
            {
                id: 2,
                name: 'featured',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'featured',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                ],
            },
        ],
    },
    {
        id: 10,
        name: 'BRAND',
        topics: [
            {
                id: 1,
                name: 'clothing',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'shirts',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                    {
                        id: 4,
                        name: 'accessories',
                    },
                ],
            },
            {
                id: 2,
                name: 'featured',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'featured',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                ],
            },
        ],
    },
    {
        id: 11,
        name: 'SALE',
        topics: [
            {
                id: 1,
                name: 'clothing',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'shirts',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                    {
                        id: 4,
                        name: 'accessories',
                    },
                ],
            },
            {
                id: 2,
                name: 'featured',
                categories: [
                    {
                        id: 1,
                        name: 'shop all',
                    },
                    {
                        id: 2,
                        name: 'featured',
                    },
                    {
                        id: 3,
                        name: 'pants',
                    },
                ],
            },
        ],
    },
];
const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState<
        (typeof dataCategoryParents)[0] | null
    >(null);

    const handleMouseEnter = (item: any) => {
        setIsHovered(true);
        setHoveredCategory(item);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setHoveredCategory(null);
    };
    // const renderTopics = () => {
    //     if (!hoveredCategory) return null;
    //     return hoveredCategory.topics.map((topic: any) => (
    //         <li key={topic.id}>
    //             <div>{topic.name}</div>
    //             <ul>
    //                 {topic.categories.map((category: any) => (
    //                     <li key={category.id}>{category.name}</li>
    //                 ))}
    //             </ul>
    //         </li>
    //     ));
    // };
    return (
        <main
            id={styles.navbar}
            className='fixed top-0 right-0 left-0 bg-white z-50'
            onMouseLeave={handleMouseLeave}>
            <nav className=''>
                <ul className='flex w-full justify-evenly items-center py-4 '>
                    <div className='text-2xl font-bold'>ThagStore</div>
                    {dataCategoryParents?.map((item: any) => (
                        <li
                            key={item.id}
                            onMouseEnter={() => handleMouseEnter(item)}
                            className='text-sm md:text-sm lg:text-xl'>
                            <Link href={`/collections/${item.name?.toLowerCase()}`}>
                                {item.name?.toUpperCase()}
                            </Link>
                        </li>
                    ))}
                    <li>Search</li>
                    <li>disclosure</li>
                    <li className='flex items-center'>
                        <IoBagHandleOutline /> <sup className='text-red-700 text-sm'>0</sup>
                    </li>
                    <li>
                        <FaRegUser />
                    </li>
                </ul>

                <div
                    className={`${isHovered ? styles.show : styles.hide
                        } absolute bg-white px-[10.8rem] pt-3 pb-10 w-full flex gap-10`}>
                    {hoveredCategory &&
                        hoveredCategory.topics?.map((topic: any) => (
                            <div
                                key={topic.id}

                            >
                                <div className='text-xl font-normal  cursor-text'>{topic.name?.toUpperCase()} </div>
                                <div>
                                    {topic?.categories?.map((category: any) => (
                                        <div key={category.id}>
                                            {category?.image && <Image src={category?.image} alt="" width={100} height={100} className='h-full w-full' />}
                                            <Link href={`/collections/${category?.slug}`} className='text-sm hover:underline   '>{category?.name}</Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </nav>
        </main>
    );
};

export default NavBar;
