"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


export default function BannerSlider() {
  return (
    <div className="mt-5">
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full h-48 md:h-64 rounded-xl mb-4"
    >
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?q=100&w=1200&auto=format&fit=crop" sizes="50"  className="w-full h-full object-cover rounded-xl" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?q=100&w=1200&auto=format&fit=crop" sizes="50"  className="w-full h-full object-cover rounded-xl" />
      </SwiperSlide>
    </Swiper>
    </div>
  );
}