"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Palette,
  Clock3,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Sparkles size={34} />,
      title: "Premium Quality",
      desc: "Carefully crafted fabrics with luxurious finishing and elegant texture.",
    },

    {
      icon: <Palette size={34} />,
      title: "Modern Dyeing",
      desc: "Advanced coloring techniques delivering rich and long-lasting colors.",
    },

    {
      icon: <ShieldCheck size={34} />,
      title: "Trusted Expertise",
      desc: "Years of experience in textile processing with professional precision.",
    },

    {
      icon: <Clock3 size={34} />,
      title: "Fast Production",
      desc: "Efficient workflow and timely delivery without compromising quality.",
    },
  ];

  return (
    <section className="relative py-28 px-6 md:px-16 bg-[#0d0b09] overflow-hidden text-white">

      {/* Glow Effects */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#e0bc80] opacity-10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#b2895d] opacity-10 blur-3xl rounded-full"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-20"
      >

        <p className="text-[#e0bc80] tracking-[5px] text-xs mb-4">
          WHY CHOOSE US
        </p>

        <h2 className="text-4xl md:text-6xl font-bold font-playfair leading-tight">
          Excellence In Every
          <span className="text-[#e0bc80]"> Fabric</span>
        </h2>

        <p className="text-gray-400 mt-6 leading-relaxed">
          Sundus Factory combines innovation, precision, and premium
          craftsmanship to deliver exceptional textile dyeing solutions.
        </p>

      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              boxShadow: "0px 20px 40px rgba(224,188,128,0.15)",
            }}
            className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#e0bc80]/10 to-transparent"></div>

            {/* Icon */}
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#e0bc80]/10 border border-[#e0bc80]/20 flex items-center justify-center text-[#e0bc80] mb-6">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-2xl font-bold font-playfair mb-4">
              {item.title}
            </h3>

            {/* Desc */}
            <p className="relative z-10 text-gray-400 leading-relaxed">
              {item.desc}
            </p>

            {/* Number */}
            <span className="absolute top-6 right-6 text-5xl font-bold text-white/5">
              0{i + 1}
            </span>

          </motion.div>
        ))}

      </div>
    </section>
  );
}