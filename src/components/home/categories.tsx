"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { localizePath } from "@/lib/utils";

import "swiper/css";

export default function Categories() {
  const tabs = [
    {
      name: "Cotton",
      items: [
        { name: "Soft Cotton", desc: "Breathable fabric", img: "/product1.jpg" },
        { name: "Pure Cotton", desc: "Natural comfort", img: "/product2.jpg" },
        { name: "Cotton Blend", desc: "Durable & soft", img: "/product3.jpg" },
        { name: "Warm Wool", desc: "Winter essential", img: "/product4.jpg" },
      ],
    },
    {
      name: "Silk",
      items: [
        { name: "Royal Silk", desc: "Luxury shine", img: "/product2.jpg" },
        { name: "Smooth Silk", desc: "Elegant texture", img: "/product3.jpg" },
      ],
    },
    {
      name: "Linen",
      items: [
        { name: "Natural Linen", desc: "Light & airy", img: "/product3.jpg" },
      ],
    },
    {
      name: "Wool",
      items: [
        { name: "Warm Wool", desc: "Winter essential", img: "/product4.jpg" },
        { name: "Soft Wool", desc: "Cozy feel", img: "/product1.jpg" },
        { name: "Premium Wool", desc: "High durability", img: "/product2.jpg" },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : undefined;

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-16 bg-[#0d0b09] text-white overflow-hidden">

      {/* TOP LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#e0bc80]/40 to-transparent" />

      {/* LIGHT EFFECT */}
      <div className="absolute top-0 right-0 w-[35%] h-full bg-gradient-to-l from-[#e0bc80]/10 to-transparent pointer-events-none" />

      {/* HEADER */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0px" }}
          whileInView={{ opacity: 1, letterSpacing: "4px" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[#e0bc80] uppercase text-xs sm:text-sm mb-4"
        >
          Our Collections
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-6xl font-bold"
        >
          Fabric <span className="text-[#e0bc80]">Categories</span>
        </motion.h2>
      </div>

      {/* TABS */}
      <div className="flex justify-center gap-3 flex-wrap mb-12">
        {tabs.map((tab, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveTab(i)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2.5 rounded-full border text-sm sm:text-base transition-all duration-300 ${
              activeTab === i
                ? "bg-[#e0bc80] text-black border-[#e0bc80] shadow-[0_10px_30px_rgba(224,188,128,0.25)]"
                : "border-white/10 bg-white/[0.03] hover:border-[#e0bc80]/40"
            }`}
          >
            {tab.name}
          </motion.button>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.7 }}
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop
              spaceBetween={24}
              breakpoints={{
                0: { slidesPerView: 1.1 },
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
            >
              {tabs[activeTab].items.map((item, i) => (
                <SwiperSlide key={i}>
                  <Link
                      href={localizePath(`/products/${item.name.toLowerCase().replace(/\s/g, "-")}`, locale)}
                      className="block"
                    >
                    {/* 💎 LUXURY CARD */}
                    <motion.div
                      whileHover={{ y: -14, rotateX: 4, rotateY: -4 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="group relative h-[420px] rounded-[34px] overflow-hidden"
                    >
                      {/* Gradient Border */}
                      <div className="absolute inset-0 rounded-[34px] p-[1px] bg-gradient-to-br from-[#e0bc80]/40 via-transparent to-[#ffffff10]">
                        <div className="w-full h-full rounded-[34px] bg-black/40 backdrop-blur-2xl" />
                      </div>

                      {/* IMAGE */}
                      <div className="absolute inset-0 overflow-hidden rounded-[34px]">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />

                        {/* DARK GRADIENT */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                        {/* SHINE */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top_right,rgba(224,188,128,0.25),transparent_60%)]" />
                      </div>

                      {/* NUMBER */}
                      <div className="absolute top-5 right-5 text-white/20 text-5xl font-bold">
                        0{i + 1}
                      </div>

{/* CONTENT */}
<div className="absolute bottom-0 left-0 w-full p-6 sm:p-7 z-10">

  {/* TITLE */}
  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#e0bc80] transition">
    {item.name}
  </h3>

  {/* DESC */}
  <p className="text-gray-300 text-sm sm:text-base mb-6 leading-7 max-w-[90%]">
    {item.desc}
  </p>

  {/* EXPLORE MORE (يظهر عند hover على الكارت كله) */}
  <div className="
    flex items-center gap-3
    text-[#e0bc80] font-medium

    opacity-0
    translate-y-4

    group-hover:opacity-100
    group-hover:translate-y-0

    transition-all duration-500
  ">
    <span className="relative">
      Explore More
      <span className="
        absolute left-0 -bottom-1
        w-0 group-hover:w-full
        h-[1px]
        bg-[#e0bc80]
        transition-all duration-500
      " />
    </span>

    <div className="
      w-11 h-11 rounded-full
      bg-gradient-to-br from-[#e0bc80] to-[#f5e6a8]
      flex items-center justify-center
      text-black
      shadow-[0_10px_30px_rgba(224,188,128,0.3)]
    ">
      <ArrowRight size={18} />
    </div>
  </div>

</div>

                      {/* HOVER GLOW */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#e0bc80]/10 to-transparent" />
                    </motion.div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* VIEW ALL BUTTON */}
      <div className="flex justify-center mt-14 sm:mt-16">
                  <Link href={localizePath(`/products`, locale)}>
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        y: -3,
                        boxShadow: "0px 15px 40px rgba(224,188,128,0.35)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="relative overflow-hidden bg-[#e0bc80] text-black px-10 py-4 rounded-full font-semibold shadow-xl inline-block text-center"
                    >
                      View All Products

                      {/* SHINE EFFECT */}
                      <motion.span
                        initial={{ x: "-120%" }}
                        whileHover={{ x: "120%" }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 bg-white/30 skew-x-12"
                      />
                    </motion.div>
                  </Link>
      </div>
    </section>
  );
}