"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { localizePath } from "@/lib/utils";
import { defaultLocale } from "@/i18n/config";

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
const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Sondos Dyeing", href: "/sondos-dyeing" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

const socialIcons = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/",
  },
];
const params = useParams();
const locale =
  typeof params.locale === "string" ? params.locale : defaultLocale;
  return (
    <footer className="relative overflow-hidden text-white">
      {/* BACKGROUND */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/hero2.jpg')",
          }}
        />
      </motion.div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75" />

      {/* GRADIENT */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-[#0b0f19]
          via-black/70
          to-black/40
        "
      />

      {/* GLOW EFFECTS */}
      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          top-[-100px]
          left-[10%]
          w-[250px]
          h-[250px]
          bg-[#e0bc80]
          blur-3xl
          rounded-full
        "
      ></motion.div>

      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.08],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          delay: 1,
        }}
        className="
          absolute
          bottom-[-120px]
          right-[10%]
          w-[300px]
          h-[300px]
          bg-[#b2895d]
          blur-3xl
          rounded-full
        "
      ></motion.div>

      {/* PARTICLES */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
            }}
            className="
              absolute
              w-1.5 h-1.5
              bg-[#e0bc80]
              rounded-full
            "
            style={{
              left: `${i * 7}%`,
              top: `${20 + i * 3}%`,
            }}
          ></motion.span>
        ))}
      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10
          max-w-7xl
          mx-auto
          px-4 sm:px-6 lg:px-16
          py-14 sm:py-16 lg:py-20
        "
      >
        {/* TOP SECTION */}
        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* LOGO */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.img
              whileHover={{
                scale: 1.05,
                rotate: 2,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              src="/logo.png"
              alt="Logo"
              className="
                h-24 sm:h-28 lg:h-32
                mx-auto
                object-contain
                mb-4
              "
            />

            <motion.h3
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
                text-xl sm:text-2xl
                font-semibold
                mb-2
              "
            >
              Fatin Tex
            </motion.h3>

            <p
              className="
                text-gray-300
                text-sm sm:text-base
                max-w-md
                leading-7
              "
            >
              Premium Textile Dyeing &
              Finishing with luxury quality,
              timeless elegance, and modern
              innovation.
            </p>
          </motion.div>

          {/* LINKS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="
              flex
              flex-wrap
              justify-center
              gap-3 sm:gap-4
              mb-10
            "
          >
{footerLinks.map((item, i) => (
  <motion.div
    key={i}
    whileHover={{
      scale: 1.08,
      y: -4,
      backgroundColor: "#e0bc80",
      color: "#000",
    }}
    className="
      rounded-full
      border border-white/10
      bg-white/5
      transition-all
    "
  >
    <Link
      href={localizePath(item.href, locale)}
      className="block px-5 py-2.5 text-gray-300"
    >
      {item.name}
    </Link>
  </motion.div>
))}
          </motion.div>

          {/* SOCIAL ICONS */}
  {/* SOCIAL ICONS */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  viewport={{ once: true }}
  className="flex justify-center gap-4 sm:gap-5 mb-10"
>
  {socialIcons.map((item, i) => {
    const Icon = item.icon;

    return (
      <motion.a
        key={i}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.15,
          rotate: 8,
          backgroundColor: "#e0bc80",
          color: "#000",
          boxShadow: "0 10px 30px rgba(224,188,128,0.35)",
        }}
        whileTap={{ scale: 0.92 }}
        className="
          w-11 h-11
          sm:w-12 sm:h-12
          flex
          items-center
          justify-center
          rounded-full
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          text-lg
          transition-all duration-300
        "
      >
        <Icon />
      </motion.a>
    );
  })}
</motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
            }}
            viewport={{ once: true }}
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-5
              w-full
              max-w-5xl
              mb-12
            "
          >
            {/* LOCATION */}
            <motion.div
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="
                flex
                items-center
                gap-4
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                px-5 py-5
              "
            >
              <div
                className="
                  w-12 h-12
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-[#e0bc80]/15
                  text-[#e0bc80]
                  text-2xl
                  shrink-0
                "
              >
                <HiOutlineLocationMarker />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Address
                </p>

                <h4 className="font-medium">
                  Cairo, Egypt
                </h4>
              </div>
            </motion.div>

            {/* PHONE */}
            <motion.div
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="
                flex
                items-center
                gap-4
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                px-5 py-5
              "
            >
              <div
                className="
                  w-12 h-12
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-[#e0bc80]/15
                  text-[#e0bc80]
                  text-2xl
                  shrink-0
                "
              >
                <HiOutlinePhone />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Phone
                </p>

                <h4 className="font-medium">
                  +20 123 456 789
                </h4>
              </div>
            </motion.div>

            {/* EMAIL */}
            <motion.div
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="
                flex
                items-center
                gap-4
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                px-5 py-5
              "
            >
              <div
                className="
                  w-12 h-12
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-[#e0bc80]/15
                  text-[#e0bc80]
                  text-2xl
                  shrink-0
                "
              >
                <HiOutlineMail />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Email
                </p>

                <h4 className="font-medium break-all">
                  info@fatien-tex.com
                </h4>
              </div>
            </motion.div>
          </motion.div>

          {/* COPYRIGHT */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.9,
            }}
            viewport={{ once: true }}
            className="
              w-full
              border-t
              border-white/10
              pt-6
              text-center
            "
          >
            <p
              className="
                text-gray-500
                text-xs sm:text-sm
                leading-6
              "
            >
              © 2026 Fatin Tex. All Rights
              Reserved. Crafted with modern
              luxury & elegance.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}