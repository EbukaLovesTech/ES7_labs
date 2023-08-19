'use client';
import { register } from 'swiper/element/bundle';
import { useEffect, useRef } from 'react';
import { testimonials } from './testimonials';
import Image from 'next/image';

export default function Carousel() {
    const swiperRef = useRef(null);

    useEffect(() => {
        register();
        const params = {
            navigation: true,
            pagination: {
                clickable: true
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        }
        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, []);
    return (
        <div>
            <swiper-container init="false" ref={swiperRef}>
                {testimonials.map((card, index) => (
                    <swiper-slide key={index}>
                        <div>
                            <div className='author_image'>
                                <Image
                                    src={card.src}
                                    alt={card.src}
                                    width={200}
                                    height={200}
                                    priority
                                />
                            </div>
                            <div className='about_author'>
                                <span>{card.name}</span>
                                <span>{card.profession}</span>
                            </div>
                            <div className='author_message'>
                                <p>{card.testimonial}</p>
                            </div>
                        </div>
                    </swiper-slide>
                ))}
            </swiper-container>
        </div>
    )
}