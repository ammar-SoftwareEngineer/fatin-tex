"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";

export default function Categories() {
  const categories = [
    {
      name: "Cotton",
      desc: "Soft & breathable fabrics",
      img: "/product1.jpg",
    },
    {
      name: "Silk",
      desc: "Luxury smooth textures",
      img: "/product2.jpg",
    },
    {
      name: "Linen",
      desc: "Natural elegant feel",
      img: "/product3.jpg",
    },
    {
      name: "Wool",
      desc: "Warm premium quality",
      img: "/product4.jpg",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-28 px-6 md:px-16 bg-[#0b0f19] text-white overflow-hidden"
    >

      {/* Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] bg-[#e0bc80] blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-[-150px] right-[-150px] w-[550px] h-[550px] bg-[#b2895d] blur-3xl rounded-full"
      ></motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-[#e0bc80] tracking-[4px] text-xs mb-3">
          OUR COLLECTIONS
        </p>
        <h2 className="text-4xl md:text-5xl font-bold font-playfair">
          Fabric Categories
        </h2>
      </motion.div>

      {/* Swiper */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {categories.map((cat, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0px 20px 40px rgba(224,188,128,0.25)",
                }}
                className="relative h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
              >
                <img
                  src={cat.img}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-[#e0bc80]/20 to-[#b2895d]/20"></div>

                <div className="absolute bottom-0 p-6 z-10">
                  <h3 className="text-[#e0bc80] text-xl font-bold font-playfair">
                    {cat.name}
                  </h3>
                  <p className="text-gray-200 text-sm font-inter">
                    {cat.desc}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center mt-14"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(224,188,128,0.4)",
            backgroundColor: "#e0bc80",
            color: "#000",
          }}
          whileTap={{ scale: 0.95 }}
          className="border border-[#e0bc80] text-[#e0bc80] px-6 py-3 rounded-full font-medium transition"
        >
          Show More
        </motion.button>
      </motion.div>

    </motion.section>
  );
}