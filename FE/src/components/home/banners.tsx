'use client';

import { useEffect, useRef } from 'react';
interface BannerProps {
    title: string;
    description: string;
    imageProps: string;
}
export default function Banner({
    title,
    description,
    imageProps,
}: BannerProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        const image = new Image();
        image.src = imageProps;
        image.onload = () => {
            if (canvas && context) {
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0, canvas.width, canvas.height);
            }
        };
        // Prevent right-click context menu on canvas
        const handleContextMenu = (event: MouseEvent) => {
            event.preventDefault();
        };

        canvas?.addEventListener('contextmenu', handleContextMenu);

        // Cleanup event listener on component unmount
        return () => {
            canvas?.removeEventListener('contextmenu', handleContextMenu);
        };
    }, [canvasRef]); // Thêm canvasRef vào dependency array
    return (
        <main>
            <picture className='relative z-0'>
                <canvas
                    ref={canvasRef}
                    className='h-full  w-full object-cover'></canvas>
                <div className='absolute left-[50%] translate-x-[-50%] bottom-[10%] grid place-items-center gap-4'>
                    <h2 className='text-white text-xl font-bold text-center'>{title}</h2>
                    <p className=' text-white text-center'>{description}</p>
                    <button className=' bg-white py-2 px-4 font-bold '>
                        Shop Now
                    </button>
                </div>
            </picture>
        </main>
    );
}
