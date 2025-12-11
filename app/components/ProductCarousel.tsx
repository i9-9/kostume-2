"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import carouselProducts from "../data/carousel";
import { useLocation } from "../context/LocationContext";

const ProductCarousel: React.FC = () => {
  const { region } = useLocation();
  const isArgentina = region === "Argentina";
  const [visibleCount, setVisibleCount] = useState(3);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
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

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      // Initial check
      checkScrollPosition();
      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.offsetWidth / visibleCount;
      container.scrollBy({
        left: itemWidth + gap,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.offsetWidth / visibleCount;
      container.scrollBy({
        left: -(itemWidth + gap),
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-4">
      {/* Wrapper for positioning the scroll buttons */}
      <div className="relative">
        {/* Scrollable container with native horizontal scroll */}
        <div
          ref={scrollContainerRef}
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
        
        {/* Left scroll button */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-0 bottom-0 w-16 z-10 flex items-center justify-center cursor-pointer bg-black/10 hover:bg-black/20 transition-colors"
            aria-label="Scroll left"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-black animate-pulse-subtle"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6L9 12L15 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        
        {/* Right scroll button */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-0 bottom-0 w-16 z-10 flex items-center justify-center cursor-pointer bg-black/10 hover:bg-black/20 transition-colors"
            aria-label="Scroll right"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-black animate-pulse-subtle"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductCarousel;
