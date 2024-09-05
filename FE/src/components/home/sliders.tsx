'use client';
import React from 'react';
import Cards from './cards';
import useEmblaCarousel from 'embla-carousel-react';
import styles from '@/styles/slider.module.css';
interface SlidersProps {
    dataTopic: string;
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
    }[];
}

const Sliders = ({ dataTopic, dataCards }: SlidersProps) => {
    const [emblaRef] = useEmblaCarousel({ loop: true, slidesToScroll: 'auto' });
    return (
        <main className='px-[3.8rem] py-[2rem]'>
            <h1 className='text-4xl mb-10 '>{dataTopic?.toUpperCase()}</h1>
            <div
                className={styles.embla}
                ref={emblaRef}>
                <div className={styles.embla__container}>
                    {dataCards.map((card) => (
                        <div
                            key={card.id}
                            className={`${styles.embla__slide} lg:max-w-[25%] md:max-w-[25%] sm:max-w-[50%] `}>
                            <Cards dataCards={card} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Sliders;
