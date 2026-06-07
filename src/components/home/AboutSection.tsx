"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { num: "10+", label: "Years Experience" },

    { num: "500+", label: "Luxury Designs" },

    { num: "100%", label: "Premium Quality" },
  ];

  return (
    <section
      className="
        relative
        py-20 sm:py-28 lg:py-36
        px-4 sm:px-6 lg:px-16
        bg-[#0d0b09]
        text-white
        overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.08],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          top-[-120px]
          left-[-80px]
          w-[280px]
          sm:w-[420px]
          h-[280px]
          sm:h-[420px]
          bg-[#e0bc80]
          blur-3xl
          rounded-full
        "
      ></motion.div>

      <motion.div
        animate={{
          opacity: [0.06, 0.14, 0.06],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          delay: 1,
        }}
        className="
          absolute
          bottom-[-150px]
          right-[-80px]
          w-[300px]
          sm:w-[450px]
          h-[300px]
          sm:h-[450px]
          bg-[#b2895d]
          blur-3xl
          rounded-full
        "
      ></motion.div>

      {/* PARTICLES */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(14)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HUGE BACK TEXT */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="
            absolute
            top-[-50px]
            sm:top-[-70px]
            left-0
            text-[55px]
            sm:text-[90px]
            lg:text-[150px]
            font-black
            text-white/[0.03]
            tracking-[10px]
            sm:tracking-[18px]
            uppercase
            pointer-events-none
            select-none
          "
        >
          ABOUT
        </motion.h1>

        <div
          className="
            grid
            lg:grid-cols-2
            gap-12 lg:gap-20
            items-center
            relative
          "
        >
          {/* IMAGE SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* DECORATION BORDER */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                -top-5
                -left-5
                w-full
                h-full
                border
                border-[#e0bc80]/20
                rounded-[35px]
              "
            ></motion.div>

            {/* MAIN IMAGE */}
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
              }}
              className="
                relative
                rounded-[30px]
                overflow-hidden
                shadow-[0_20px_80px_rgba(0,0,0,0.5)]
                group
              "
            >
              {/* IMAGE */}
              <img
                src="/about1.jpg"
                alt="About"
                className="
                  w-full
                  h-[350px]
                  sm:h-[500px]
                  lg:h-[650px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-black/10
                  to-transparent
                "
              ></div>

              {/* FLOATING CARD */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  bottom-6
                  left-6
                  sm:bottom-8
                  sm:left-8
                  bg-white/10
                  backdrop-blur-2xl
                  border border-white/10
                  rounded-3xl
                  px-5 sm:px-6
                  py-4
                  shadow-2xl
                "
              >
                <h4
                  className="
                    text-[#e0bc80]
                    text-xl
                    font-bold
                    mb-1
                  "
                >
                  Luxury Fabrics
                </h4>

                <p
                  className="
                    text-gray-300
                    text-sm
                  "
                >
                  Modern textile innovation
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="
              relative
              lg:pl-6
            "
          >
            {/* SMALL TITLE */}
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
                delay: 0.2,
              }}
              className="
                text-[#e0bc80]
                tracking-[5px]
                uppercase
                text-xs sm:text-sm
                mb-5
              "
            >
              About Fatin Tex
            </motion.p>

            {/* TITLE */}
            <motion.h2
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
              className="
                text-3xl
                sm:text-4xl
                lg:text-6xl
                font-bold
                leading-tight
                mb-7
              "
            >
              We Don’t Just Make Fabric —
              <span className="text-[#e0bc80]">
                {" "}
                We Design Texture
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              className="
                text-gray-400
                leading-8
                text-sm sm:text-base lg:text-lg
                mb-10
                max-w-xl
              "
            >
              At Fatin Tex, we transform
              fabric into a refined design
              language. Every material is
              carefully selected and
              processed to deliver unmatched
              softness, durability, and a
              premium visual identity for
              modern fashion creators.
            </motion.p>

            {/* STATS */}
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
                delay: 0.5,
              }}
              className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-5
                mb-12
              "
            >
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="
                    bg-white/5
                    border border-white/10
                    backdrop-blur-xl
                    rounded-3xl
                    p-6
                    text-center
                    transition-all duration-300
                  "
                >
                  <motion.h3
                    animate={{
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="
                      text-[#e0bc80]
                      text-3xl
                      sm:text-4xl
                      font-bold
                      mb-2
                    "
                  >
                    {item.num}
                  </motion.h3>

                  <p
                    className="
                      text-gray-400
                      text-sm
                    "
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.06,
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
                Explore More
              </span>

              <motion.span
                initial={{
                  x: "-100%",
                }}
                whileHover={{
                  x: "100%",
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}