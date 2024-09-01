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
            id: 1,
            title: 'Slider 1',
            image: [
                '/images/products/born-of-purpose-tee-top-717201.webp',
                '/images/products/born-of-purpose-tee-top-black-2xl-811696.webp',
            ],
            description: 'Slider 1',
            price: 100,
        },
        {
            id: 2,
            title: 'Slider 2',
            image: '/images/banners/slider2.jpg',
            description: 'Slider 2',
            price: 100,
        },
        {
            id: 3,
            title: 'Slider 3',
            image: '/images/banners/slider3.jpg',
            description: 'Slider 3',
            price: 100,
        },
        {
            id: 4,
            title: 'Slider 4',
            image: '/images/banners/slider4.jpg',
            description: 'Slider 4',
            price: 100,
        },
    ],
};
const banner2 = {
    title: 'FALL/WINTER 2024 ESSENTIALS',
    description:
        'The Essential Hoodie and Sweatpant are getting a seasonal modification.',
    image: '/images/banners/banner2.jpg',
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
                dataCards={data?.cards.map((card) => ({
                    ...card,
                    image: Array.isArray(card.image) ? card.image : [card.image],
                }))}
            />

            <Banner
                title={banner2?.title}
                description={banner2?.description}
                imageProps={banner2?.image}
            />

        </>
    );
};

export default LayoutHome;
