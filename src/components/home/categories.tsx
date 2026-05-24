"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

import "swiper/css";

export default function Categories() {
  const router = useRouter();

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

  return (
    <section className="relative py-28 px-6 md:px-16 bg-[#0d0b09] text-white overflow-hidden">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[#e0bc80] tracking-[4px] text-xs mb-3">
          OUR COLLECTIONS
        </p>
        <h2 className="text-4xl md:text-5xl font-bold font-playfair">
          Fabric Categories
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-5 py-2 rounded-full border transition text-sm
              ${
                activeTab === i
                  ? "bg-[#e0bc80] text-black border-[#e0bc80]"
                  : "border-white/20 text-white hover:border-[#e0bc80]"
              }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Swiper */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
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
              {tabs[activeTab].items.map((item, i) => (
                <SwiperSlide key={i}>
                  <div
                    onClick={() =>
                      router.push(`/products/${item.name.toLowerCase().replace(/\s/g, "-")}`)
                    }
                    className="relative h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
                  >
                    {/* Image */}
                    <img
                      src={item.img}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      alt=""
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/30"></div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 p-6 z-10">
                      <h3 className="text-[#e0bc80] text-xl font-bold font-playfair">
                        {item.name}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {item.desc}
                      </p>
                    </div>
{/* Hover Arrow Bottom Right */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">

  <motion.div
    whileHover={{ scale: 1.1 }}
    onClick={() =>
      router.push(
        `/products/${item.name.toLowerCase().replace(/\s/g, "-")}`
      )
    }
    className="absolute bottom-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-[#e0bc80] text-black shadow-lg cursor-pointer"
  >
    <ArrowRight size={18} />
  </motion.div>

</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] bg-[#e0bc80] blur-3xl rounded-full opacity-10"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[550px] h-[550px] bg-[#b2895d] blur-3xl rounded-full opacity-10"></div>

    </section>
  );
}