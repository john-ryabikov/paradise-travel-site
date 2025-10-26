"use client"

import { useEffect, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '@/hooks/MediaQuery/useMediaQuery';

import 'swiper/css';

interface Slide {
  id: string;
  image: string;
}

interface SwiperSliderProps {
  slides: Slide[];
  autoplayDelay?: number;
  typedClass?: string;
}

export default function AgentsSlider({ slides, autoplayDelay, typedClass }: SwiperSliderProps) {

    const swiperRef = useRef<SwiperType | null>(null)

    const isMobile = useMediaQuery("(max-width: 767px)") as boolean

    useEffect(() => {
        return () => {
            if (swiperRef.current) swiperRef.current.destroy(true, true)
        }
    }, [])

    return (
        <div className={`${typedClass}__agents-slider-layout`}>
            <Swiper
                onSwiper={(swiper) => {swiperRef.current = swiper}}
                slidesPerView={!isMobile ? 5 : 2}
                spaceBetween={!isMobile ? 100 : 68}
                autoplay={{
                    delay: autoplayDelay,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className={`${typedClass}__agents-slider`}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className={`${typedClass}__agents-slide`}>
                            <img src={slide.image} alt={`Slide ${slide.id}`} className={`${typedClass}__agents-slider-img`}/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
