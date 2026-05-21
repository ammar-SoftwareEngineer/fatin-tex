"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero2.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/90 via-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-10">

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center mb-6"
        >
          <img src="/logo.png" className="h-28 mx-auto mb-3" />
          <p className="text-gray-300 text-sm">
            Premium Textile Dyeing & Finishing
          </p>
        </motion.div>

        {/* LINKS */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">

          {["Home", "About", "Services", "Products", "Contact"].map((item, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#e0bc80",
                color: "#000",
              }}
              className="px-4 py-1.5 text-sm rounded-full border border-white/10 text-gray-300 transition"
            >
              {item}
            </motion.a>
          ))}

        </div>

        {/* SOCIAL */}
        <div className="flex justify-center gap-4 mb-6">

          {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{
                scale: 1.15,
                rotate: 6,
                backgroundColor: "#e0bc80",
                color: "#000",
              }}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10"
            >
              <Icon />
            </motion.a>
          ))}

        </div>

        {/* CONTACT (compact) */}
        <div className="flex flex-col md:flex-row justify-center gap-6 text-gray-300 text-sm mb-6">

          <div className="flex items-center gap-2">
            <HiOutlineLocationMarker className="text-[#e0bc80]" />
            Cairo
          </div>

          <div className="flex items-center gap-2">
            <HiOutlinePhone className="text-[#e0bc80]" />
            +20 123 456 789
          </div>

          <div className="flex items-center gap-2">
            <HiOutlineMail className="text-[#e0bc80]" />
            info@fatien-tex.com
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-gray-500 text-xs border-t border-white/10 pt-4">
          © 2026 Fatin Tex. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}