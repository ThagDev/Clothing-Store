import React from 'react'
import Cards from './cards';
interface SlidersProps {
    dataTopic: string;
    dataCards: {
        id: number;
        title: string;
        image: string[];
        description: string;
        price: number;
    }[];
}

const Sliders = ({ dataTopic, dataCards }: SlidersProps) => {
    return (
        <main className='px-[3.8rem] py-[2rem]'>
            <h1 className='text-4xl mb-10 '>{dataTopic}</h1>
            <div className="grid grid-cols-4 place-items-center ">

                {dataCards.map((card) => (
                    <>
                        <Cards dataCards={card} />
                    </>

                ))}
            </div>
        </main>
    )
}

export default Sliders