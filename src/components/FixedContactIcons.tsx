"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FixedContactIcons() {
  const floatingAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
    },
  };

  return (
    <div
      className="
        fixed 
        left-3 sm:left-5 
        bottom-5 sm:bottom-7 
        z-50 
        flex 
        flex-col 
        gap-3 sm:gap-4
      "
    >
      {/* Phone */}
      <motion.a
        href="tel:+20123456789"
        animate={floatingAnimation}
        whileHover={{
          scale: 1.12,
          rotate: 5,
        }}
        whileTap={{ scale: 0.92 }}
        className="
          group
          relative
          w-12 h-12
          sm:w-14 sm:h-14
          flex
          items-center
          justify-center
          rounded-full
          overflow-hidden
          shadow-[0_10px_30px_rgba(224,188,128,0.35)]
        "
      >
        {/* Glow */}
        <span
          className="
            absolute inset-0
            bg-gradient-to-br
            from-[#e0bc80]
            to-[#b2895d]
          "
        ></span>

        {/* Animated Border */}
        <motion.span
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            inset-0
            rounded-full
            border-2
            border-[#e0bc80]
          "
        ></motion.span>

        {/* Icon */}
        <FaPhoneAlt
          className="
            relative z-10
            text-white
            text-lg sm:text-2xl
            transition-transform
            duration-300
            group-hover:scale-125
          "
        />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/20123456789"
        target="_blank"
        animate={{
          ...floatingAnimation,
          transition: {
            ...floatingAnimation.transition,
            delay: 0.5,
          },
        }}
        whileHover={{
          scale: 1.12,
          rotate: -5,
        }}
        whileTap={{ scale: 0.92 }}
        className="
          group
          relative
          w-12 h-12
          sm:w-14 sm:h-14
          flex
          items-center
          justify-center
          rounded-full
          overflow-hidden
          shadow-[0_10px_30px_rgba(178,137,93,0.35)]
        "
      >
        {/* Background */}
        <span
          className="
            absolute inset-0
            bg-gradient-to-br
            from-[#b2895d]
            to-[#e0bc80]
          "
        ></span>

        {/* Pulse Ring */}
        <motion.span
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
          }}
          className="
            absolute
            inset-0
            rounded-full
            border-2
            border-[#e0bc80]
          "
        ></motion.span>

        {/* Icon */}
        <FaWhatsapp
          className="
            relative z-10
            text-white
            text-[22px] sm:text-[28px]
            transition-transform
            duration-300
            group-hover:scale-125
          "
        />
      </motion.a>
    </div>
  );
}