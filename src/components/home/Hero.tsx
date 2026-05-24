"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  {
    image: "/hero1.jpg",
    title: "Premium Textile Solutions",
    desc: "High-quality fabrics and dyeing services with modern industrial standards.",
  },

  {
    image: "/hero2.jpg",
    title: "Modern Fabric Production",
    desc: "Innovative textile manufacturing for local and global markets.",
  },

  {
    image: "/hero3.jpg",
    title: "Trusted Industrial Experience",
    desc: "Years of expertise in textile and dyeing industries.",
  },
];

export default function Hero() {
return (
  <section>

    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
    >

      {slides.map((slide, index) => (
        <SwiperSlide key={index}>

          <div
            className="h-screen bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >

            {/* Luxury Overlay */}
            <div className="absolute inset-0 bg-[color:var(--overlay-color)]"></div>

            {/* Content */}
           <div className="relative z-10 h-full flex items-center justify-start px-10 md:px-20">

              <div className="max-w-7xl mx-auto px-5">

                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-bold max-w-3xl leading-tight text-[var(--heading-color)]">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="mt-6 text-lg md:text-xl max-w-2xl text-[var(--paragraph-color)] leading-8">
                  {slide.desc}
                </p>

                {/* Button */}
<button className="mt-8 px-8 py-4 rounded-lg text-lg font-medium text-black 
bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]
bg-[length:200%_200%] animate-gradient-x 
hover:scale-105 transition-transform duration-300">
  Explore More
</button>

              </div>

            </div>

          </div>

        </SwiperSlide>
      ))}

    </Swiper>

  </section>
);
}