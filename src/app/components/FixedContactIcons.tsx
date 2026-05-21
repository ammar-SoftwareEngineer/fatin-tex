"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FixedContactIcons() {
  return (
    <div className="fixed left-4 bottom-6 z-50 flex flex-col gap-4">

      {/* Phone */}
      <motion.a
        href="tel:+20123456789"
        whileHover={{ scale: 1.08 }}
        className="w-12 h-12 flex items-center justify-center rounded-full
                   shadow-lg relative overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-br from-[#e0bc80] to-[#b2895d]"></span>

        <FaPhoneAlt className="relative z-10 text-white text-2xl" />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/20123456789"
        target="_blank"
        whileHover={{ scale: 1.08 }}
        className="w-12 h-12 flex items-center justify-center rounded-full
                   shadow-lg relative overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-br from-[#b2895d] to-[#e0bc80]"></span>

        <FaWhatsapp className="relative z-10 text-white text-[26px]" />
      </motion.a>

    </div>
  );
}