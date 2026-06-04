"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ProductDetails() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const product = {
    slug: "luxury-cotton-fabric",
    name: "Luxury Cotton Fabric",
    category: "Cotton",

    description:
      "Premium luxury cotton fabric crafted with precision to deliver an ultra-soft touch, breathable texture, and refined finishing. Perfect for high-end fashion, upholstery, and interior design projects that demand elegance and durability at the same time.",

    longDescription:
      "This fabric is engineered for premium brands and designers who value both aesthetics and performance. It is woven from high-grade cotton fibers that ensure long-lasting durability while maintaining a smooth, comfortable feel against the skin. The material undergoes a special finishing process to enhance its softness, reduce shrinkage, and preserve color richness over time. Whether used in couture fashion pieces, luxury home textiles, or bespoke design projects, this cotton fabric brings a timeless and sophisticated look that elevates any creation. Its breathable nature makes it ideal for all-season use, while its strong structure guarantees resistance to wear and repeated washing.",

    sliderImages: ["/product1.jpg", "/product2.jpg", "/product3.jpg"],

    gallery: ["/product1.jpg", "/product2.jpg", "/product3.jpg"],

    reels: ["/video.mp4", "/video.mp4", "/video.mp4"],
  };

  const { locale } = useParams() as { locale?: string };
  const prefix = locale ? `/${locale}` : "";

  return (
    <section className="bg-[#0f0f0f] text-white pb-28">

      <div className="bg-black">
        <Breadcrumb
          items={[
            { label: "Products", href: "/products" },
            { label: product.name, href: `/products/${product.slug}` },
          ]}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-16">


        {/* SLIDER (taller) */}
        <div className="rounded-[35px] overflow-hidden shadow-2xl">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
          >
            {product.sliderImages.map((img, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={img}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-[800px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* SHORT DESCRIPTION (bigger + spaced) */}
        <p className="text-gray-300 text-lg leading-9 mt-12 text-center max-w-3xl mx-auto">
          {product.description}
        </p>

        {/* GALLERY (bigger thumbnails) */}
        <div className="grid grid-cols-3 gap-5 mt-14">
          {product.gallery.map((img, i) => (
            <div
              key={i}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="cursor-pointer overflow-hidden rounded-2xl"
            >
              <Image
                src={img}
                alt=""
                width={400}
                height={400}
                className="h-[300px] w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* LONG DESCRIPTION (bigger spacing + nicer layout) */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-[#e0bc80]">
            About This Fabric
          </h2>

          <p className="text-gray-400 leading-9 max-w-4xl mx-auto text-lg">
            {product.longDescription}
          </p>
        </div>

        {/* REELS */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            Product Reels
          </h2>

          <div className="grid md:grid-cols-3 gap-7">
            {product.reels.map((video, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden bg-black"
              >
                <video controls className="w-full h-[420px] object-cover">
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            ))}
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
    </section>
  );
}