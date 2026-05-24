"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { useParams, usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const { locale } = useParams(); // 👈 مهم للـ locale
  const pathname = usePathname();
  const prefix = locale ? `/${locale}` : "";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Sondos Dyeing", href: "/sondos-dyeing" },
    { name: "Media", href: "/media" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-black/40 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href={`/${locale || ""}`} className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={90}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-white font-medium text-lg">
          {links.map((item, i) => {
            const fullHref = item.href === "/" ? prefix || "/" : `${prefix}${item.href}`;
            const normalizedPathname = pathname?.replace(/\/$/, "") ?? "";
            const normalizedHref = fullHref.replace(/\/$/, "") || "/";
            const isActive = normalizedPathname === normalizedHref;

            return (
              <li key={i} className="relative group cursor-pointer">

                <Link
                  href={fullHref}
                  className={`relative transition duration-300
                    ${isActive ? "text-[#e0bc80]" : "text-white"}
                    group-hover:text-[#e0bc80]
                  `}
                >
                  <span className="relative z-10">
                    {item.name}
                  </span>

                  {/* underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#e0bc80]
                      transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  ></span>

                  {/* glow */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[#e0bc80] blur-xl transition"></span>
                </Link>

              </li>
            );
          })}
        </ul>

        {/* Mobile Icon */}
        <button className="md:hidden text-2xl text-white hover:text-[#e0bc80] transition">
          <FaBars />
        </button>

      </div>
    </nav>
  );
}