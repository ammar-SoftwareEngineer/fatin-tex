"use client";

import React from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";

export default function ProductNavigationExample() {
  const router = useRouter();
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : undefined;
  const prefix = locale ? `/${locale}` : "";

  const makeHref = (path: string) => {
    const p = path.startsWith("/") ? path : `/${path}`;
    return prefix ? `${prefix}${p}` : p;
  };

  const products = [
    { name: "Cotton Fabric", slug: "cotton" },
    { name: "Silk Fabric", slug: "silk" },
    { name: "Linen Fabric", slug: "linen" },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Products (example navigation)</h3>

      <ul className="space-y-3">
        {products.map((p) => {
          const href = makeHref(`/products/${p.slug}`);
          return (
            <li key={p.slug} className="flex items-center gap-3">
              <Link href={href} className="text-[#e0bc80] hover:underline">
                {p.name}
              </Link>

              <button
                onClick={() => router.push(href)}
                className="ml-4 px-3 py-1 rounded bg-white/10 text-white"
              >
                Go (router.push)
              </button>
            </li>
          );
        })}
      </ul>

    </div>
  );
}
