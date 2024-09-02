'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/card.module.css';
import { IoIosAddCircleOutline } from 'react-icons/io';
interface CardsProps {
    dataCards: {
        id: string;
        title: string;
        color: {
            id: string;
            name: string;
            image: string[];
            sizes: {
                id: string;
                size: string;
                stock: number;
            }[];
        }[];
        price: number;
    };
}
const Cards = React.memo(({ dataCards }: CardsProps) => {
    const [colorChanged, setColorChanged] = useState(dataCards.color[0] || null);
    const [imageHover, setImageHover] = useState(0);
    const hdlChangeColor = (color: any) => {
        setColorChanged(color);
    };
    const hdlHoverChangeImage = () => {
        setImageHover(imageHover + 1);
    };
    const hdlHoverLeaveImage = () => {
        setImageHover(0);
    };
    return (
        <div className={` flex flex-col p-3 ${styles.card}`}>
            <picture
                className=' cursor-pointer relative'
                onMouseEnter={hdlHoverChangeImage}
                onMouseLeave={hdlHoverLeaveImage}>
                <Image
                    src={colorChanged?.image[imageHover]}
                    alt={dataCards.title}
                    layout='responsive'
                    width={300}
                    height={300}
                    className={`w-full h-full object-cover`}
                />

                {imageHover !== 0 && (
                    <div className='absolute bottom-[5%] left-1/2 transform -translate-x-1/2 z-50   w-[90%] bg-[#C5C5C5] opacity-100'>
                        <div className='flex justify-center items-center gap-1'>
                            <IoIosAddCircleOutline />
                            <h3 className='text-sm text-center my-2'>Quick Add</h3>
                        </div>
                        <div className='p-2 flex flex-wrap justify-center items-center gap-2'>
                            {colorChanged?.sizes.map((size) => (
                                <span
                                    key={size.id}
                                    className={`text-sm py-2 px-3 bg-slate-100 cursor-pointer ${styles.size
                                        } ${size.stock === 0
                                            ? 'opacity-50 cursor-not-allowed text-red-600 line-through'
                                            : ''
                                        }`}>
                                    {size.size}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </picture>

            <div className='flex flex-col mt-4'>
                <h1 className='text-sm '>{dataCards?.title}</h1>
                <div className='flex gap-2 flex-wrap my-3'>
                    {dataCards.color.map((color) => (
                        <div
                            key={color.id}
                            onClick={() => hdlChangeColor(color)}
                            className={`w-6 h-6 rounded-full cursor-pointer ${colorChanged?.id === color.id && 'border-2 border-gray-300'
                                }`}
                            style={{ backgroundColor: color.name }}></div>
                    ))}
                </div>

                <p className='text-sm text-gray-500'>{dataCards.price}</p>
            </div>
        </div>
    );
});
Cards.displayName = 'Cards';
export default React.memo(Cards);
