"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { localizePath } from "@/lib/utils";
import { motion } from "framer-motion";

import Breadcrumb from "@/components/Breadcrumb";

export default function ProductsPage() {
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : undefined;
  const products = [
    {
      id: 1,
      name: "Luxury Cotton Fabric",
      category: "Cotton",
      image: "/product1.jpg",
      slug: "luxury-cotton-fabric",
    },
    {
      id: 2,
      name: "Premium Silk Fabric",
      category: "Silk",
      image: "/product2.jpg",
      slug: "premium-silk-fabric",
    },
    {
      id: 3,
      name: "Soft Linen Fabric",
      category: "Linen",
      image: "/product3.jpg",
      slug: "soft-linen-fabric",
    },
    {
      id: 4,
      name: "Modern Wool Fabric",
      category: "Wool",
      image: "/product4.jpg",
      slug: "modern-wool-fabric",
    },
  ];

  // LocalizedLink handles locale prefixes centrally.

  return (
    <section className="bg-[#0d0b09] text-white pb-28 overflow-hidden">

      {/* BREADCRUMB */}
      <div className="bg-black/60 backdrop-blur-md border-b border-white/10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
          ]}
        />
      </div>

      {/* HERO */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">
          Our <span className="text-[#e0bc80]">Products</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto leading-8">
          Explore our curated collection of premium fabrics designed for luxury fashion.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product, i) => (
          <Link
            key={product.id}
            href={localizePath(`/products/${product.slug}`, locale)}
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -14 }}
              className="group relative h-[420px] rounded-[34px] overflow-hidden"
            >

              {/* BORDER GLOW */}
              <div className="absolute inset-0 rounded-[34px] p-[1px] bg-gradient-to-br from-[#e0bc80]/40 via-transparent to-white/10">
                <div className="w-full h-full rounded-[34px] bg-black/40 backdrop-blur-2xl" />
              </div>

              {/* IMAGE */}
              <div className="absolute inset-0 overflow-hidden rounded-[34px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                />

                {/* DARK GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* GOLD SHINE */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top_right,rgba(224,188,128,0.25),transparent_60%)]" />
              </div>

              {/* NUMBER */}
              <div className="absolute top-5 right-5 text-white/20 text-5xl font-bold">
                0{i + 1}
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-10">

                {/* CATEGORY */}
                <p className="text-[#e0bc80] text-xs tracking-[4px] uppercase mb-2">
                  {product.category}
                </p>

                {/* TITLE */}
                <h3 className="text-2xl font-bold mb-5 group-hover:text-[#e0bc80] transition">
                  {product.name}
                </h3>

                {/* CTA */}
                <div className="
                  flex items-center gap-3
                  text-[#e0bc80] font-medium
                  opacity-0 translate-y-4
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-500
                ">
                  <span className="relative">
                    View Details
                    <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[1px] bg-[#e0bc80] transition-all duration-500" />
                  </span>

                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e0bc80] to-[#f5e6a8] flex items-center justify-center text-black">
                    →
                  </div>
                </div>

              </div>

              {/* GLOBAL HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#e0bc80]/10 to-transparent" />

            </motion.div>
          </Link>
        ))}

      </div>
    </section>
  );
}

// No local prefixing here — LocalizedLink handles locale-aware URLs.