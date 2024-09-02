import React from 'react';
import Banner from './banners';
import Sliders from './sliders';

const banner1 = {
    title: 'FALL/WINTER 2024 ESSENTIALS',
    description:
        'The Essential Hoodie and Sweatpant are getting a seasonal modification.',
    image: '/images/banners/fallwinterdesktop.jpg',
};

const data = {
    topic: 'PICK FOR YOU',
    cards: [
        {
            id: '1',
            title: 'Slider 1 ',

            color: [
                {
                    id: '1',
                    name: 'black',
                    image: [
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 0 },
                        { id: '2', size: 'M', stock: 0 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: '2XL', stock: 10 },
                        { id: '6', size: '3XL', stock: 10 },
                        { id: '7', size: '4XL', stock: 10 },
                        { id: '8', size: '5XL', stock: 10 },
                        { id: '9', size: '6XL', stock: 10 },
                    ],
                },
                {
                    id: '2',
                    name: 'blue',
                    image: [
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
                {
                    id: '3',
                    name: 'red',
                    image: [
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
            ],
            price: 100,
        },
        {
            id: '2',
            title: 'Slider 2 ',
            price: 100,
            color: [
                {
                    id: '1',
                    name: 'black',
                    image: [
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
                {
                    id: '2',
                    name: 'blue',
                    image: [
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
                {
                    id: '3',
                    name: 'red',
                    image: [
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
            ],
        },
        {
            id: '3',
            title: 'Slider 3 ',
            price: 100,
            color: [
                {
                    id: '1',
                    name: 'black',
                    image: [
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
                {
                    id: '2',
                    name: 'blue',
                    image: [
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
                {
                    id: '3',
                    name: 'red',
                    image: [
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
            ],
        },
        {
            id: '4',
            title: 'Slider 4 ',
            price: 100,
            color: [
                {
                    id: '1',
                    name: 'black',
                    image: [
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
            ],
        },
        {
            id: '5',
            title: 'Slider 5 ',
            price: 100,
            color: [
                {
                    id: '1',
                    name: 'black',
                    image: [
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
            ],
        },
    ],
};
const banner2 = {
    title: 'FALL/WINTER 2024 ESSENTIALS',
    description:
        'The Essential Hoodie and Sweatpant are getting a seasonal modification.',
    image: '/images/banners/banner2.jpg',
};

const data2 = {
    topic: 'BEST SELLER',
    cards: [
        {
            id: '1',
            title: 'Slider 1 ',

            color: [
                {
                    id: '1',
                    name: 'black',
                    image: [
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
                {
                    id: '2',
                    name: 'blue',
                    image: [
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
                {
                    id: '3',
                    name: 'red',
                    image: [
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
            ],
            price: 100,
        },
        {
            id: '2',
            title: 'Slider 2 ',
            price: 100,
            color: [
                {
                    id: '1',
                    name: 'black',
                    image: [
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
                {
                    id: '2',
                    name: 'blue',
                    image: [
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
                {
                    id: '3',
                    name: 'red',
                    image: [
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
            ],
        },
        {
            id: '3',
            title: 'Slider 3 ',
            price: 100,
            color: [
                {
                    id: '1',
                    name: 'black',
                    image: [
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
                {
                    id: '2',
                    name: 'blue',
                    image: [
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
                {
                    id: '3',
                    name: 'red',
                    image: [
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
            ],
        },
        {
            id: '4',
            title: 'Slider 4 ',
            price: 100,
            color: [
                {
                    id: '1',
                    name: 'black',
                    image: [
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
            ],
        },
        {
            id: '5',
            title: 'Slider 5 ',
            price: 100,
            color: [
                {
                    id: '1',
                    name: 'black',
                    image: [
                        '/images/products/born-of-purpose-tee-top-717201.webp',
                        '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
                    ],
                    sizes: [
                        { id: '1', size: 'S', stock: 10 },
                        { id: '2', size: 'M', stock: 10 },
                        { id: '3', size: 'L', stock: 10 },
                        { id: '4', size: 'XL', stock: 10 },
                        { id: '5', size: 'XXL', stock: 10 },
                    ],
                },
            ],
        },
    ],
};
const LayoutHome = () => {
    return (
        <>
            <Banner
                title={banner1?.title}
                description={banner1?.description}
                imageProps={banner1?.image}
            />

            <Sliders
                dataTopic={data?.topic}
                dataCards={data?.cards}
            />

            <Banner
                title={banner2?.title}
                description={banner2?.description}
                imageProps={banner2?.image}
            />

            <Sliders
                dataTopic={data2?.topic}
                dataCards={data2?.cards}
            />
        </>
    );
};

export default LayoutHome;
