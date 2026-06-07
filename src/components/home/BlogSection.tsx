"use client";

import React from "react";

import { motion } from "framer-motion";

import Link from "next/link";
import { useParams } from "next/navigation";
import { localizePath } from "@/lib/utils";

export default function BlogSection() {
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : undefined;
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

  // LocalizedLink will handle locale-aware URLs

  return (
    <section
      className="
        relative
        py-20 sm:py-28 lg:py-36
        px-4 sm:px-6 lg:px-16
        bg-[var(--background)]
        text-white
        overflow-hidden
      "
    >
      {/* TOP LINE */}
      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: "180px",
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-[#e0bc80]
          to-transparent
        "
      ></motion.div>

      {/* HEADER */}
      <div className="text-center mb-14 sm:mb-20">
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="
            text-[#e0bc80]
            tracking-[5px]
            uppercase
            text-xs sm:text-sm
            mb-4
          "
        >
          Our Blog
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          viewport={{ once: true }}
          className="
            text-3xl
            sm:text-4xl
            lg:text-6xl
            font-bold
            leading-tight
          "
        >
          Latest Articles &
          <span className="text-[#e0bc80]">
            {" "}
            Insights
          </span>
        </motion.h2>
      </div>

      {/* BLOG GRID */}
      <div
        className="
          max-w-7xl
          mx-auto
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
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* IMAGE OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                "
              ></div>

              {/* DATE */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                className="
                  absolute
                  top-5
                  left-5
                  bg-[#e0bc80]
                  text-black
                  text-xs
                  font-semibold
                  px-4
                  py-2
                  rounded-full
                  shadow-lg
                "
              >
                {blog.date}
              </motion.div>
            </div>

            {/* CONTENT */}
            <div className="p-6 sm:p-7">
              {/* TITLE */}
              <motion.h3
                whileHover={{
                  x: 4,
                }}
                className="
                  text-2xl
                  font-bold
                  mb-4
                  leading-snug
                  transition-colors
                  duration-300
                  group-hover:text-[#e0bc80]
                "
              >
                {blog.title}
              </motion.h3>

              {/* DESC */}
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

              {/* BUTTON */}
              <Link
                href={localizePath(`/blogs/${blog.title.toLowerCase().replace(/\s+/g, "-")}`, locale)}
                className="
                  inline-flex
                  items-center
                  gap-3
                  text-[#e0bc80]
                  font-medium
                  group/link
                "
              >
                <span
                  className="
                    relative
                    overflow-hidden
                  "
                >
                  Read More

                  <span
                    className="
                      absolute
                      left-0
                      bottom-0
                      w-0
                      h-[1px]
                      bg-[#e0bc80]
                      transition-all
                      duration-500
                      group-hover/link:w-full
                    "
                  ></span>
                </span>

                <motion.span
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="text-lg"
                >
                  →
                </motion.span>
              </Link>
            </div>

            {/* HOVER LIGHT */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                pointer-events-none
                bg-gradient-to-br
                from-[#e0bc80]/10
                to-transparent
              "
            ></div>
          </motion.div>
        ))}
      </div>

      {/* BUTTON */}
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
          delay: 0.4,
        }}
        viewport={{ once: true }}
        className="
          flex
          justify-center
          mt-14 sm:mt-16
        "
      >
        <Link href={localizePath(`/blogs`, locale)}>
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow:
                "0px 15px 40px rgba(224,188,128,0.35)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              relative
              overflow-hidden
              bg-[#e0bc80]
              text-black
              px-8 sm:px-10
              py-4
              rounded-full
              font-semibold
              text-sm sm:text-base
              shadow-xl
            "
          >
            <span className="relative z-10">
              View All Blogs
            </span>

            {/* SHINE */}
            <motion.span
              initial={{
                x: "-120%",
              }}
              whileHover={{
                x: "120%",
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                absolute
                inset-0
                bg-white/30
                skew-x-12
              "
            ></motion.span>
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}