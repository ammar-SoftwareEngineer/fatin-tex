"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { useParams, usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const { locale } = useParams();
  const pathname = usePathname();

  const prefix = locale ? `/${locale}` : "";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Products",
      dropdown: [
        { name: "Cotton Fabric", href: "/products/cotton" },
        { name: "Silk Fabric", href: "/products/silk" },
        { name: "Linen Fabric", href: "/products/linen" },
      ],
    },
  ];

  const rightLinks = [
    { name: "Sondos Dyeing", href: "/sondos-dyeing" },
    { name: "Media", href: "/media" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
    { code: "tr", label: "Türkçe" },
  ];

  const renderLink = (item: any, i: number) => {
    if (item.dropdown) {
      return (
        <li key={i} className="relative group">
          <div className="flex items-center gap-2 cursor-pointer text-white hover:text-[#e0bc80] transition">
            {item.name}
            <FaChevronDown className="text-xs" />
          </div>

          {/* Dropdown */}
          <ul className="absolute top-full left-0 mt-4 w-56 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-3">
            {item.dropdown.map((sub: any, idx: number) => (
              <li key={idx}>
                <Link
                  href={`${prefix}${sub.href}`}
                  className="block px-4 py-3 rounded-xl text-white hover:bg-[#e0bc80] hover:text-black transition"
                >
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      );
    }

    const fullHref =
      item.href === "/" ? prefix || "/" : `${prefix}${item.href}`;

    const normalizedPathname = pathname?.replace(/\/$/, "") ?? "";
    const normalizedHref = fullHref.replace(/\/$/, "") || "/";

    const isActive = normalizedPathname === normalizedHref;

    return (
      <li key={i} className="relative group">
        <Link
          href={fullHref}
          className={`relative transition duration-300
          ${isActive ? "text-[#e0bc80]" : "text-white"}
          hover:text-[#e0bc80]`}
        >
          {item.name}

          <span
            className={`absolute left-0 -bottom-1 h-[2px] bg-[#e0bc80]
            transition-all duration-300
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
          ></span>
        </Link>
      </li>
    );
  };

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

        {/* Left Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-lg font-medium">
          {leftLinks.map(renderLink)}
        </ul>

        {/* Logo Center */}
        <Link href={`/${locale || ""}`} className="shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={70}
            className="object-contain"
          />
        </Link>

        {/* Right Menu */}
        <div className="hidden lg:flex items-center gap-10">

          <ul className="flex items-center gap-10 text-lg font-medium">
            {rightLinks.map(renderLink)}
          </ul>

          {/* Language Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-2 text-white cursor-pointer hover:text-[#e0bc80] transition">
              Language
              <FaChevronDown className="text-xs" />
            </div>

            <ul className="absolute right-0 top-full mt-4 w-44 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-3">
              {languages.map((lang, i) => (
                <li key={i}>
                  <Link
                    href={`/${lang.code}`}
                    className="block px-4 py-3 rounded-xl text-white hover:bg-[#e0bc80] hover:text-black transition"
                  >
                    {lang.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Icon */}
        <button className="lg:hidden text-2xl text-white">
          <FaBars />
        </button>

      </div>
    </nav>
  );
}