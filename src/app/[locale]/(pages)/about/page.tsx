"use client";

import React from "react";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

export default function AboutPage() {
  return (
    <div className="bg-(--background) text-white overflow-hidden">

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "About", href: "/about" },
        ]}
      />



      {/* STORY SECTION */}
      <section className="px-6 md:px-16 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <img
              src="/about1.jpg"
              alt="Fatin Tex"
              className="rounded-[30px] w-full h-[450px] object-cover border border-white/10 shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 w-[200px] h-[200px] bg-[#e0bc80] blur-3xl opacity-20 rounded-full"></div>

          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-[#e0bc80] tracking-[6px] text-xs mb-3">
              OUR STORY
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-playfair">
              Excellence Woven Into Every Fabric
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Fatin Tex has built a reputation for delivering premium fabrics
              that combine sophistication, durability, and modern textile trends.
              Our collections are carefully selected to meet the needs of
              designers, brands, and luxury projects.
            </p>

            <p className="text-gray-300 leading-relaxed">
              We believe fabrics are more than materials — they are the foundation
              of creativity, elegance, and timeless fashion experiences.
            </p>

          </motion.div>

        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-16 py-20">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {[
            { num: "15+", label: "Years Experience" },
            { num: "1000+", label: "Fabric Collections" },
            { num: "98%", label: "Client Satisfaction" },
            { num: "40+", label: "Fashion Partners" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 text-center border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl"
            >

              <h3 className="text-[#e0bc80] text-3xl font-bold">
                {item.num}
              </h3>

              <p className="text-gray-300 mt-2 text-sm">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-6 md:px-16 py-20 relative overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#e0bc80] opacity-10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#b2895d] opacity-10 blur-3xl rounded-full"></div>

        <div className="max-w-6xl mx-auto space-y-14 relative z-10">

          {[
            {
              title: "OUR MISSION",
              desc: "To provide premium quality fabrics that inspire creativity, elegance, and innovation for designers and fashion brands worldwide.",
              img: "/hero1.jpg",
            },
            {
              title: "OUR VISION",
              desc: "To become a leading name in luxury textiles by redefining fabric excellence through quality, style, and modern design trends.",
              img: "/hero2.jpg",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center
              border border-white/10
              bg-white/5 backdrop-blur-xl
              rounded-[40px] overflow-hidden
              p-6 md:p-8"
            >

              {/* IMAGE */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative overflow-hidden rounded-[30px] h-[350px]
                ${i % 2 !== 0 ? "lg:order-2" : ""}
                `}
              >

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/20"></div>

                {/* Floating Label */}
                <div className="absolute top-5 left-5 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">

                  <p className="text-[#e0bc80] text-xs tracking-[3px]">
                    FATIN TEX
                  </p>

                </div>

              </motion.div>

              {/* CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >

                <p className="text-[#e0bc80] tracking-[6px] text-xs mb-4">
                  LUXURY FABRICS
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-playfair mb-6">
                  {item.title}
                </h2>

                <div className="w-24 h-[2px] bg-[#e0bc80] mb-6"></div>

                <p className="text-gray-300 leading-relaxed text-lg">
                  {item.desc}
                </p>

                {/* Button */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 25px rgba(224,188,128,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 border border-[#e0bc80]
                  text-[#e0bc80]
                  px-6 py-3 rounded-full
                  hover:bg-[#e0bc80]
                  hover:text-black
                  transition duration-300"
                >
                  Learn More
                </motion.button>

              </motion.div>

            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
}