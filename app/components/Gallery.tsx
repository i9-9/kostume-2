import React, { useState, useEffect } from "react";
import images from "../data/gallery";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryProps {
  link: string;
  location?: "ar" | "us";
}

const Gallery: React.FC<GalleryProps> = ({ link, location = "ar" }) => {
  const [imageSet, setImageSet] = useState(images.desktop);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      setIsMobile(mobile);
      if (mobile) {
        setImageSet(images.mobile);
      } else {
        setImageSet(images.desktop);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to determine aspect ratio class based on device type
  const getAspectRatioClass = () => "aspect-[4/5]";

  // Function to construct the product URL based on location
  const getProductUrl = (productPath: string) => {
    if (productPath.startsWith('http')) {
      return productPath;
    }
    const baseUrl = "https://eshop.kostumeweb.net";
    const path = location === "us" ? "/us/products" : "/productos";
    return `${baseUrl}${path}/${productPath}/`;
  };

  // Animation variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  // Solo mostrar las primeras 2 imágenes para el layout compacto
  const compactImageSet = imageSet.slice(0, 2);

  return (
    <motion.section 
      aria-label="Product Categories" 
      className="px-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Grid personalizado para 2 columnas que ocupen la mitad de la pantalla cada una */}
      <div className={`grid gap-4 ${
        isMobile 
          ? "grid-cols-1" 
          : "grid-cols-2"
      }`}>
        {compactImageSet.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative group"
          >
            <Link
              href={getProductUrl(item.link)}
              aria-label={`View ${item.title} collection`}
            >
              {/* Aspect Ratio Container */}
              <div
                className={`relative w-full ${getAspectRatioClass()}`}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="min-w-full min-h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label={`${item.title} video`}
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={`KOSTÜME ${item.title} collection`}
                    className="min-w-full min-h-full object-cover"
                    loading="lazy"
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 768px) 50vw, 50vw"
                    quality={85}
                  />
                )}
              </div>
              {/* Overlay Text - Desactivado temporalmente */}
              {/* <motion.div
                className={`absolute inset-0 flex justify-center items-center bg-black transition-opacity duration-700 ${
                  isMobile
                    ? "bg-opacity-50 opacity-100"
                    : "bg-opacity-20 opacity-0 group-hover:opacity-100"
                }`}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.6)" }}
              >
                <motion.span
                  className="condensed-bold text-white text-center text-[11px] md:text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.span>
              </motion.div> */}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Gallery;