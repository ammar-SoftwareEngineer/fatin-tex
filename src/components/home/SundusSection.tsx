"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SundusSection() {
  return (
    <section className="relative min-h-screen bg-[#0d0b09] overflow-hidden">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-cover bg-center"
      />


      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center px-6 md:px-16">

        <div className="relative w-full max-w-7xl mx-auto">

          {/* VIDEO BIG FOCUS */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/10"
          >
            <video
              src="/vedio.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[500px] md:h-[650px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
          </motion.div>

          {/* FLOATING GLASS CARD */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 max-w-md"
          >
<div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] p-10 shadow-2xl overflow-hidden">

  {/* Accent Line */}
  <div className="absolute left-0 top-0 h-full w-[2px] bg-[#e0bc80]"></div>

 {/* Logo */}
<div className="mb-6">
  <img
    src="/sondos.png"
    alt="Sundus Logo"
    className="h-24 md:h-26 w-auto object-contain drop-shadow-[0_0_20px_rgba(224,188,128,0.4)]"
  />
</div>
  {/* Title (Creative Layout) */}
  <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] font-playfair">
    Where Fabrics <br />
    Become <span className="text-[#e0bc80]">Art</span>
  </h2>

  {/* Decorative underline */}
  <div className="flex items-center gap-3 my-6">
    <div className="w-12 h-[2px] bg-[#e0bc80]"></div>
    <div className="w-2 h-2 bg-[#e0bc80] rounded-full"></div>
  </div>

  {/* Description */}
  <p className="text-gray-300 text-base leading-relaxed max-w-md">
    Premium textile dyeing and finishing crafted with innovation,
    precision, and luxury craftsmanship that defines modern fabrics.
  </p>

  {/* CTA Row */}
  <div className="mt-10 flex items-center gap-6">

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

    {/* Small Arrow Button */}
    <div className="w-10 h-10 flex items-center justify-center border border-[#e0bc80] text-[#e0bc80] rounded-full cursor-pointer hover:bg-[#e0bc80] hover:text-black transition">
      →
    </div>

  </div>

  {/* Glow corner */}
  <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] bg-[#e0bc80] blur-3xl opacity-10 rounded-full"></div>

</div>
          </motion.div>

          {/* SMALL FLOAT TEXT RIGHT */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.2 }}
            transition={{ duration: 1 }}
            className="absolute right-6 bottom-10 hidden md:block"
          >
            <h1 className="text-[120px] font-bold tracking-[20px] text-white">
              SUNDUS
            </h1>
          </motion.div>

        </div>
      </div>
    </section>
  );
}