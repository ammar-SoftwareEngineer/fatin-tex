"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { useState } from "react";

export default function ProductDetails() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const product = {
    slug: "luxury-cotton-fabric",
    name: "Luxury Cotton Fabric",
    category: "Cotton",

    description:
      "Premium luxury cotton fabric with soft texture and elegant finishing.",

    longDescription:
      "Designed for premium fashion and interior brands with durability, softness, and luxury finishing.",

    sliderImages: ["/product1.jpg", "/product2.jpg", "/product3.jpg"],

    gallery: ["/product1.jpg", "/product2.jpg", "/product3.jpg"],

    reels: ["/video.mp4", "/video.mp4", "/video.mp4"],
  };

  return (
    <section className="bg-[#0f0f0f] text-white pb-28">

      {/* Breadcrumb */}
      <div className="bg-black">
        <Breadcrumb
          items={[
            { label: "Products", href: "/products" },
            { label: product.name, href: `/products/${product.slug}` },
          ]}
        />
      </div>

      {/* TOP LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid lg:grid-cols-2 gap-14 items-start">

        {/* LEFT SIDE */}
        <div>

          {/* SLIDER */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop
            className="rounded-[30px] overflow-hidden shadow-2xl"
          >
            {product.sliderImages.map((img, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={img}
                  alt=""
                  width={900}
                  height={900}
                  className="w-full h-[520px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* THUMB GALLERY */}
          <div className="grid grid-cols-3 gap-4 mt-5">

            {product.gallery.map((img, i) => (
              <div
                key={i}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                className="cursor-pointer overflow-hidden rounded-xl"
              >
                <Image
                  src={img}
                  alt=""
                  width={300}
                  height={300}
                  className="h-[130px] w-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:sticky lg:top-24">

          <span className="text-[#e0bc80] tracking-[5px] uppercase text-xs">
            {product.category}
          </span>

          <h1 className="text-5xl font-bold mt-4 mb-6 leading-tight">
            {product.name}
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-6">
            {product.description}
          </p>

          <div className="w-20 h-[2px] bg-[#e0bc80] mb-6"></div>

          <p className="text-gray-400 leading-8">
            {product.longDescription}
          </p>

          <div className="flex gap-4 mt-10">

            <button className="px-7 py-4 bg-[#e0bc80] text-black rounded-xl font-semibold hover:scale-105 transition">
              Request Order
            </button>

            <Link
              href="/contact"
              className="px-7 py-4 border border-white/20 rounded-xl hover:border-[#e0bc80] hover:text-[#e0bc80] transition"
            >
              Contact
            </Link>

          </div>

        </div>
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={product.gallery.map((img) => ({ src: img }))}
      />

      {/* REELS */}
      <div className="max-w-7xl mx-auto px-6 mt-24">

        <div className="mb-10">
          <p className="text-[#e0bc80] uppercase tracking-[4px] text-xs mb-2">
            Social Media
          </p>

          <h2 className="text-4xl font-bold">
            Product Reels
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {product.reels.map((video, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-black"
            >
              <video
                controls
                className="w-full h-[400px] object-cover"
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}