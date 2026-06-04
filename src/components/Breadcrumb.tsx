"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { HiHome } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  const { locale } = useParams();
  const prefix = locale ? `/${locale}` : "";

  const makeHref = (path?: string) => {
    if (!path) return undefined;
    const p = path.startsWith("/") ? path : `/${path}`;
    return prefix ? `${prefix}${p}` : p;
  };

  return (
    <section className="relative overflow-hidden pt-50 pb-20 px-6 md:px-16">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero2.jpg')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19]/90 via-black/40 to-[#0b0f19]/70"></div>

      {/* Glow */}
      <div className="absolute top-[-100px] left-[10%] w-[250px] h-[250px] bg-[#e0bc80] opacity-10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[10%] w-[300px] h-[300px] bg-[#b2895d] opacity-10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold font-playfair text-white mb-6"
        >
          {items[items.length - 1]?.label}
        </motion.h1>

        {/* Small Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 max-w-xl mb-8"
        >
          Discover premium fabrics, timeless elegance, and luxury textile
          collections crafted for fashion and creativity.
        </motion.p>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center flex-wrap gap-2
          bg-white/10 border border-white/10
          backdrop-blur-xl
          px-6 py-4 rounded-full shadow-2xl"
        >

          {/* Home */}
          <Link
            href={makeHref("/")}
            className="flex items-center gap-2 text-gray-200 hover:text-[#e0bc80] transition"
          >
            <HiHome className="text-lg" />
            <span>Home</span>
          </Link>

          {/* Dynamic Items */}
          {items.map((item, i) => {
            const href = item.href ? makeHref(item.href) : undefined;

            return (
              <div
                key={i}
                className="flex items-center gap-2"
              >

                <MdKeyboardArrowRight className="text-gray-400 text-lg" />

                {href ? (
                  <Link
                    href={href}
                    className="text-gray-200 hover:text-[#e0bc80] transition"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#e0bc80] font-medium">
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