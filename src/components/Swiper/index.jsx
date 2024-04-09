import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const SwiperCorusel = () => {
    return (
        <>
            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                pagination={{
                    dynamicBullets: true,
                }}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://images.unsplash.com/photo-1609521233053-345bfa8b6f17?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-[200px] h-[200px] object-cover" /></SwiperSlide>
                <SwiperSlide><img src="https://images.unsplash.com/photo-1609521233053-345bfa8b6f17?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-[200px] h-[200px] object-cover" /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default SwiperCorusel