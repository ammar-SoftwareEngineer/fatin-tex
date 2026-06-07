"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { localizePath } from "@/lib/utils";
import { motion } from "framer-motion";
import { HiHome } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : undefined;

  return (
    <section
      className="
        relative
        overflow-hidden
        pt-36 sm:pt-44 lg:pt-52
        pb-16 sm:pb-20 lg:pb-24
        px-4 sm:px-6 lg:px-16
      "
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero2.jpg')",
          }}
        ></div>
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19]/95 via-black/40 to-[#0b0f19]/80"></div>

      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          top-[-100px]
          left-[5%]
          w-[220px]
          sm:w-[320px]
          h-[220px]
          sm:h-[320px]
          bg-[#e0bc80]
          blur-3xl
          rounded-full
        "
      ></motion.div>

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.06, 0.15, 0.06],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 1,
        }}
        className="
          absolute
          bottom-[-120px]
          right-[5%]
          w-[250px]
          sm:w-[380px]
          h-[250px]
          sm:h-[380px]
          bg-[#b2895d]
          blur-3xl
          rounded-full
        "
      ></motion.div>

      {/* Tiny Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
            }}
            className="
              absolute
              w-1.5
              h-1.5
              bg-[#e0bc80]
              rounded-full
            "
            style={{
              left: `${i * 8}%`,
              top: `${20 + i * 4}%`,
            }}
          ></motion.span>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            font-playfair
            text-white
            leading-tight
            mb-5
          "
        >
          {items[items.length - 1]?.label}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
            text-sm
            sm:text-base
            md:text-lg
            text-gray-300
            max-w-2xl
            leading-7
            mb-8
          "
        >
          Discover premium fabrics, timeless elegance, and luxury
          textile collections crafted for fashion and creativity.
        </motion.p>

        {/* Breadcrumb Box */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          whileHover={{
            scale: 1.01,
          }}
          className="
            inline-flex
            items-center
            flex-wrap
            gap-2
            sm:gap-3
            bg-white/10
            border
            border-white/10
            backdrop-blur-2xl
            px-4 sm:px-6
            py-3 sm:py-4
            rounded-2xl sm:rounded-full
            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          "
        >
          {/* Home */}
          <Link
            href={localizePath('/', locale)}
            className="
              flex
              items-center
              gap-2
              text-sm sm:text-base
              text-gray-200
              hover:text-[#e0bc80]
              transition-all
              duration-300
            "
          >
            <HiHome className="text-lg" />
            <span>Home</span>
          </Link>

          {/* Dynamic Items */}
          {items.map((item, i) => {
            const href = item.href ? item.href : undefined;

            return (
              <div
                key={i}
                className="flex items-center gap-2"
              >
                <MdKeyboardArrowRight className="text-gray-400 text-lg" />

                {href ? (
                  <Link
                    href={localizePath(href || '#', locale)}
                    className="
                      text-sm sm:text-base
                      text-gray-200
                      hover:text-[#e0bc80]
                      transition-all
                      duration-300
                    "
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="
                      text-sm sm:text-base
                      text-[#e0bc80]
                      font-semibold
                    "
                  >
                    {item.label}
                  </span>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}