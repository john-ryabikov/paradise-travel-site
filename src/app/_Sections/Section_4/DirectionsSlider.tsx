"use client"

import { useEffect, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ButtonPopup from '@/app/_UI/ButtonPopup/ButtonPopup';

import 'swiper/css';

interface Slide {
  id: string,
  country: string,
  towns?: string,
  price: string,
  bg: string
}

interface SwiperSliderProps {
  slides: Slide[],
  autoplayDelay?: number,
  typedClass?: string,
}

export default function DirectionsSlider({ slides, autoplayDelay, typedClass }: SwiperSliderProps) {

    const swiperRef = useRef<SwiperType | null>(null)

    useEffect(() => {
        return () => {
            if (swiperRef.current) swiperRef.current.destroy(true, true)
        }
    }, [])

    return (
        <div className={`${typedClass}__direct-slider-layout`}>
            <Swiper
                onSwiper={(swiper) => {swiperRef.current = swiper}}
                slidesPerView={"auto"}
                centeredSlides={true}
                initialSlide={2}
                spaceBetween={80}
                autoplay={{
                    delay: autoplayDelay,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className={`${typedClass}__direct-slider`}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className={`${typedClass}__direct-slide`}>
                        <div className={`${typedClass}__direct-slide-card`} id={slide.bg}>
                            <p className={`${typedClass}__direct-slide-text`}>
                                <span className={`${typedClass}__direct-slide-country`}>{slide.country}</span>
                                {slide.towns && (<span className={`${typedClass}__direct-slide-towns`}>{slide.towns}</span>)}
                                <span className={`${typedClass}__direct-slide-price`}>{slide.price}</span>
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <ButtonPopup typedClass="button-popup" cont="Подобрать тур" second={true}/>
        </div>
    )
}
