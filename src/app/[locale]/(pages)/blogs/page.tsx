"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";
import { localizePath } from "@/lib/utils";

export default function BlogsPage() {
  const params = useParams();

  const locale =
    typeof params.locale === "string"
      ? params.locale
      : undefined;

  const blogs = [
    {
      title: "The Future of Textile Innovation",

      desc:
        "Discover how modern dyeing techniques are changing the fabric industry.",

      img: "/blog1.avif",

      date: "Jan 2026",

      slug: "future-of-textile-innovation",
    },

    {
      title: "Luxury Fabrics Trends 2026",

      desc:
        "A deep dive into premium textures and fashion-forward materials.",

      img: "/blog2.jpg",

      date: "Feb 2026",

      slug: "luxury-fabrics-trends-2026",
    },

    {
      title: "Behind Sundus Dyeing Process",

      desc:
        "From raw fabric to final masterpiece — explore our process.",

      img: "/blog3.jpg",

      date: "Mar 2026",

      slug: "behind-sundus-dyeing-process",
    },
  ];

  return (
    <div className="bg-[#0d0b09] text-white overflow-hidden">

      {/* BREADCRUMB */}
      <Breadcrumb
        items={[
          {
            label: "Blogs",

            href: localizePath(
              "/blogs",
              locale
            ),
          },
        ]}
      />

      {/* GRID */}
      <div
        className="
          max-w-7xl
          mx-auto
          px-4 sm:px-6
          py-16

          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-7 lg:gap-8
        "
      >
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
            }}
            className="
              group
              relative

              rounded-[30px]
              overflow-hidden

              bg-white/[0.03]
              border border-white/10
              backdrop-blur-xl
            "
          >

            {/* IMAGE */}
            <div
              className="
                relative
                h-[260px]
                overflow-hidden
              "
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="
                  w-full h-full
                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute inset-0

                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                "
              />

              <div
                className="
                  absolute top-5 left-5

                  bg-[#e0bc80]
                  text-black

                  text-xs
                  font-semibold

                  px-4 py-2
                  rounded-full
                  shadow-lg
                "
              >
                {blog.date}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6 sm:p-7">

              <h3
                className="
                  text-2xl
                  font-bold
                  mb-4

                  group-hover:text-[#e0bc80]
                  transition
                "
              >
                {blog.title}
              </h3>

              <p
                className="
                  text-gray-400
                  leading-7
                  text-sm sm:text-base
                  mb-7
                "
              >
                {blog.desc}
              </p>

              <Link
                href={localizePath(
                  `/blogs/${blog.slug}`,
                  locale
                )}
                className="
                  text-[#e0bc80]
                  font-medium

                  inline-flex
                  items-center
                  gap-2
                "
              >
                Read More →
              </Link>
            </div>

            {/* HOVER GLOW */}
            <div
              className="
                absolute inset-0

                opacity-0
                group-hover:opacity-100

                transition-opacity
                duration-500

                pointer-events-none

                bg-gradient-to-br
                from-[#e0bc80]/10
                to-transparent
              "
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}