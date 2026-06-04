"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogSection() {
  const blogs = [
    {
      title: "The Future of Textile Innovation",
      desc: "Discover how modern dyeing techniques are changing the fabric industry.",
      img: "/blog1.avif",
      date: "Jan 2026",
    },
    {
      title: "Luxury Fabrics Trends 2026",
      desc: "A deep dive into premium textures and fashion-forward materials.",
      img: "/blog2.jpg",
      date: "Feb 2026",
    },
    {
      title: "Behind Sundus Dyeing Process",
      desc: "From raw fabric to final masterpiece — explore our process.",
      img: "/blog3.jpg",
      date: "Mar 2026",
    },
  ];

  const { locale } = useParams() as { locale?: string };
  const prefix = locale ? `/${locale}` : "";

  return (
    <section className="relative py-28 px-6 md:px-16 bg-[var(--background)] text-white overflow-hidden">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[#e0bc80] tracking-[5px] text-xs mb-3">
          OUR BLOG
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Latest Articles
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5"
          >

            {/* Image */}
            <div className="h-[220px] overflow-hidden">
              <img
                src={blog.img}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                alt={blog.title}
              />
            </div>

            {/* Content */}
            <div className="p-6">

              <p className="text-[#e0bc80] text-xs mb-2">
                {blog.date}
              </p>

              <h3 className="text-xl font-bold mb-2 group-hover:text-[#e0bc80] transition">
                {blog.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {blog.desc}
              </p>

              {/* Read More */}
              <Link
                href={`${prefix}/blogs/${blog.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="mt-5 inline-block text-sm text-[#e0bc80] relative"
              >
                Read More
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#e0bc80] group-hover:w-full transition-all duration-300"></span>
              </Link>

            </div>
          </motion.div>
        ))}

      </div>

      {/* زرار البلوجز */}
      <div className="flex justify-center">
        <Link href={`${prefix}/blogs`}>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(224,188,128,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#e0bc80] text-black px-7 py-3 rounded-full font-medium transition flex items-center gap-2 mt-12"
          >
            View All Blogs
          </motion.button>
        </Link>
      </div>

    </section>
  );
}