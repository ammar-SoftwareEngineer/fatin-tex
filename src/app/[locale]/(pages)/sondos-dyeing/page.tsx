"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { localizePath } from "@/lib/utils";
import VideoSection from "@/components/home/VideoSection";

export default function SondosDyeingPage() {
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : undefined;
  return (
    <div className="bg-(--background) text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-16">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/sondos.png')" }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/70" />

        {/* Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#e0bc80] blur-3xl opacity-10 rounded-full" />

        <div className="relative z-10 max-w-5xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#e0bc80] tracking-[6px] text-xs mb-4"
          >
            SONDOS DYEING FACTORY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-playfair leading-tight"
          >
            Precision Dyeing for{" "}
            <span className="text-[#e0bc80]">Luxury Fabrics</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-300 mt-6 max-w-2xl leading-relaxed"
          >
            At Sondos Dyeing, we transform raw textiles into premium masterpieces.
            Our advanced dyeing systems ensure unmatched color depth, consistency,
            and durability — crafted for global fashion houses and luxury brands.
          </motion.p>

          <Link href={localizePath(`/contact`, locale)}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-8 px-6 py-3 rounded-full bg-[#e0bc80] text-black font-medium inline-block text-center"
            >
              Explore Our Process
            </motion.div>
          </Link>

        </div>
      </section>

      {/* CONTENT + VIDEO */}
      <section className="px-6 md:px-16 py-24">

        <div className="max-w-4xl mx-auto text-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#e0bc80] tracking-[6px] text-xs mb-4"
          >
            LUXURY TEXTILE ENGINEERING
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-playfair"
          >
            Where Color Meets Precision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-300 mt-6 leading-relaxed"
          >
            Sondos Dyeing Factory specializes in high-precision textile dyeing,
            combining German technology, eco-friendly processes, and strict quality control.
            Every fabric passes through advanced finishing stages to ensure luxury-grade results
            suitable for international fashion standards.
          </motion.p>

        </div>

{/* VIDEO SECTION - FULL WIDTH */}
<section className="w-full mt-20">

  <div className="relative w-full overflow-hidden border-y border-white/10">

    <div className="w-full h-[500px] md:h-[650px] relative">

      <VideoSection />

      {/* Overlay cinematic */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/40" />

    </div>

  </div>

</section>

      </section>
    </div>
  );
}