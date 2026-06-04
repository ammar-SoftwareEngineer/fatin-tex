"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";

export default function BlogDetails() {
  const blog = {
    title: "The Art of Luxury Fabrics",
    category: "Design",
    image: "/blog1.avif",
    content: `
Luxury fabrics are more than just materials; they are a reflection of craftsmanship, tradition, and innovation. 

From the softness of cotton to the elegance of silk, each fabric tells a unique story.

Designers around the world use premium textiles to create timeless pieces that combine comfort and beauty.
    `,
    quote:
      "True luxury is not about price, but about the experience and feeling a fabric creates.",
  };

  const relatedBlogs = [
    {
      title: "Understanding Cotton Quality",
      image: "/blog2.jpg",
      slug: "cotton-quality",
    },
    {
      title: "Silk in Modern Fashion",
      image: "/blog3.jpg",
      slug: "silk-modern-fashion",
    },
    {
      title: "Why Linen is Trending",
      image: "/blog1.avif",
      slug: "linen-trending",
    },
  ];

  const { locale } = useParams() as { locale?: string };
  const prefix = locale ? `/${locale}` : "";

  return (
    <section className="bg-[#0f0f0f] text-white pb-28">

      {/* Breadcrumb */}
      <div className="bg-black">
        <Breadcrumb
          items={[
            { label: "Blogs", href: "/blogs" },
            { label: blog.title, href: "#" },
          ]}
        />
      </div>

      {/* HERO */}
      <div className="text-center py-20 px-6">
        <p className="text-[#e0bc80] tracking-[4px] text-xs mb-3">
          {blog.category}
        </p>

        <h1 className="text-5xl font-bold max-w-3xl mx-auto leading-tight">
          {blog.title}
        </h1>
      </div>

      {/* MAIN IMAGE */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={blog.image}
            alt=""
            width={1200}
            height={700}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-gray-300 leading-9 text-lg whitespace-pre-line">
            {blog.content}
          </p>

          {/* QUOTE */}
          <div className="mt-10 border-l-4 border-[#e0bc80] pl-6 italic text-gray-400 text-lg">
            {blog.quote}
          </div>
        </div>
      </div>

      {/* RELATED BLOGS */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Related Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedBlogs.map((post, i) => (
            <Link
              key={i}
              href={`${prefix}/blogs/${post.slug}`}
              className="group bg-[#111] rounded-2xl overflow-hidden hover:scale-[1.02] transition"
            >
              <div className="relative h-[220px]">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-110 transition"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold group-hover:text-[#e0bc80] transition">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}

