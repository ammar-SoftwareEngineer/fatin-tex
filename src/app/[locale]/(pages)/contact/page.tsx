"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";
import Breadcrumb from "@/components/Breadcrumb";

export default function ContactPage() {
  return (
    <div className="bg-[#0d0b09] text-white overflow-hidden">

      <Breadcrumb items={[{ label: "Contact", href: "/contact" }]} />

      {/* CONTACT INFO */}
      <section className="px-4 sm:px-6 md:px-16 py-20 sm:py-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              className="
                relative
                p-8
                rounded-[28px]
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                text-center
                overflow-hidden
                group
              "
            >

              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-[#e0bc80]/10 to-transparent" />

              {/* icon */}
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

      {/* FORM */}
      <section className="px-4 sm:px-6 md:px-16 pb-28">

        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Send Us a Message
            </h2>
            <p className="text-gray-400 mt-3">
              We usually respond within 24 hours
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              rounded-[28px]
              p-6 sm:p-10
              grid grid-cols-1 md:grid-cols-2 gap-5
            "
          >

            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-[#e0bc80]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-[#e0bc80]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="md:col-span-2 p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-[#e0bc80]"
            />

            <textarea
              placeholder="Your Message"
              rows={6}
              className="md:col-span-2 p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-[#e0bc80]"
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
              "
            >
              Send Message
            </button>

          </motion.form>

        </div>
      </section>

      {/* MAP */}
      <section className="w-full h-[60vh] relative overflow-hidden">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          className="w-full h-full"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </section>

    </div>
  );
}