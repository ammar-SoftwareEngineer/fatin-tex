"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SundusSection() {
  return (
    <section className="relative h-[100vh] overflow-hidden bg-[#0b0f19]">

      {/* Background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/sondos.png')",
        }}
      ></motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Golden Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-black/40 to-transparent"></div>

      {/* Floating Glow */}
      <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-[#e0bc80] opacity-10 blur-3xl rounded-full"></div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="absolute left-[5%] top-1/2 -translate-y-1/2 max-w-xl z-10"
      >

        {/* Glass Box */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] p-10 shadow-2xl">

          {/* Small Title */}
          <p className="text-[#e0bc80] tracking-[6px] text-xs mb-5">
            SUNDUS FACTORY
          </p>

          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl font-bold font-playfair leading-tight text-white">
            Coloring The Future Of
            <span className="text-[#e0bc80]"> Fabrics</span>
          </h2>

          {/* Line */}
          <div className="w-24 h-[2px] bg-[#e0bc80] my-7"></div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-lg">
            Premium dyeing and textile finishing solutions crafted
            with innovation, precision, and luxury quality.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">

 <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(224,188,128,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#e0bc80] text-black px-6 py-3 rounded-full font-medium"
            >
              Explore Collection
            </motion.button>

          </div>
        </div>
      </motion.div>

      {/* Decorative Vertical Text */}
      {/* <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute right-[-40px] top-1/2 -translate-y-1/2 rotate-90 z-10"
      >
        <h1 className="text-[120px] font-bold tracking-[20px] text-white whitespace-nowrap">
          SUNDUS
        </h1>
      </motion.div> */}

    </section>
  );
}