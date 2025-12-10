"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import carouselProducts from "../data/carousel";
import { useLocation } from "../context/LocationContext";

const ProductCarousel: React.FC = () => {
  const { region } = useLocation();
  const isArgentina = region === "Argentina";
  const [visibleCount, setVisibleCount] = useState(3);
  
  const gap = 16;

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setVisibleCount(window.innerWidth >= 768 ? 3 : 2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-4">
      {/* Scrollable container with native horizontal scroll */}
      <div
        className="flex gap-4 overflow-x-auto px-4 scrollbar-hide scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {carouselProducts.map((product) => (
          <a
            key={product.id}
            href={isArgentina ? product.links.ar : product.links.us}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 block select-none group"
            style={{
              width: `calc((100vw - ${gap * (visibleCount + 1)}px) / ${visibleCount})`,
            }}
            draggable={false}
          >
            <div className="relative aspect-[2/3] overflow-hidden bg-[#e5e5e5]">
              {/* Primary image */}
              <Image
                src={product.images.primary}
                alt={isArgentina ? product.nameAR : product.nameUS}
                fill
                className="object-contain transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                sizes={`(max-width: 768px) 50vw, 33vw`}
                draggable={false}
              />
              {/* Hover image */}
              <Image
                src={product.images.hover}
                alt={`${isArgentina ? product.nameAR : product.nameUS} - alternate view`}
                fill
                className="object-contain transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                sizes={`(max-width: 768px) 50vw, 33vw`}
                draggable={false}
              />
            </div>
            <p className="mt-2 text-xs font-bold text-white uppercase tracking-wide">
              {isArgentina ? product.nameAR : product.nameUS}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
