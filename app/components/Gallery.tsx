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


  const getProductUrl = (productPath: string) => {
    if (productPath.startsWith('http')) {
      return productPath;
    }
    const baseUrl = "https://eshop.kostumeweb.net";
    
    if (productPath === "rain-capsule") {
      return `${baseUrl}/rain-capsule/`;
    }
    
    if (productPath === "denim") {
      return `${baseUrl}/denim/`;
    }
    
    if (productPath === "ver-todo/gafas1") {
      return `${baseUrl}/ver-todo/gafas1/`;
    }
    
    if (productPath === "50ss26") {
      const regionPath = location === "us" ? "/us" : "/ar";
      return `${baseUrl}${regionPath}/50ss26`;
    }
    
    const path = location === "us" ? "/us/products" : "/productos";
    return `${baseUrl}${path}/${productPath}/`;
  };

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

  const largeCards = imageSet.slice(0, 2);
  const smallCards = isMobile ? images.mobile.slice(0, 3) : images.desktop.slice(2, 5);

  const renderCard = (item: any, index: number, isLarge: boolean = false) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="relative group"
    >
      <Link
        href={getProductUrl(item.link)}
        aria-label={`View ${item.title} collection`}
      >
        <div
          className={`relative w-full ${
            isLarge ? "aspect-[4/5]" : "aspect-[4/5]"
          }`}
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
              sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
              quality={85}
            />
          )}
        </div>
      </Link>
    </motion.div>
  );

  return (
    <motion.section 
      aria-label="Product Categories" 
      className="px-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {!isMobile && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          {largeCards.map((item, index) => renderCard(item, index, true))}
        </div>
      )}

      <div className={`grid gap-4 ${
        isMobile 
          ? "grid-cols-1" 
          : "grid-cols-3"
      }`}>
        {smallCards.map((item, index) => renderCard(item, index, false))}
      </div>
    </motion.section>
  );
};

export default Gallery;