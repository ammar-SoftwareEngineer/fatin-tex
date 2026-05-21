"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-32 px-6 md:px-16 bg-[#0b0f19] text-white overflow-hidden">

      {/* Background Glow (NOT blur glass elements, just soft light) */}
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-[#e0bc80] opacity-10 rounded-full" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] bg-[#b2895d] opacity-10 rounded-full" />

      <div className="max-w-6xl mx-auto relative">

        {/* BACK TEXT */}
        <h1 className="absolute top-[-40px] left-0 text-[120px] font-bold text-white/5 tracking-widest">
          ABOUT
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">

{/* Main Image */}
<div className="w-[90%] rounded-3xl overflow-hidden shadow-2xl">
  <img
    src="about1.jpg"
    className="w-full h-auto object-cover"
  />
</div>

            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-10"
          >

            <p className="text-[#e0bc80] tracking-[5px] text-xs mb-4">
              ABOUT FATIN TAX
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              We Don’t Just Make Fabric — We Design Texture
            </h2>

            {/* NEW DESCRIPTION */}
            <p className="text-gray-400 leading-relaxed mb-8">
              At Fatin Tax, we transform fabric into a refined design language.
              Every material is carefully selected and processed to deliver
              unmatched softness, durability, and a premium visual identity
              for modern fashion creators.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mb-10">

              {[
                { num: "10+", label: "Years" },
                { num: "500+", label: "Designs" },
                { num: "100%", label: "Quality" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="text-center"
                >
                  <p className="text-[#e0bc80] text-2xl font-bold">
                    {item.num}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {item.label}
                  </p>
                </motion.div>
              ))}

            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(224,188,128,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#e0bc80] text-black px-7 py-3 rounded-full font-medium"
            >
              Explore More
            </motion.button>

          </motion.div>

        </div>
      </div>
    </section>
  );
}