"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import Breadcrumb from "@/components/Breadcrumb";

export default function ContactPage() {
  return (
    <div className="bg-[#0d0b09] text-white overflow-hidden">

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Contact", href: "/contact" }]} />


{/* CONTACT INFO CARDS */}
<section className="px-6 md:px-16 pb-24 mt-24">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {[
      {
        icon: <HiOutlinePhone />,
        title: "Phone",
        desc: "+20 111 222 3333",
      },
      {
        icon: <HiOutlineEnvelope />,
        title: "Email",
        desc: "info@fatintx.com",
      },
      {
        icon: <HiOutlineMapPin />,
        title: "Location",
        desc: "Industrial City, Egypt",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          y: -8,
          boxShadow: "0px 0px 25px rgba(224,188,128,0.15)",
        }}
        transition={{ duration: 0.4 }}
        className="
          relative p-8 rounded-3xl
          bg-white/5 dark:bg-white/5
          border border-white/10
          backdrop-blur-2xl
          text-center
          overflow-hidden
        "
      >

        {/* Glow background */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-tr from-[#e0bc80]/10 to-transparent" />

        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 rounded-full bg-[#e0bc80]/10 flex items-center justify-center text-[#e0bc80] text-2xl">
            {item.icon}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2">{item.title}</h3>

        <p className="text-gray-400">{item.desc}</p>

      </motion.div>
    ))}

  </div>
</section>
{/* CONTACT FORM */}
<section className="px-6 md:px-16 pb-32">

  <div className="max-w-4xl mx-auto">

    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold font-playfair">
        Send Us a Message
      </h2>
      <p className="text-gray-400 mt-4">
        We usually respond within 24 hours
      </p>
    </div>

    <form className="
      bg-white/5 border border-white/10
      backdrop-blur-2xl
      rounded-[30px]
      p-10
      grid grid-cols-1 md:grid-cols-2 gap-6
    ">

      <input
        type="text"
        placeholder="Your Name"
        className="
          p-4 rounded-xl
          bg-black/30
          border border-white/10
          outline-none
          focus:border-[#e0bc80]
          focus:ring-2 focus:ring-[#e0bc80]/20
          transition
        "
      />

      <input
        type="email"
        placeholder="Your Email"
        className="
          p-4 rounded-xl
          bg-black/30
          border border-white/10
          outline-none
          focus:border-[#e0bc80]
          focus:ring-2 focus:ring-[#e0bc80]/20
          transition
        "
      />

      <input
        type="text"
        placeholder="Subject"
        className="md:col-span-2 p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-[#e0bc80] transition"
      />

      <textarea
        placeholder="Your Message"
        rows={6}
        className="md:col-span-2 p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-[#e0bc80] transition"
      />

      <button
        type="submit"
        className="
          md:col-span-2
          bg-[#e0bc80]
          text-black
          py-4 rounded-xl
          font-medium
          hover:scale-[1.02]
          transition
          shadow-lg shadow-[#e0bc80]/20
        "
      >
        Send Message
      </button>

    </form>

  </div>
</section>

<section className="w-full h-[70vh] relative overflow-hidden">

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18..."
    className="w-full h-full"
    loading="lazy"
  />

  {/* Overlay dark cinematic */}
  <div className="absolute inset-0 bg-black/30 pointer-events-none" />

</section>
    </div>
  );
}