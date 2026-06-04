"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FaBars,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";

import { useParams, usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const params = useParams();
  const pathname = usePathname();

  // FIXED LOCALE
  const locale =
    typeof params.locale === "string"
      ? params.locale
      : "en";

  const prefix = `/${locale}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftLinks = [
    { name: "Home", href: "/" },

    { name: "About", href: "/about" },

    {
      name: "Products",

      dropdown: [
        {
          name: "Cotton Fabric",
          href: "/products/cotton",
        },

        {
          name: "Silk Fabric",
          href: "/products/silk",
        },

        {
          name: "Linen Fabric",
          href: "/products/linen",
        },
      ],
    },

    { name: "Media", href: "/media" },
  ];

  const rightLinks = [
    {
      name: "Sondos Dyeing",
      href: "/sondos-dyeing",
    },

    { name: "Blogs", href: "/blogs" },

    { name: "Contact", href: "/contact" },
  ];

  const languages = [
    { code: "en", label: "English" },

    { code: "ar", label: "العربية" },

    { code: "tr", label: "Türkçe" },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  // DESKTOP LINKS
  const renderDesktopLink = (
    item: any,
    i: number
  ) => {

    // DROPDOWN
    if (item.dropdown) {
      return (
        <li key={i} className="relative group">

          <div className="flex items-center gap-2 cursor-pointer text-white hover:text-[#e0bc80] transition">

            {item.name}

            <FaChevronDown className="text-xs" />

          </div>

          {/* Dropdown */}
          <ul className="absolute top-full left-0 mt-4 w-56 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-3">

            {item.dropdown.map(
              (sub: any, idx: number) => (
                <li key={idx}>

                  <Link
                    href={`${prefix}${sub.href}`}
                    className="block px-4 py-3 rounded-xl text-white hover:bg-[#e0bc80] hover:text-black transition"
                  >
                    {sub.name}
                  </Link>

                </li>
              )
            )}

          </ul>
        </li>
      );
    }

    // NORMAL LINKS
    const fullHref =
      item.href === "/"
        ? prefix
        : `${prefix}${item.href}`;

    const normalizedPathname =
      pathname?.replace(/\/$/, "") ?? "";

    const normalizedHref =
      fullHref.replace(/\/$/, "");

    const isActive =
      normalizedPathname === normalizedHref;

    return (
      <li key={i} className="relative group">

        <Link
          href={fullHref}
          className={`relative transition duration-300
          ${
            isActive
              ? "text-[#e0bc80]"
              : "text-white"
          }
          hover:text-[#e0bc80]`}
        >

          {item.name}

          <span
            className={`absolute left-0 -bottom-1 h-[2px] bg-[#e0bc80]
            transition-all duration-300
            ${
              isActive
                ? "w-full"
                : "w-0 group-hover:w-full"
            }`}
          ></span>

        </Link>

      </li>
    );
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/40 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >

        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

          {/* LEFT */}
          <ul className="hidden lg:flex items-center gap-10 text-lg font-medium">
            {leftLinks.map(renderDesktopLink)}
          </ul>

          {/* LOGO */}
          <Link
            href={prefix}
            className="shrink-0 relative z-10"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={70}
              className="object-contain"
            />
          </Link>

          {/* RIGHT */}
          <div className="hidden lg:flex items-center gap-10">

            <ul className="flex items-center gap-10 text-lg font-medium">
              {rightLinks.map(renderDesktopLink)}
            </ul>

            {/* LANGUAGES */}
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

          {/* MOBILE ICON */}
          <button
            onClick={() => setMobileMenu(true)}
            className="lg:hidden text-2xl text-white"
          >
            <FaBars />
          </button>

        </div>

        {/* CENTER BLUR */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[350px] h-[180px] bg-[#e0bc80]/20 blur-3xl rounded-full pointer-events-none"></div>

      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl transition-all duration-500 lg:hidden
        ${
          mobileMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >

        {/* TOP */}
        <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">

          <Image
            src="/logo.png"
            alt="Logo"
            width={90}
            height={60}
          />

          <button
            onClick={() => setMobileMenu(false)}
            className="text-white text-2xl"
          >
            <FaTimes />
          </button>

        </div>

        {/* LINKS */}
        <div className="px-6 py-8 flex flex-col gap-5">

          {allLinks.map((item: any, i: number) => {

            // DROPDOWN
            if (item.dropdown) {
              return (
                <div
                  key={i}
                  className="border-b border-white/10 pb-4"
                >

                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.name
                          ? null
                          : item.name
                      )
                    }
                    className="w-full flex items-center justify-between text-white text-lg"
                  >

                    {item.name}

                    <FaChevronDown
                      className={`transition duration-300
                      ${
                        openDropdown === item.name
                          ? "rotate-180"
                          : ""
                      }`}
                    />

                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300
                    ${
                      openDropdown === item.name
                        ? "max-h-60 mt-4"
                        : "max-h-0"
                    }`}
                  >

                    <div className="flex flex-col gap-3 pl-3">

                      {item.dropdown.map(
                        (sub: any, idx: number) => (
                          <Link
                            key={idx}
                            href={`${prefix}${sub.href}`}
                            onClick={() =>
                              setMobileMenu(false)
                            }
                            className="text-gray-300 hover:text-[#e0bc80] transition"
                          >
                            {sub.name}
                          </Link>
                        )
                      )}

                    </div>

                  </div>

                </div>
              );
            }

            // NORMAL LINKS
            const fullHref =
              item.href === "/"
                ? prefix
                : `${prefix}${item.href}`;

            return (
              <Link
                key={i}
                href={fullHref}
                onClick={() => setMobileMenu(false)}
                className="text-white text-lg border-b border-white/10 pb-4 hover:text-[#e0bc80] transition"
              >
                {item.name}
              </Link>
            );
          })}

          {/* LANGUAGES */}
          <div className="pt-6">

            <p className="text-[#e0bc80] text-sm mb-4">
              Language
            </p>

            <div className="flex gap-3 flex-wrap">

              {languages.map((lang, i) => (
                <Link
                  key={i}
                  href={`/${lang.code}`}
                  onClick={() => setMobileMenu(false)}
                  className="px-4 py-2 rounded-full border border-white/20 text-white hover:bg-[#e0bc80] hover:text-black transition"
                >
                  {lang.label}
                </Link>
              ))}

            </div>

          </div>

        </div>

      </div>
    </>
  );
}