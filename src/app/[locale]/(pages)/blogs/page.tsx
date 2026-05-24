"use client";

import Breadcrumb from "@/components/Breadcrumb";
import BlogSection from "@/components/home/BlogSection";

export default function BlogsPage() {
  return (
    <div className="bg-[#0b0f19] text-white overflow-hidden">
      <Breadcrumb items={[{ label: "Blogs", href: "/blogs" }]} />
      <BlogSection />
    </div>
  );
}
