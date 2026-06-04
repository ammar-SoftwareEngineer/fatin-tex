"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";

export default function ProductsPage() {
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
      image: "/product1.jpg",
      slug: "modern-wool-fabric",
    },
  ];

  const prefix = usePrefix();

  return (
    <section className="bg-[#0f0f0f] text-white pb-28">

      {/* Breadcrumb */}
      <div className="bg-black">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
          ]}
        />
      </div>

      {/* HERO */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">Our Products</h1>
        <p className="text-gray-400 max-w-2xl mx-auto leading-8">
          Explore our curated collection of premium fabrics designed for luxury fashion,
          interior design, and creative craftsmanship.
        </p>
      </div>

      {/* PRODUCTS GRID */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-[#111] rounded-2xl overflow-hidden hover:scale-[1.02] transition duration-500"
          >
            {/* IMAGE */}
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <p className="text-[#e0bc80] text-xs uppercase tracking-[3px] mb-2">
                {product.category}
              </p>

              <h3 className="text-lg font-semibold mb-4">
                {product.name}
              </h3>

              <Link
                href={`${prefix}/products/${product.slug}`}
                className="inline-block px-5 py-2 border border-white/20 rounded-xl hover:border-[#e0bc80] hover:text-[#e0bc80] transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

function usePrefix() {
  const { locale } = useParams() as { locale?: string };
  return locale ? `/${locale}` : "";
}