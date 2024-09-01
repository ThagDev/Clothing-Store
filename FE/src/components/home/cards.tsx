import React from 'react';
import Image from 'next/image';
interface CardsProps {
    dataCards: {
        id: number;
        title: string;
        image: string[];
        description: string;
        price: number;
    };
}
const Cards = ({ dataCards }: CardsProps) => {
    console.log('dataCards', dataCards.image);
    return (
        <div className='flex flex-col p-3'>
            <picture className=' cursor-pointer'>
                <Image src={dataCards.image[0]} alt={dataCards.title} layout='responsive' width={500} height={500} className='w-full h-full object-cover' />
            </picture>

            <div className='flex flex-col'>
                <h1 className='text-2xl font-bold'>{dataCards.title}</h1>
                <p className='text-sm text-gray-500'>{dataCards.description}</p>
                <p className='text-sm text-gray-500'>{dataCards.price}</p>
            </div>
        </div>
    );
};

export default Cards;
